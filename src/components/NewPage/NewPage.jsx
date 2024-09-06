import React, { useState, useEffect } from "react";
import "./NewPage.css";
// import OpenAI from "openai";
import { getOpenAIResponse, simplify } from "./openai";

const NewPage = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/content.txt")
      .then((response) => response.text())
      .then((data) => setContent(data))
      .catch((error) => console.error("Error fetching content:", error));
  }, []);
  // async function simplify() {
  //   const prefix = "Simplify this using common words\n\n\n";
  //   const originalText = document.getElementById("blog-text").textContent;

  //   // Placeholder for your Simplify API logic
  //   console.log("Original Text: ", originalText);
  //   const res = await getOpenAIResponse(prefix + originalText);
  //   console.log(res);
  //   const simplifiedText = res.candidates[0].content.parts[0].text;

  //   // "This is where the simplified version will be displayed.";

  //   const simplifiedTextDiv = document.getElementById("simplified-text");
  //   simplifiedTextDiv.innerText = simplifiedText;
  //   simplifiedTextDiv.style.display = "block";
  // }
  return (
    <div className="new-page">
      <div class="container">
        <div id="blog-text">
          <p>
            Service tax levied by Union and collected and appropriated by the
            Union and the States. article 268A
          </p>
        </div>
        <div class="button-container">
          <button id="simplify-btn" onClick={simplify}>
            Simplify
          </button>
          <button id="speak-btn">Speak</button>
          <button id="translate-btn">Translate</button>
        </div>

        <div id="simplified-text" class="simplified-text"></div>
      </div>
    </div>
  );
};

export default NewPage;
