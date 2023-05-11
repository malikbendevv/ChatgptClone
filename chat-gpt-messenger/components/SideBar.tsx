"use client";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import NewChat from "./NewChat";
import { collection, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";

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
        </div>

        <div>{/* ModeSelection */}</div>
        {/* Map  through the chartRows */}

        {chats?.docs.map((chat) => (
          <ChatRow key={chat.id} id={chat.id} />
        ))}
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
