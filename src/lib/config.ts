import { supportedLocales } from "./locales";
import { z } from "zod";

export const configSchema = z.object({
  source: z.object({
    locale: z.enum(supportedLocales),
    path: z.string(),
  }),
  targets: z.record(
    z.enum(supportedLocales),
    z.object({
      path: z.string(),
    })
  ),
  detectionBranch: z.string().optional().default("main"),
  translationBranch: z.string().optional().default("main"),
  publishBranch: z.string().optional().default("main"),
});

// Input schemas
export type PeraglotConfigInput = z.input<typeof configSchema>;

// Output schemas
export type PeraglotConfigOutput = z.output<typeof configSchema>;
