import path from "path";
import { fileURLToPath } from "url";
import {readFile} from "fs/promises";
import { createHash } from "crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
    const textContent = await readFile(
        path.join(__dirname, 'files', 'fileToCalculateHashFor.txt')
    )
    const hash = createHash('sha256').update(textContent).digest('hex');

    console.log(hash)
};

await calculateHash();
