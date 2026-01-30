const { spawn } = require("child_process");

const port = process.env.PORT || 3001;

const child = spawn(
  "node",
  ["node_modules/next/dist/bin/next", "start", "-p", port],
  {
    stdio: "inherit",
    shell: true,
  }
);

child.on("close", (code) => {
  console.log(`Next.js process exited with code ${code}`);
});
