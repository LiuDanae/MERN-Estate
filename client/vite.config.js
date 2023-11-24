import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "dev.jump-tiger.uk",
    proxy: {
      "/api": {
        target: "http://dev.jump-tiger.uk:3000",
        secure: false,
      },
    },
  },
});
