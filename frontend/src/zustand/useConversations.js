import { create } from "zustand";

const useConversations = create((set) => ({
    searchQuery: "",
    setSearchQuery: (searchQuery) => set({ searchQuery }),
    chats: [],
    setChats: (chats) => set({ chats }),
}));

export default useConversations;