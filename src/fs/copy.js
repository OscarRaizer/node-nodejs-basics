import { cp } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const copyFromDest = path.join(__dirname, "files");
  const copyToDest = path.join(__dirname, "files_copy");

  try {
    await cp(copyFromDest, copyToDest, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await copy();
