import { removeOldTokensCron } from "./remove-old-tokens.cron";

export const jobRunner = () => {
  // testCron.start();
  removeOldTokensCron.start();
};
