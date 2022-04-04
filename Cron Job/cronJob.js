var cron = require('node-cron');

/*

# ┌────────────── second (optional)
# │ ┌──────────── minute
# │ │ ┌────────── hour
# │ │ │ ┌──────── day of month
# │ │ │ │ ┌────── month
# │ │ │ │ │ ┌──── day of week
# │ │ │ │ │ │
# │ │ │ │ │ │
# * * * * * *

*/

cron.schedule('* * * * * *', () => {
  console.log('running every minute 1, 2, 4 and 5');
});