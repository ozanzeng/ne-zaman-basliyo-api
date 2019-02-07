var mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb://nzb_user:abc123@ds121295.mlab.com:21295/nzb-api', { useMongoClient: true })

  mongoose.connection.on('open', () => {
    console.log('MongoDB: Connected');
  });

  mongoose.connection.on('error', (err) => {
    console.log('MongoDB: Error', err);
  });

  mongoose.Promise = global.Promise;
}