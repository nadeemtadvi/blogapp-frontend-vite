import React, { useState } from "react";
import axios from "axios";
import { post } from "../services/Endpoint";

const ContentGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerateContent = async () => {
    if (!prompt) {
      setError("Please enter a prompt.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const response = await post("/ai/generatetext", { prompt });
      setGeneratedContent(response.data.generatedText);
    } catch (error) {
      console.error(
        "API Error Details:",
        error.response?.data || error.message
      );
      setError("Error generating content");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-screen-2xl  rounded  lg:mx-auto  bg-white p-2 sm:p-4 ">
      <div className="border border-stone-200 rounded mt-6 md:mt-12 md:grid grid-cols-2">
        <div className="bg-[#472ffd0a] px-8 py-16 border-b md:border-r border-stone-200">
          <h2 className="text-[20px] font-semibold text-white w-fit px-2 rounded bg-[#472ffd] mb-4">
            AI Text Generator{" "}
          </h2>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={4}
            placeholder="Enter your prompt"
            className="border text-[16px] bg-white border-stone-200  rounded outline-none  w-full p-5 "
          />
          <div className="text-end my-4">
            <button
              onClick={handleGenerateContent}
              disabled={loading}
              className=" text-[16px]  rounded text-white  bg-[#472ffd] font-normal px-3 py-1.5 hover:bg-white hover:text-[#472ffd] border hover:border-[#472ffd]"
            >
              {loading ? "Generating..." : "Generate"}
            </button>
          </div>
        </div>
        <div className="px-8 py-16">
        <h3 className="mb-2 text-[16px] font-medium underline">Result:</h3>

          {error && <div className="error text-[16px]">{error}</div>}
          {generatedContent && (
            <div>
              <p className="text-stone-700 text-[16px] font-normal">{generatedContent}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentGenerator;
