"use client";

// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";

interface ActionTooltipProps {
  label: string;
  children: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  align?: "start" | "center" | "end";
}

// export const ActionTooltip = ({
//   label,
//   children,
//   side,
//   align
// }: ActionTooltipProps) => {
//   return (
//     <TooltipProvider>
//       <Tooltip delayDuration={50}>
//         <TooltipTrigger asChild>
//           {children}
//         </TooltipTrigger>
//         <TooltipContent side={side} align={align}>
//           <p className="font-semibold text-sm capitalize">
//             {label.toLowerCase()}
//           </p>
//         </TooltipContent>
//       </Tooltip>
//     </TooltipProvider>
//   )
// }

import * as Tooltip from "@radix-ui/react-tooltip";
import React from "react";

export const ActionTooltip = ({
  label,
  children,
  side,
  align,
}: ActionTooltipProps) => {
  return (
    <Tooltip.Provider skipDelayDuration={0}>
      <Tooltip.Root delayDuration={50}>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side={side}
            className="dark:text-blackA z-50 select-none rounded-[4px] bg-white px-3 py-3 text-[15px] font-semibold leading-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=right]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=top]:animate-slideUpAndFade data-[state=instant-open]:data-[side=bottom]:animate-slideDownAndFade data-[state=instant-open]:data-[side=left]:animate-slideLeftAndFade dark:bg-black dark:shadow-zinc-800"
            sideOffset={5}
          >
            {label}
            <Tooltip.Arrow className="fill-white  dark:fill-black " />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default ActionTooltip;
