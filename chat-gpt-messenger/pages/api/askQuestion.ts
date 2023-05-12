import type { NextApiRequest, NextApiResponse } from "next";

import query from "../../lib/queryApi";
import { adminDb } from "../../firebaseAdmin";
import admin from "firebase-admin";

type Data = {
  answer: string;
};

export default async function handleClientScriptLoad(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "prompt is required" });
    return;
  }

  if (!chatId) {
    res.status(400).json({ answer: "chatId is required" });
    return;
  }

  //chatgpt querry

  const response = await query(prompt, chatId, model);
  console.log({ response });
  const message: Message = {
    text: response || "ChatGPT was unable to find an answer for that",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "CHATGPT",
      name: "ChatGPT",
      avatar: "https://links.papareact.com/89k",
    },
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
}
