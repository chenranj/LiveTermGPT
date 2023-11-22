import axios from 'axios';
import config from '../../config.json';
import OpenAI from "openai";


export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );
  return data;
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');
  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};

export const getGPTResponse = async (sys_info:string, question: string) => {
  const openai = new OpenAI({
    
    apiKey: config.openai_key,
    dangerouslyAllowBrowser: true,
  });
  
  const completion = await openai.chat.completions.create({
    messages: [
      {"role": "system", "content": sys_info},
      {"role": "user", "content": question}],
    model: "gpt-3.5-turbo",
    max_tokens: 100,
  });
  const result = completion.choices[0].message.content;
  console.log(result);
  return result;
}