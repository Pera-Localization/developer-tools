export const supportedLocales = [
  "de_DE",
  "en_US",
  "es_ES",
  "fr_FR",
  "ja_JP",
  "ko_KR",
  "zh_CN",
  "zh_TW",
] as const;

export type SupportedLocale = (typeof supportedLocales)[number];
