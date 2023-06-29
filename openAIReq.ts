import { Configuration, OpenAIApi } from "openai";

export const openAIReq = async (imgKeywords: string) => {
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const imgKeywordsStr = `
      Create a one-sentence description of a photo 
      that has generated the following JSON data 
      ${JSON.stringify(imgKeywords)}
    `;
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{"role": "system", "content": imgKeywordsStr}, {role: "user", content: "Hello world"}],
    });
    return completion.data.choices[0].message;
  } catch(err) {
    return err;
  }
};
