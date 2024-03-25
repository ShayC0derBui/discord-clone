import { create } from "zustand";

type ChatInputStore = {
  newDataEntered: boolean;
  setNewDataEntered: (dataReceived: boolean) => void;
};

export const useChatInputStore = create<ChatInputStore>((set) => ({
  newDataEntered: false,
  setNewDataEntered: (dataReceived) => set({ newDataEntered: dataReceived }),
}));
