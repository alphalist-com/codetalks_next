import { defineNuxtPlugin } from "#app";
import * as pkg from "~/package.json";
import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";

export default defineNuxtPlugin((nuxtApp) => {
  const release = `code.talks-next@${pkg.version}`;
  const environment = nuxtApp.$config.ENV;

  Sentry.init({
    dsn: "https://291f71c0088c4df8247a51bc70db215a@o4506712327979008.ingest.sentry.io/4506712358715392",
    release,
    environment,
    integrations: [new Integrations.BrowserTracing()],
    sampleRate: 1,
    tracesSampleRate: 1,
  });
});
