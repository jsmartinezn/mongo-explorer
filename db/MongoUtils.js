const MongoClient = require("mongodb").MongoClient;

function MongoUtils() {
  const mu = {},
    puerto = 27017,
    server = "localhost";

  mu.connect = () => {
    const pas = process.env.PASS;

    //Para correr la aplicacion localmente comente la siguiente linea de codigo
    const urls = `mongodb+srv://sebas:${pas}@robos-slq5d.mongodb.net/test?retryWrites=true&w=majority`;

    //Para correr la aplicacion localmente descomente la siguiente linea de codigo
    //const urls = `mongodb://${server}:${puerto}`;
    const client = new MongoClient(urls);
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

  mu.coleccion = query =>
    mu.connect().then(client =>
      client
        .db(query)
        .listCollections()
        .toArray()
        .finally(() => client.close())
    );

  mu.registros = (_db, _col) =>
    mu.connect().then(client =>
      client
        .db(_db)
        .collection(_col)
        .find({})
        .sort({ timestamp: 1 })
        .toArray()
        .finally(() => client.close())
    );

  mu.crear = (_reqBody, _reqParams) =>
    mu.connect().then(client => {
      const nuevo = {};
      for (const campo in _reqBody) {
        nuevo[`${campo}`] = `${_reqBody[campo]}`;
      }
      const par = _reqParams.split("_");
      const nuevoRegistro = client.db(par[0]).collection(par[1]);
      return nuevoRegistro.insertOne(nuevo).finally(() => client.close());
    });

  return mu;
}

module.exports = MongoUtils();
