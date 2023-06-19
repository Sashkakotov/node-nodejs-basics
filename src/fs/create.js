import path from "path";
import { writeFile, readFile } from "fs/promises";
import { fileURLToPath } from "url";

const checkFileExistance = async (file) => {
  try {
    await readFile(file);
    return true;
  } catch (e) {
    return false;
  }
};

const create = async () => {
  const textContent = "I am fresh and young";
  const errorMesage = "FS operation failed";

  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const file = path.join(__dirname, "files", "fresh.txt");

  const isExist = await checkFileExistance(file);

  if (isExist) {
    throw Error(errorMesage);
  }

  await writeFile(file, textContent, {
    encoding: "utf-8",
    flag: "w",
  });
};

await create();
