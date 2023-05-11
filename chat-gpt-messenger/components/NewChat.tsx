"use client";
import React from "react";

import { PlusIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function NewChat() {
  const router = useRouter();
  const { data: session } = useSession();
  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        userId: session?.user?.email!,
        creaetdAt: serverTimestamp(),
      }
    ).catch((error) => {
      console.log({ error });
    });

    router.push(`/chat/${doc?.id}`);
  };

  return (
    <div onClick={createNewChat} className="border-gray-700 border chatRow">
      <PlusIcon className="h-6 w-4" />

      <p>New Chat</p>
    </div>
  );
}

export default NewChat;
