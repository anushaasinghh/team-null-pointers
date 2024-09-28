'''from flask import Flask, request, jsonify
import warnings
from pymongo import MongoClient

# Initialize Flask app
app = Flask(__name__)

warnings.filterwarnings('ignore')

# MongoDB Connection
mongo_uri = 'mongodb+srv://adityakumar:g7OP5cge5ND71HQl@learningdatabase.st3um.mongodb.net/?retryWrites=true&w=majority&tls=true&tlsAllowInvalidCertificates=true'
client = MongoClient(mongo_uri)

# Define the database for The Constitution of India
constitution_db = client['THE_CONSTITUTION_OF_INDIA']

# Define collections for The Constitution of India
constitution_collections = {
    "Fundamental_Rights": constitution_db['Fundamental_Rights'],
    "Elections": constitution_db['Elections'],
    "Emergency_Provisions": constitution_db['Emergency_Provisions'],
    "Finance_Property_Contracts_and_Suits": constitution_db['Finance_Property_Contracts_and_Suits'],
    "The_Panchayats": constitution_db['The_Panchayats'],
    "Trade_commerce_and_Intercourse_within_the_territory_of_INDIA": constitution_db['Trade_commerce_and_Intercourse_within_the_territory_of_INDIA']
}

# Store the user's state
user_state = {}

def search_article_by_no(collection, art_no):
    try:
        # Search for the article by ArtNo in the given collection
        for article in collection.find({"ArtNo": art_no}):
            if article:
                print(article)
                return article
            else:
                return "No such article present in our database for now"
    except Exception as e:
        print(f"Error while searching for article: {e}")
        return None

def chatbot_response(user_input, user_id):
    # If the user hasn't selected a category yet
    if user_state.get(user_id, {}).get('sub_option') is None:
        print("hii")
        return "Please select a valid section of The Constitution of India."

    # Get the selected collection based on the user's state
    sub_option = user_state[user_id]['sub_option']
    collection = constitution_collections.get(sub_option)
    
    if collection is not None:
        art_no = user_input.strip()  # Keep the input as a string

        article = search_article_by_no(collection, art_no)
        if article:
            # Return the full document (article) found
            return f"Article No: {article.get('ArtNo')}\nName: {article.get('Name')}\nDescription: {article.get('ArtDesc', 'No Description')}\nClauses: {article.get('Clauses','No Clauses')}"
        else:
            return f"Sorry, no article found with the number {art_no} in {sub_option}."
    
    return "I'm sorry, I didn't understand that. Please try again."

@app.route('/chat', methods=['POST'])
def chat():
    if not request.json or 'message' not in request.json or 'user_id' not in request.json:
        return jsonify({"error": "Invalid request, 'message' and 'user_id' fields are required"}), 400
    
    user_input = request.json.get("message")
    user_id = request.json.get("user_id")

    # Check if the user is selecting a collection
    if user_state.get(user_id, {}).get('sub_option') is None:
        if user_input in constitution_collections.keys():
            user_state[user_id] = {'sub_option': user_input}
            return jsonify({"response": f"You selected {user_input}. Please enter the article number you want to search for."})
        else:
            return jsonify({"response": "Please select a valid section of The Constitution of India from: " + ", ".join(constitution_collections.keys())})

    # Process user input for article number
    response = chatbot_response(user_input, user_id)
    
    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(debug=True)'''
