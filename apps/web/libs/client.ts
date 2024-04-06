import { createClient } from "microcms-js-sdk";

if (!process.env.API_KEY) {
  throw new Error("API_KEY is not set");
}

export const client = createClient({
  serviceDomain: "gz2pbwnien",
  apiKey: process.env.API_KEY,
});
