test("GET to /api/v1/status should return 200", async () => {
  const result = await fetch("http://localhost:3000/api/v1/status");
  expect(result.status).toBe(200);

  const responseBody = await result.json();

  const updateDate = new Date(responseBody.updated_at).toISOString();

  expect(responseBody.updated_at).toEqual(updateDate);

  expect(responseBody.database.dependencies.version).toBe("16.10");

  expect(responseBody.database.dependencies.max_connections).toBe(100);

  expect(responseBody.database.dependencies.connections).toBe(1);
});
