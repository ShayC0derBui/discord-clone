import { useEffect, useState } from "react";
import { useChatInputStore } from "./use-chat-input";
import { log } from "console";

type ChatScrollProps = {
  chatRef: React.RefObject<HTMLDivElement>;
  bottomRef: React.RefObject<HTMLDivElement>;
  shouldLoadMore: boolean;
  loadMore: () => void;
  count: number;
};

export const useChatScroll = ({
  chatRef,
  bottomRef,
  shouldLoadMore,
  loadMore,
  count,
}: ChatScrollProps) => {
  const [hasInitialized, setHasInitialized] = useState(false);
  const { newDataEntered, setNewDataEntered } = useChatInputStore();

  useEffect(() => {
    const topDiv = chatRef?.current;

    const handleScroll = () => {
      const scrollTop = topDiv?.scrollTop;

      if (scrollTop === 0 && shouldLoadMore) {
        loadMore();
      }
    };

    topDiv?.addEventListener("scroll", handleScroll);

    return () => {
      topDiv?.removeEventListener("scroll", handleScroll);
    };
  }, [chatRef, loadMore, shouldLoadMore]);

  useEffect(() => {
    const bottomDiv = bottomRef?.current;
    const topDiv = chatRef?.current;
    const shouldAutoScroll = () => {
      if (!hasInitialized && bottomDiv) {
        setHasInitialized(true);
        return true;
      }
      if (!topDiv) {
        return false;
      }

      const distanceFromBottome =
        topDiv.scrollHeight - topDiv.scrollTop - topDiv.clientHeight;
      return distanceFromBottome <= 100;
    };

    if (shouldAutoScroll() || newDataEntered) {
      setTimeout(() => {
        bottomDiv?.scrollIntoView({ behavior: "smooth" });
        setNewDataEntered(false);
      }, 100);
    }
  }, [
    bottomRef,
    count,
    chatRef,
    hasInitialized,
    newDataEntered,
    setNewDataEntered,
  ]);
};
