const MongoClient = require("mongodb").MongoClient;

function MongoUtils() {
  const mu = {},
    puerto = 27017,
    server = "localhost";

  mu.connect = () => {
    const client = new MongoClient(`mongodb://${server}:${puerto}`);
    return client.connect();
  };
  mu.listar = () =>
    mu.connect().then(client =>
      client
        .db()
        .admin()
        .listDatabases()
        .finally(() => client.close())
    );

  return mu;
}

module.exports = MongoUtils();
