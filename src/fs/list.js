import path from "path";
import { fileURLToPath } from "url";
import { readdir } from "fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const list = async () => {
  try {
    const dir = path.join(__dirname, "files");
    const currentFiles = await readdir(dir);
    for (let file of currentFiles) {
      console.log(file);
    }
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await list();
