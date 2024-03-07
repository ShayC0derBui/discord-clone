"use client";

import { CreateServerModal } from "@/components/modals/create-server-modal";
import { InviteModal } from "@/components/modals/invite-modal";
import { CreateChannelModal } from "../modals/create-channel-modal";
import { DeleteChannelModal } from "../modals/delete-channel-modal";
import { DeleteServerModal } from "../modals/delete-server-modal";
import { EditServerModal } from "../modals/edit-server-modal";
import { LeaveServerModal } from "../modals/leave-server-modal";
import { MembersModal } from "../modals/members-modal";
export const ModalProvider = () => {
  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <CreateChannelModal />
      <LeaveServerModal />
      <DeleteServerModal />
      <DeleteChannelModal />
    </>
  );
};
