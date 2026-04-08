const request = require("supertest");
const app = require("../server");
describe("Security Questions API", () => {
  test("TC_B01 - GET questions", async () => {
    const res = await request(app).get("/api/questions");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
  test("TC_B02 - POST valid responses", async () => {
    const res = await request(app)
      .post("/api/responses")
      .send([
        {
          userId: 101,
          questionId: 1,
          answer: "valid123",
          confirmAnswer: "valid123"
        }
      ]);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Saved successfully");
  });

  test("TC_B03 - Duplicate questions", async () => {
    const res = await request(app)
      .post("/api/responses")
      .send([
        { userId: 101, questionId: 1, answer: "test123", confirmAnswer: "test123" },
        { userId: 101, questionId: 1, answer: "test123", confirmAnswer: "test123" }
      ]);

    expect(res.statusCode).toBe(400);
  });

  test("TC_B04 - Answer too short", async () => {
    const res = await request(app)
      .post("/api/responses")
      .send([
        { userId: 101, questionId: 2, answer: "abc", confirmAnswer: "abc" }
      ]);

    expect(res.statusCode).toBe(400);
  });

  test("TC_B05 - Answer mismatch", async () => {
    const res = await request(app)
      .post("/api/responses")
      .send([
        { userId: 101, questionId: 2, answer: "hello123", confirmAnswer: "wrong123" }
      ]);

    expect(res.statusCode).toBe(400);
  });

});