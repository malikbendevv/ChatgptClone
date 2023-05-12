import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  // console.log("ehre", openai);
  console.log("ehre", prompt, model);

  const res = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.9,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch((err) => {
      console.log("error", err.message);

      return "ChatGpt was unable to find and answer for your question";
    });
  return res;
};

export default query;
