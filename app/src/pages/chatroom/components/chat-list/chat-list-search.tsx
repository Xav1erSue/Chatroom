const ChatListSearch = () => {
  return (
    <section className="border-b-2">
      <div
        className="my-4 mx-auto py-2 px-4 w-4/5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus-within:(border-blue-500 ring-blue-500)"
        tabIndex={-1}
      >
        <input
          type="text"
          className="w-full block outline-none bg-gray-50"
          placeholder="Search for someone"
          required
        />
      </div>
    </section>
  );
};

export default ChatListSearch;
