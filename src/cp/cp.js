import path from "path";
import cp from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
  const file = path.join(__dirname, "files", "script.js");
  
  const node = cp.spawn(`node`, [file].concat(args));

  node.on("data", (data) => process.stdout.write(data));
  node.on("error", (err) => {
    console.log(`error: ${err.message}`);
  });
  node.on("close", (code) => {
    console.log(`childe process closed with code: ${code}`);
    process.exit();
  });

  node.stdout.pipe(process.stdin);
  process.stdout.pipe(node.stdin);
};

spawnChildProcess(["someArgument1", "someArgument2", "someArgument3"]);
