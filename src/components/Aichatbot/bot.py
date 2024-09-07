import warnings
import spacy
from flask import Flask, request, render_template
from pymongo import MongoClient
import random

# Suppress warnings
warnings.filterwarnings('ignore', category=UserWarning, module='spacy')
warnings.simplefilter(action='ignore', category=FutureWarning)

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Used to sign session cookies

# Initialize MongoDB Client
client = MongoClient('mongodb+srv://adityakumar:g7OP5cge5ND71HQl@learningdatabase.st3um.mongodb.net/')
db = client['constitution_database']
collection_constitution = db['THE_CONSTITUTION_OF_INDIA']
collection_nyaya = db['THE_BHARATIYA_NYAYA_SANHITA']

# Load SpaCy model
nlp = spacy.load('en_core_web_md')

# Define greeting messages and similarity threshold
welcome_messages = [
    "hi", "hii", "help me", "can you help me", "can you guide me", "heyy", 
    "how are you", "hello", "hey", "greetings", "wassup", "what's up", 
    "good morning", "good evening", "namaste", "salut", "salute", "howdy", "yo", 
    "what's new", "how's it going", "help", "assist", "guide", "need help",
    "please help me", "please guide me", "what can you do for me", 
    "how can you assist me", "i have question","i want some help", "i am looking for help",
    "how can you help", "i need assistance", "want some help", 
    "looking for help", "how can you be of service", "i need help", "i have questions", 
    "i need answer","is there anything you can do for me", "how can you support me", "got questions"
]

SIMILARITY_THRESHOLD = 0.7

# Define conversation state
user_sessions = {}

# Define part mappings for each collection
constitution_parts = {
    "Fundamental Rights": "Fundamental_Rights",
    "Elections": "Elections",
    "Emergency Provisions": "Emergency_Provisions",
    "Finance Property Contracts and Suits": "Finance_Property_Contracts_and_Suits",
    "The Panchayats": "The_Panchayats",
    "Trade Commerce and Intercourse within the territory of India": "Trade_commerce_and_Intercourse_within_the_territory_of_INDIA"
}

nyaya_parts = {
    "General Exceptions": "GENERAL EXCEPTIONS",
    "Of Abetment, Criminal Conspiracy And Attempt": "OF_ABETMENT_CRIMINAL_CONSPIRACY_AND_ATTEMPT",
    "Of Offences Against Woman And Child": "OF_OFFENCES_AGAINST_WOMAN_AND_CHILD",
    "Preliminary": "PRELIMINARY",
    "Of Punishments": "OF_PUNISHMENTS"
}

# Greeting Styles
def greet_user_standard():
    return (
        "Welcome to Nyaya Mitra! How may I assist you today?\n"
        "Choose one of the following options:\n"
        "1. The Constitution Of India\n"
        "2. Bharatiya Nyaya Sanhita"
    )

def greet_user_casual():
    return (
        "Hey there! 😊 How is it going? Nyaya Mitra is here to help you with legal stuff.\n"
        "Just pick one of the options below:\n"
        "1. The Constitution Of India\n"
        "2. Bharatiya Nyaya Sanhita"
    )

def greet_user_friendly():
    return (
        "Hi! 👋 Welcome to Nyaya Mitra. How can I help you today?\n"
        "Choose an option below to get started:\n"
        "1. The Constitution Of India\n"
        "2. Bharatiya Nyaya Sanhita"
    )

def greet_user_professional():
    return (
        "Greetings! Welcome to Nyaya Mitra. I am here to assist you with your queries.\n"
        "Please select from the following categories:\n"
        "1. The Constitution Of India\n"
        "2. Bharatiya Nyaya Sanhita"
    )

def get_greeting():
    greetings = [
        greet_user_standard,
        greet_user_casual,
        greet_user_friendly,
        greet_user_professional
    ]
    return random.choice(greetings)()

def get_custom_greeting(user_input):
    user_input = user_input.lower()
    if "help" in user_input or "assist" in user_input:
        return (
            "Hello! How can Nyaya Mitra assist you today? Choose one of the options below:\n"
            "1. The Constitution Of India\n"
            "2. Bharatiya Nyaya Sanhita"
        )
    elif "hello" in user_input or "hi" in user_input:
        return (
            "Hi there! 😊 Nyaya Mitra is here to help with any legal queries you have.\n"
            "Please choose one of the options below:\n"
            "1. The Constitution Of India\n"
            "2. Bharatiya Nyaya Sanhita"
        )
    else:
        return get_greeting()

def is_greeting(user_input):
    user_doc = nlp(user_input.lower())
    for message in welcome_messages:
        message_doc = nlp(message.lower())  # Convert message to lower case for comparison
        similarity = user_doc.similarity(message_doc)
        if similarity >= SIMILARITY_THRESHOLD:
            return True
    return False

def handle_options(option):
    if option == "The Constitution Of India":
        return (
            "You selected The Constitution Of India. Please choose a specific part to know more:\n"
            "1. Fundamental Rights\n"
            "2. Elections\n"
            "3. Emergency Provisions\n"
            "4. Finance Property Contracts and Suits\n"
            "5. The Panchayats\n"
            "6. Trade Commerce and Intercourse within the territory of India"
        )
    elif option == "Bharatiya Nyaya Sanhita":
        return (
            "You selected Bharatiya Nyaya Sanhita. Please choose a specific part to know more:\n"
            "1. General Exceptions\n"
            "2. Of Abetment, Criminal Conspiracy And Attempt\n"
            "3. Of Offences Against Woman And Child\n"
            "4. Preliminary\n"
            "5. Of Punishments"
        )
    else:
        return "Invalid option. Please choose 'The Constitution Of India' or 'Bharatiya Nyaya Sanhita'."

