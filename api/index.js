const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { OpenAIApi } = require('@openai/api');


// app.post('/api/chat', async (req, res) => {
//     const { message } = req.body;
  
//     const response = await openai.complete({
//       engine: 'davinci', // or any other OpenAI engine of your choice
//       prompt: message,
//       maxTokens: 50, // Adjust this based on the desired response length
//       temperature: 0.6, // Adjust this to control response randomness
//       n: 1,
//       stop: '\n',
//     });
  
//     const { choices } = response.data;
//     const botResponse = choices[0].text.trim();
  
//     res.json({ response: botResponse });
//   });
  
// Set up API endpoints here
app.post('/api/chat', (req, res) => {
    const { message } = req.body;
  
    // Process the message and generate a response
  
    res.json({ response: 'Sample response from the chatbot' });
  });
  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
