import React, { useRef, useState } from "react";
import { FiAlignCenter } from "react-icons/fi";
import { post } from "../services/Endpoint";
import { LuAlignCenter } from "react-icons/lu";

const ContentGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const textareaRef = useRef(null);

  const handleGenerateContent = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) {
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
  const handleTextareaInput = (e) => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; 
      textarea.style.height = `${textarea.scrollHeight}px`; // Adjust to fit content
    }
    setPrompt(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleGenerateContent(e);
    }
  };

  return (
    <div className="max-w-screen-2xl  rounded  lg:mx-auto  bg-white p-2 sm:p-4 flex justify-center items-center">
      <div className="border border-stone-200 rounded overflow-hidden w-full md:w-[60%] mt-6 md:mt-12 ">
        <div className="bg-white px-8 py-4">
          <form onSubmit={handleGenerateContent} className="relative">
            <div className="flex items-center justify-center">
            <h2 className="text-[20px] font-semibold  text-white w-fit px-2 rounded bg-[#472ffd] mb-4">
              AI Text Generator{" "}
            </h2>
            </div>
            <textarea
               ref={textareaRef}
              value={prompt}
              onChange={handleTextareaInput}
              onKeyDown={handleKeyPress}
              rows={1}
              placeholder="Enter your prompt"
              className="border text-[16px] bg-white border-stone-200  rounded-full focus:ring-1 outline-none focus:ring-stone-400  w-full py-4 pl-8 pr-32  overflow-hidden"
            />
            <div className=" absolute right-5 top-1/2  bottom-0 m-auto text-end">
              <button
                type="submit"
                disabled={loading}
                className={`text-[20px]  rounded-full text-white ${loading ? 'bg-[#472ffd] hover:text-[#472ffd]  hover:border-[#472ffd]':'bg-[#fd472f] hover:text-[#fd472f]  hover:border-[#fd472f]'}  font-normal w-10 h-10 flex items-center justify-center hover:bg-white border `}
              >
                {loading ? <FiAlignCenter className="inline-block animate-pulse"/> : <LuAlignCenter className="inline-block"/>}
              </button>
            </div>
          </form>
        </div>
        <div className="px-8 py-6 bg-stone-100 text-stone-800">
          <h3 className="mb-4 text-[16px] font-medium underline ">Result:</h3>

          {error && <div className="error text-[16px]">{error}</div>}
          {generatedContent ? (
            <p className="text-stone-600 text-[16px] font-normal">
              {generatedContent}
            </p>
          ) : (
            <div>
              <h4 className="h-[134px] animate-pulse mb-2 bg-stone-300 rounded"></h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentGenerator;
