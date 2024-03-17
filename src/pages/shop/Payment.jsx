import React, { useState } from 'react';
import axios from 'axios';


const Payment = () => {
    const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const res = await axios.post('/get-token', formData);
      setResponse(JSON.stringify(res.data));
    } catch (error) {
      console.error('Error:', error);
      setResponse('An error occurred. Please try again.');
    }
  };
    
  return (
    <div className='max-w-screen-2x1 container mx-auto xl:px-24 px-4 py-28'>
        <form onSubmit={handleSubmit}>
        <input type="text" name="redirect_uri" placeholder="Redirect URI" required />
        <input type="text" name="client_id" placeholder="Client ID" required />
        <input type="text" name="client_secret" placeholder="Client Secret" required />
        <input type="text" name="code" placeholder="Authorization Code" required />
        <input type="text" name="grant_type" placeholder="Grant Type" required />
        <button type="submit">Get Token</button>
      </form>
      <div>{response}</div>
    </div>
  )
}

export default Payment