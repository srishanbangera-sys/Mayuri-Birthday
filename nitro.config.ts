import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
    cloudflare: {
        pages: {
            binding: "CF_PAGES_ASSETS",
        },
    },
});
