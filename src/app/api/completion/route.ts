import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
 
export const runtime = 'edge';
 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});
 
export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { prompt, partner } = await req.json();

  console.log(partner);
 
  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    // a precise prompt is important for the AI to reply with the correct tokens
    messages: [
      {
        role: 'user',
        content: `A VC Tyler is a bit of a jock and always talks about Talking to your customers, finding your sandbox (things you are good at) and finding your wedge (your different ideas). Reply to my question below like Tyler in less than 100 words. Make it sound more like a bro and a jock. Use words like bro and dude, like a frat-bro would. Idea: ${prompt}`,
      },
    ],
    max_tokens: 200,
    temperature: 0.7, // you want absolute certainty for spell check
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });
 
  const stream = OpenAIStream(response);
 
  return new StreamingTextResponse(stream);
}

