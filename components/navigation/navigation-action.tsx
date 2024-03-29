"use client";

import { Plus } from "lucide-react";
import { ActionTooltip } from "../action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

const CreateNewServer = () => {
  const { onOpen, isOpen } = useModal();

  return (
    <div>
      <ActionTooltip side="right" align="center" label="Add a server">
        <button className="group flex items-center" onClick={() => { onOpen("createServer");console.log(isOpen) }}>
          <div className="mx-3 flex h-[48px] w-[48px] bg-white items-center justify-center overflow-hidden rounded-[24px] transition-all duration-300 group-hover:rounded-[16px] group-hover:bg-emerald-500 dark:bg-neutral-700">
            <Plus
              className="text-emerald-500 transition group-hover:text-white"
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
};

export default CreateNewServer;
