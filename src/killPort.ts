import killPort from "kill-port";

const port = 3000;
killPort(port)
  .then(() => {
    console.log(`Port ${port} was successfully killed.`);
  })
  .catch((err) => {
    console.error(`Failed to kill port ${port}:`, err);
  });
