"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const JoinMeeting = () => {
  const [meetingLink, setMeetingLink] = useState("");

  

  return (
    <div>
      <Dialog>
        <DialogTrigger>Join Meeting</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Join Meeting with Link </DialogTitle>
            <DialogDescription>
              <div className="mt-8">
                <Input
                  placeholder="Paste your meeting link here"
                  id="meeting-link"
                  onChange={(e) => setMeetingLink(e.target.value)}
                />
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-400 rounded-2xl sm:w-auto sm:mb-0">
              Join Meeting
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JoinMeeting;
