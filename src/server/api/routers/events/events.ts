import { createTRPCRouter } from "~/server/api/trpc";
import { getAllEvents } from "./getAllEvents";
import { getEvent } from "./getEvent";

export const eventsRouter = createTRPCRouter({
  getAllEvents,
  getEvent,
});