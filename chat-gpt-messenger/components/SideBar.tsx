import NewChat from "./NewChat";

export default function SideBar() {
  return (
    <div className="p-2 flex flex-col h-screen ">
      <div className="flex-1">
        <div>
          {/* New chat */}
          <NewChat />
        </div>

        <div>{/* ModeSelection */}</div>
        {/* Map  through the chartRows */}
      </div>
    </div>
  );
}
