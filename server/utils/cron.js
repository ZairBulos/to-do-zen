const cron = require('node-cron');
const logger = require('./logger');
const { removeOlds } = require('../controllers/todos');

cron.schedule('0 0 * * *', async () => {
  try {
    await removeOlds();
    logger.info("Scheduled task executed: Old todo's deleted.");
  } catch (error) {
    logger.error("Error deleting old todo's. ", error.message);
  }
});