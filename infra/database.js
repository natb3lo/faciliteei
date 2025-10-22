import { Client } from "pg";

async function query(queryObject) {
  const client = getClient();
  try {
    await client.connect();
    const result = await client.query(queryObject);
    return result.rows;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    await client.end();
  }
}

function getClient() {
  const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
    ssl: getStatusSSL(),
  });

  return client;
}

function getStatusSSL() {
  if (process.env.NODE_ENV === "development") {
    return false;
  }

  return true;
}

export default {
  query: query,
};
