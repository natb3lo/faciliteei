import database from "../../../../infra/database";

// ENDPOINT: api/v1/status
async function status(request, response) {
  const updateAt = new Date().toISOString();

  let queryResult = null;

  queryResult = await database.query("SHOW server_version;");
  const serverVersion = queryResult[0].server_version;

  queryResult = await database.query("SHOW max_connections");
  const maxConnections = queryResult[0].max_connections;

  const queryObject = {
    text: "SELECT count(*)::int as connections from pg_stat_activity where datname=$1;",
    values: ["local_db"],
  };
  queryResult = await database.query(queryObject);
  const connections = queryResult[0].connections;

  response.status(200).json({
    updated_at: updateAt,
    database: {
      dependencies: {
        version: serverVersion,
        max_connections: parseInt(maxConnections),
        connections,
      },
    },
  });
}

export default status;
