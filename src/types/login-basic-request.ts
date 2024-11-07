import { z } from "zod";

export const loginBasicSchema = z.object({
    username: z.string(),
    password: z.string(),
});

export type LoginBasicSchemaType = z.infer<typeof loginBasicSchema>;