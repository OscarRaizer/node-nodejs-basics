import { release, version } from "node:os";
import path from "node:path";
import { createServer } from "node:http";
import { open } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const fileA = await open("./files/a.json");
const fileB = await open("./files/b.json");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();
export let unknownObject;

if (random > 0.5) {
  unknownObject = fileA;
} else {
  unknownObject = fileB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${process.env.PATH.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = createServer((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});
