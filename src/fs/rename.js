import path from "path";
import { fileURLToPath } from "url";
import { rename as renameFile } from "fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const fromFile = path.join(__dirname, "files", "wrongFilename.txt");
const toFile = path.join(__dirname, "files", "properFilename.md");

const checkFileExistance = async (file) => {
  try {
    await readFile(file);
    return true;
  } catch (e) {
    return false;
  }
};

const rename = async () => {
  if (await checkFileExistance(toFile)) {
    throw new Error("FS operation failed");
  } else {
    await renameFile(fromFile, toFile);
  }
};

await rename();
