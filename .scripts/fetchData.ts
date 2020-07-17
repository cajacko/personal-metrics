import "./utils/env";
import { writeJson, ensureFile } from "fs-extra";
import { join } from "path";
import fetch from "node-fetch";

if (!process.env.GOOGLE_SHEETS_URL) {
  throw new Error("No GOOGLE_SHEETS_URL");
}

const file = join(__dirname, "../public/data/test.json");

fetch(process.env.GOOGLE_SHEETS_URL)
  // @ts-ignore
  .then((res) => res.json())
  .then((data) => ensureFile(file).then(() => writeJson(file, data)));
