"use client";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import NewChat from "./NewChat";
import { collection, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";

export default function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session && collection(db, "users", session.user?.email!, "chats"),
    orderBy("createdAt", "asc")
  );

  console.log(chats);
  return (
    <div className="p-2 flex flex-col h-screen ">
      <div className="flex-1">
        <div>
          {/* New chat */}
          <NewChat />

          <div className="hidden sm:inline ">
            <ModelSelection />
          </div>
          {/* Map  through the chartRows */}
          <div className="flex flex-col space-y-2 my-2">
            {loading && (
              <div className="animate-pulse text-center text-white">
                <p> Loading Chats... </p>
              </div>
            )}

            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>
      {session && (
        <img
          src={session.user?.image!}
          onClick={() => signOut()}
          alt="Profile picture"
          className="w-12 h-12 cursor-pointer rounded-full mx-auto mb-2 hover:opacity-50 "
        />
      )}
    </div>
  );
}
