import database from "../../../../infra/database";

// GET: api/v1/status
async function status(request, response) {
  let queryResult = null;

  queryResult = await database.query("SHOW server_version;");
  const serverVersion = queryResult[0].server_version;
  response.status(200).json({
    database: {
      version: serverVersion,
    },
  });
}

export default status;
