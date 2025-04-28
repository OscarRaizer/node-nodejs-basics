import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";

const calculateHash = async () => {
  const filePath = "./src/hash/files/fileToCalculateHashFor.txt";
  const hash = createHash("sha256");
  const file = createReadStream(filePath);

  file.on("data", function (chunk) {
    hash.update(chunk);
  });

  file.on("end", function () {
    console.log(hash.digest("hex"));
  });
};

await calculateHash();
