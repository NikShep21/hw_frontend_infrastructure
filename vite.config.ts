import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/hw_frontend_infrastructure/",
  plugins: [react()],
});
