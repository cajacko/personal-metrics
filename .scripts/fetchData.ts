import "./utils/env";
import { writeJson, ensureFile } from "fs-extra";
import { join } from "path";
import fetch from "node-fetch";

if (!process.env.GOOGLE_SHEETS_URL) {
  throw new Error("No GOOGLE_SHEETS_URL");
}
const dataPath = join(__dirname, "../public/data");
const dailyMetricsPath = join(dataPath, "daily-metrics.json");
const indexPath = join(dataPath, "index.json");

Promise.all([
  fetch(process.env.GOOGLE_SHEETS_URL)
    // @ts-ignore
    .then((res) => res.json())
    .then((data) =>
      ensureFile(dailyMetricsPath).then(() => writeJson(dailyMetricsPath, data))
    ),
  ensureFile(indexPath).then(() =>
    writeJson(indexPath, {
      dailyMetrics: dailyMetricsPath.replace(dataPath, "."),
    })
  ),
]);
