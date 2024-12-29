import React, { useState } from 'react';
import axios from 'axios';
import { post } from "../services/Endpoint";


const ContentGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateContent = async () => {
    if (!prompt) {
      setError('Please enter a prompt.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await post('/ai/generatetext', { prompt });
      setGeneratedContent(response.data.generatedText);
    } catch (error) {
      console.error('API Error Details:', error.response?.data || error.message);
      setError('Error generating content');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='max-w-screen-lg m-2 md:mt-[3.6rem] rounded-[12px] md:m-5 lg:mx-auto mt-[1.5rem] sm:mt-[3.6rem] bg-white p-2 sm:p-4 md:p-10 '>
      <h2 className='text-[20px] font-semibold tracking-tight text-gray-900 mb-4'>AI Generate Blog Content</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={4}
        placeholder="Enter your prompt"
        className='border border-gray-200 bg-gray-100 rounded-[8px] outline-none  w-full p-5 focus:border-[#0284c7]'
      />
      <div className='text-end my-4'>
      <button onClick={handleGenerateContent} disabled={loading} className='hover:bg-gray-100 hover:border-gray-100  rounded-[8px]  hover:text-gray-400 font-medium p-[6px_36px_7px] bg-white text-[#0284c7] border border-[#0284c7]'>
        {loading ? 'Generating...' : 'Generate Content'}
      </button>
      </div>
      {error && <div className="error">{error}</div>}
      {generatedContent && (
        <div >
          <h3 className='mb-2'>Result:</h3>
          <p className='text-gray-600'>{generatedContent}</p>
        </div>
      )}
    </div>
  );
};

export default ContentGenerator;
