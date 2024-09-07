import axios from 'axios';

// // // // const API_KEY = "AIzaSyBTBvMU7QrAX6aO4uU7ufz6E9BlL-044zU";

// // // // const openai = axios.create({
// // // //   baseURL: 'https://api.openai.com/v1',
// // // //   headers: {
// // // //     'Content-Type': 'application/json',
// // // //     'Authorization': `Bearer ${API_KEY}`
// // // //   },
// // // // });

// // // // export const getOpenAIResponse = async (prompt) => {
// // // //   const response = await axios.post(
// // // //     `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
// // // //     {
// // // //       contents: [{ parts: [{ text: prompt }] }],
// // // //     }
// // // //   );
// // // //   return response.data;
// // // // };

// // // // export async function simplify() {
// // // //     const prefix = "Explain this using common words in reference with the indian constitution\n\n\n";
// // // //     const originalText = document.getElementById("blog-text").textContent;

// // // //     // Placeholder for your Simplify API logic
// // // //     console.log("Original Text: ", originalText);
// // // //     const res = await getOpenAIResponse(prefix + originalText);
// // // //     console.log(res);
// // // //     const simplifiedText = res.candidates[0].content.parts[0].text;

// // // //     // "This is where the simplified version will be displayed.";

// // // //     const simplifiedTextDiv = document.getElementById("simplified-text");
// // // //     simplifiedTextDiv.innerText = simplifiedText;
// // // //     simplifiedTextDiv.style.display = "block";
// // // //   }

// // // import axios from 'axios';

// // // // API Key and base URL should be kept secure
// // // const API_KEY = "AIzaSyBTBvMU7QrAX6aO4uU7ufz6E9BlL-044zU";

// // // const openai = axios.create({
// // //   baseURL: 'https://api.openai.com/v1',
// // //   headers: {
// // //     'Content-Type': 'application/json',
// // //     'Authorization': `Bearer ${API_KEY}`
// // //   },
// // // });

// // // // Function to get OpenAI response
// // // export const getOpenAIResponse = async (prompt) => {
// // //   try {
// // //     const response = await openai.post(
// // //       '/engines/davinci/completions', // Update to your specific endpoint if needed
// // //       {
// // //         prompt: prompt,
// // //         max_tokens: 150, // Adjust as needed
// // //         temperature: 0.7 // Adjust as needed
// // //       }
// // //     );
// // //     return response.data;
// // //   } catch (error) {
// // //     console.error('Error fetching OpenAI response:', error);
// // //     throw error;
// // //   }
// // // };

// // // // Function to simplify text
// // // export const simplify = async (text) => {
// // //   const prefix = "Explain this using common words in reference with the Indian Constitution\n\n\n";
// // //   const prompt = prefix + text;

// // //   try {
// // //     const res = await getOpenAIResponse(prompt);
// // //     const simplifiedText = res.choices[0].text; // Adjust based on the response structure
// // //     return simplifiedText;
// // //   } catch (error) {
// // //     console.error('Error simplifying text:', error);
// // //     throw error;
// // //   }
// // // };

// // import axios from 'axios';

// // const API_KEY = "AIzaSyBX4TlvwTahyCGE9CgTCWVQsVTI68RhIGo"; // Replace with your actual API key

// // const openai = axios.create({
// //   baseURL: 'https://api.openai.com/v1',
// //   headers: {
// //     'Content-Type': 'application/json',
// //     'Authorization': `Bearer ${API_KEY}`
// //   },
// // });

// // export const getOpenAIResponse = async (prompt) => {
// //   try {
// //     const response = await openai.post(
// //     //   `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent`,
// //       `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent`,     
// //       {
// //         contents: [{ parts: [{ text: prompt }] }],
// //       }
// //     );
// //     return response.data;
// //   } catch (error) {
// //     console.error('Error fetching response from OpenAI:', error);
// //     throw error; // Rethrow the error to be caught in the component
// //   }
// // };

// import axios from 'axios';

// // Replace this with your actual API key
// const API_KEY = "AIzaSyBX4TlvwTahyCGE9CgTCWVQsVTI68RhIGo";

// const openai = axios.create({
//   baseURL: 'https://api.openai.com/v1', // Ensure this baseURL is correct
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${API_KEY}`
//   },
// });

const API_KEY = "AIzaSyCPbrkibM6pmIDBt3RAdZ1phQs-sgNnPdM";
export const getOpenAIResponse = async (prompt) => {
  console.log ("xyz");
  console.log(API_KEY);
  try {
    const response = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
      {
        contents: [{ parts: [{ text: prompt }] }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching response from OpenAI:', error.response ? error.response.data : error.message);
    throw error; // Rethrow the error to be caught in the component
  }
};


// import axios from 'axios';

// // Replace this with your actual OpenAI API key
// const API_KEY = 'YAIzaSyBX4TlvwTahyCGE9CgTCWVQsVTI68RhIGo';

// const openai = axios.create({
//   baseURL: 'https://api.openai.com/v1',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${API_KEY}`,
//   },
// });

// export const getOpenAIResponse = async (prompt) => {
//   try {
//     const response = await openai.post('/v1/chat/completions', {
//       prompt: prompt,
//       max_tokens: 150, 
//       temperature: 0.7, 
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching response from OpenAI:', error.response ? error.response.data : error.message);
//     throw error; // Rethrow the error to be caught in the component
//   }
// };
