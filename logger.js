var log4js = require('log4js');
log4js.configure({
    //appender tell name of file category tell type of level
  appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
  categories: { default: { appenders: ['cheese'], level: 'debug' } }
});
 
const logger = log4js.getLogger('cheese');

module.exports = logger;
