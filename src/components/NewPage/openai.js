import axios from 'axios';

const API_KEY = "AIzaSyBTBvMU7QrAX6aO4uU7ufz6E9BlL-044zU";

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  },
});

export const getOpenAIResponse = async (prompt) => {
  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
    {
      contents: [{ parts: [{ text: prompt }] }],
    }
  );
  return response.data;
};

export async function simplify() {
    const prefix = "Explain this using common words in reference with the indian constitution\n\n\n";
    const originalText = document.getElementById("blog-text").textContent;

    // Placeholder for your Simplify API logic
    console.log("Original Text: ", originalText);
    const res = await getOpenAIResponse(prefix + originalText);
    console.log(res);
    const simplifiedText = res.candidates[0].content.parts[0].text;

    // "This is where the simplified version will be displayed.";

    const simplifiedTextDiv = document.getElementById("simplified-text");
    simplifiedTextDiv.innerText = simplifiedText;
    simplifiedTextDiv.style.display = "block";
  }
