const request = require("supertest");
const app = require("../src/server");

describe("Test with snapshot", () => {
  it(`test1`, async () => {
    const response = await request(app).get("/sum?val=2");
    expect(response.status).toBe(200);
    expect(response.text).toMatchSnapshot();
  });
});
