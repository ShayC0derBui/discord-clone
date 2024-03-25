import { create } from "zustand";

type ChatInputState = {
  newDataEntered: boolean;
  setNewDataEntered: (value: boolean) => void;
};

export const useChatInputStore = create<ChatInputState>((set) => ({
  newDataEntered: false,
  setNewDataEntered: (value) => set({ newDataEntered: value }),
}));
