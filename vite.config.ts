import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    allowedHosts: ["2518-142-254-92-46.ngrok-free.app"],
  },
});
