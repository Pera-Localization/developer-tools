import { supportedLocales } from "./locales";
import { z } from "zod";

export const configSchema = z.object({
  source: z.object({
    locale: z.enum(supportedLocales),
    path: z
      .string()
      .describe(
        'Path to the source locale file. Example: "src/locales/en.json"'
      ),
  }),
  targets: z.record(
    z.enum(supportedLocales),
    z.object({
      path: z
        .string()
        .describe(
          'Path to the target locale file. Example: "src/locales/fr.json". The file will be created if it does not exist when publishing changes.'
        ),
    })
  ),
  triggers: z.object({
    detection: z.object({
      mergeBranch: z
        .string()
        .optional()
        .default("main")
        .describe(
          "When a pull request is merged into this branch, new translations will be detected and enqueued for translation."
        ),
    }),
    translation: z.object({
      mergeBranch: z
        .string()
        .optional()
        .default("main")
        .describe(
          "When a pull request is merged into this branch, any enqueued translations will be automatically translated."
        ),
    }),
    publish: z.object({
      mergeBranch: z
        .string()
        .optional()
        .default("main")
        .describe(
          "When a pull request is merged into this branch, a new pull request will be created to publish any new translations."
        ),
      baseBranch: z
        .string()
        .optional()
        .default("main")
        .describe(
          "The branch to use as the base for the pull request that publishes new translations."
        ),
    }),
  }),
});

// Input schemas
export type PeraglotConfigInput = z.input<typeof configSchema>;

// Output schemas
export type PeraglotConfigOutput = z.output<typeof configSchema>;
