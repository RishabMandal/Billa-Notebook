import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
  plugins: [react()],
  base:"/Billa-Notebook/",
  server: {
    port: 3000,
  },
});
