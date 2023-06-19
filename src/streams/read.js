import { createReadStream } from "fs";
import { pipeline } from "stream/promises";

const url = new URL("./files/fileToRead.txt", import.meta.url);

const read = async () => {
  await pipeline(createReadStream(url), process.stdout);
};

await read();
