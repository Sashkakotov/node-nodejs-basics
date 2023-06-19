import path from "path";
import { rm } from "fs/promises";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  try {
    await rm(path.join(__dirname, "files", "fileToRemove.txt"));
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await remove();
