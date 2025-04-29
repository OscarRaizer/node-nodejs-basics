import { createReadStream } from "node:fs";
import path from "node:path";
const read = async () => {
  const filePath = path.join(import.meta.dirname, "files", "fileToRead.txt");
  const readable = createReadStream(filePath);

  readable.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
  readable.on("end", () => {
    process.stdout.write("\n");
  });
};
await read();
