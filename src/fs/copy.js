import path from "path";
import { createReadStream, createWriteStream } from "fs";
import { mkdir, readdir, stat } from "fs/promises";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fromDir = path.join(__dirname, "files");
const toDir = path.join(__dirname, "files_copy");

const copy = async () => {
  const currentFiles = await readdir(fromDir);
  try {
    await mkdir(toDir);
  } catch (e) {
    throw new Error("FS operation failed");
  }
  for (let file of currentFiles) {
    const pathFromFile = path.join(fromDir, file);
    const pathToFile = path.join(toDir, file);
    const fileStatus = await stat(pathFromFile);
    if (fileStatus.isFile()) {
      createReadStream(pathFromFile).pipe(createWriteStream(pathToFile));
    }
    if (fileStatus.isDirectory()) {
      copy(pathFromFile, pathToFile);
    }
  }
};

await copy();
