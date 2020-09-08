const mongoose = require('mongoose');

export default (async () => {
  await mongoose.connect('mongodb://auth:auth123@jeanscluster-shard-00-00-wwzcb.mongodb.net:27017,jeanscluster-shard-00-01-wwzcb.mongodb.net:27017,jeanscluster-shard-00-02-wwzcb.mongodb.net:27017/ToDo?ssl=true&replicaSet=JeansCluster-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log('Connected to mongodb');
})();