import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  // projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  projectId: "qqjhavhg",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  // token: process.env.REACT_APP_SANITY_PROJECT_TOKEN,
  token: "skerKaAFUYwPUQVbrQAVwZ8ZSwLnpMaZhrL93ZWemFfotpifwcJm0CDL1CtqpN5cYKFcdzL4px273UBWCW9bfRoOJiWenx2SUFFbL3d4RSFQFCs9ZJzspRoUWQeBfCYdiDE9YBwbccGpQnRNWaLoLX3XiJih1u1UQUShxZR8JrcLCOjT5NQd",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
