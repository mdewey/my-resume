const fs = require("fs")
const path = require("path")
const { buildLlmsTxt } = require("./scripts/generateLlmsTxt")

// Write an LLM-friendly Markdown summary to /llms.txt after each build.
exports.onPostBuild = ({ reporter }) => {
  const outputPath = path.join(__dirname, "public", "llms.txt")
  fs.writeFileSync(outputPath, buildLlmsTxt(), "utf8")
  reporter.info(`Generated ${outputPath}`)
}
