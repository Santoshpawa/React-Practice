import React, { useState } from "react";
import axios from "axios";

const API_KEY =
  "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"; // 🔁 Replace this with your actual OpenRouter API key
const MODEL_ID = "moonshotai/kimi-k2:free"; // 🔁 You can change to another model like "mistralai/mistral-7b"

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setOutput("");

    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: MODEL_ID,
          messages: [{ role: "user", content: input }],
          max_tokens: 800, // ✅ Use fewer tokens to avoid free tier limit
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const text = response.data.choices[0].message.content;
      setOutput(text);
    } catch (error) {
      console.error("API Error:", error);
      setOutput(
        "Error: " + (error?.response?.data?.error?.message || error.message)
      );
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "Arial",
        maxWidth: "700px",
        margin: "auto",
      }}
    >
      <h1>OpenRouter AI Chat</h1>
      <textarea
        rows="5"
        cols="70"
        placeholder="Ask the AI something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "100%", marginBottom: "1rem" }}
      />
      <br />
      <button
        onClick={handleGenerate}
        disabled={loading}
        style={{ padding: "0.5rem 1rem" }}
      >
        {loading ? "Generating..." : "Generate"}
      </button>
      <div
        style={{
          marginTop: "2rem",
          background: "#f0f0f0",
          padding: "1rem",
          borderRadius: "8px",
        }}
      >
        <strong>Response:</strong>
        <pre style={{ whiteSpace: "pre-wrap" }}>{output}</pre>
      </div>
    </div>
  );
}
