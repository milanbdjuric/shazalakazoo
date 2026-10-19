import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cp } from "node:fs/promises";
import { resolve } from "node:path";
export default defineConfig({
  base: "./",
  plugins: [react(), {name:"copy-existing-site-assets",async closeBundle(){
    const root=process.cwd(),out=resolve(root,"dist");
    await cp(resolve(root,"images"),resolve(out,"images"),{recursive:true});
    await cp(resolve(root,"fonts"),resolve(out,"fonts"),{recursive:true});
    try { await cp(resolve(root,"CNAME"),resolve(out,"CNAME")); } catch { /* optional */ }
  }}],
});