import cron from 'node-cron';

cron.schedule(`*/1 * * * *`, async () => {
  console.log(`running your task...`);
});

cron.schedule(`0/30 0 0 ? * * *`, async () => {
  console.log(`a second task`);
});
