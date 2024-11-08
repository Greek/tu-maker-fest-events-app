import { publicProcedure } from "../../trpc";
import z from "zod";

export const getEvent = publicProcedure
  .input(z.object({ limit: z.number() }))
  .query(({ ctx, input }) => {
    return true;
  });