def search_articles_constitution(query, collection):
    articles = collection.find({})
    matches = []
    query_doc = nlp(query.lower())
    
    for article in articles:
        art_no = article.get('ArtNo', '')
        name = article.get('Name', '')
        art_desc = article.get('ArtDesc', '')
        clauses = article.get('Clauses', [])
        
        if query_doc.similarity(nlp(art_desc.lower())) >= SIMILARITY_THRESHOLD:
            matches.append((art_no, name, art_desc))
        
        for clause in clauses:
            clause_no = clause.get('ClauseNo', '')
            clause_desc = clause.get('ClauseDesc', '')
            sub_clauses = clause.get('SubClauses', [])
            
            if query_doc.similarity(nlp(clause_desc.lower())) >= SIMILARITY_THRESHOLD:
                matches.append((art_no, name, clause_no, clause_desc))
            
            for sub_clause in sub_clauses:
                sub_clause_no = sub_clause.get('sub_clause_no', '')
                sub_clause_desc = sub_clause.get('sub_clause_desc', '')
                
                if query_doc.similarity(nlp(sub_clause_desc.lower())) >= SIMILARITY_THRESHOLD:
                    matches.append((art_no, name, clause_no, clause_desc, sub_clause_no, sub_clause_desc))
    
    matches.sort(key=lambda x: x[0])
    return matches[:5]  # Return top 5 matches

def search_articles_nyaya(query, collection):
    articles = collection.find({})
    matches = []
    query_doc = nlp(query.lower())
    
    for article in articles:
        chapter_number = article.get('chapter_number', '')
        chapter_title = article.get('chapter_title', '')
        section_no = article.get('section_no', '')
        title = article.get('title', '')
        content = article.get('content', '')
        
        if any(query_doc.similarity(nlp(part.lower())) >= SIMILARITY_THRESHOLD for part in [chapter_number, chapter_title, section_no, title, content]):
            matches.append((chapter_number, chapter_title, section_no, title, content))
    
    matches.sort(key=lambda x: x[0])
    return matches[:5]  # Return top 5 matches

def format_articles_constitution(articles):
    response = "Here are the articles related to your query:\n"
    for match in articles:
        if len(match) == 3:
            response += f"Article No: {match[0]}\nName: {match[1]}\nDescription: {match[2]}\n\n"
        elif len(match) == 4:
            response += f"Article No: {match[0]}\nName: {match[1]}\nClause No: {match[2]}\nClause Description: {match[3]}\n\n"
        elif len(match) == 6:
            response += f"Article No: {match[0]}\nName: {match[1]}\nClause No: {match[2]}\nClause Description: {match[3]}\nSub-Clause No: {match[4]}\nSub-Clause Description: {match[5]}\n\n"
    return response if articles else "No articles found."

def format_articles_nyaya(articles):
    response = "Here are the chapters related to your query:\n"
    for match in articles:
        response += f"Chapter Number: {match[0]}\nChapter Title: {match[1]}\nSection No: {match[2]}\nTitle: {match[3]}\nContent: {match[4]}\n\n"
    return response if articles else "No chapters found."

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        user_input = request.form['user_input']
        session_id = request.cookies.get('session_id')
        
        if not session_id:
            session_id = str(random.randint(1000, 9999))
            response = app.make_response(render_template('index.html', message=get_greeting()))
            response.set_cookie('session_id', session_id)
            user_sessions[session_id] = {'state': 'initial'}
        else:
            if session_id not in user_sessions:
                user_sessions[session_id] = {'state': 'initial'}
        
        state = user_sessions[session_id]['state']
        
        if is_greeting(user_input):
            return render_template('index.html', message=get_custom_greeting(user_input))
        
        if state == 'initial':
            if user_input.lower() in ["1", "the constitution of india"]:
                user_sessions[session_id]['state'] = 'awaiting_constitution_part'
                return render_template('index.html', message=handle_options("The Constitution Of India"))
            elif user_input.lower() in ["2", "bharatiya nyaya sanhita"]:
                user_sessions[session_id]['state'] = 'awaiting_nyaya_part'
                return render_template('index.html', message=handle_options("Bharatiya Nyaya Sanhita"))
            else:
                return render_template('index.html', message="Please choose '1' for The Constitution Of India or '2' for Bharatiya Nyaya Sanhita.")
        
        if state == 'awaiting_constitution_part':
            part = next((part for key, part in constitution_parts.items() if key.lower() in user_input.lower()), None)
            if part:
                user_sessions[session_id]['state'] = 'awaiting_constitution_query'
                return render_template('index.html', message=f"Enter your query for the {part}:")
            else:
                return render_template('index.html', message="Invalid part. Please select a valid part from The Constitution Of India.")
        
        if state == 'awaiting_nyaya_part':
            part = next((part for key, part in nyaya_parts.items() if key.lower() in user_input.lower()), None)
            if part:
                user_sessions[session_id]['state'] = 'awaiting_nyaya_query'
                return render_template('index.html', message=f"Enter your query for the {part}:")
            else:
                return render_template('index.html', message="Invalid part. Please select a valid part from Bharatiya Nyaya Sanhita.")
        
        if state == 'awaiting_constitution_query':
            articles = search_articles_constitution(user_input, collection_constitution)
            formatted_response = format_articles_constitution(articles)
            user_sessions[session_id]['state'] = 'initial'
            return render_template('index.html', message=formatted_response)
        
        if state == 'awaiting_nyaya_query':
            articles = search_articles_nyaya(user_input, collection_nyaya)
            formatted_response = format_articles_nyaya(articles)
            user_sessions[session_id]['state'] = 'initial'
            return render_template('index.html', message=formatted_response)
        
    return render_template('index.html', message=get_greeting())

if __name__ == '__main__':
    app.run(debug=True)
