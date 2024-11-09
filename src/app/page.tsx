"use client";

import React from "react";
import { api } from "~/trpc/react";
import { TU_Map } from "./_components/map";
import { Nav_Bar} from "~/app/_components/navbar";

export default function Home() {

  return (
    <div>
      <Nav_Bar/>
      <TU_Map props={api.events.getAllEvents.useQuery().data ?? undefined}/>
    </div>
  );
}
