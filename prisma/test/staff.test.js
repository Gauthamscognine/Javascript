// import request from "supertest";
// import app from "../app.js";

// describe("GET /staff", () => {

//   it("should return all employees", async () => {
//     const res = await request(app).get("/staff");

//     expect(res.statusCode).toBe(200);

//     // if your controller sends { data: [...] }
//     expect(res.body.data).toBeDefined();
//     expect(Array.isArray(res.body.data)).toBe(true);
//   });

// });


import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../app.js";

describe("GET /staff (authentication only)", () => {

  let validToken;

  beforeAll(() => {
    //  Valid token (no role logic tested)
    validToken = jwt.sign(
      {
            userId: 1,
            roleid: 99 
      },
      process.env.REFERESH_TOKEN_SECRET,
      { expiresIn: "10m" }
    );
  });

  it("should allow access with a valid token", async () => {
    const res = await request(app)
      .get("/staff")
      .set("Authorization", `Bearer ${validToken}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.data).toBeDefined();
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it("should reject request if token is missing", async () => {
    const res = await request(app).get("/staff");

    expect(res.statusCode).toBe(401);
    expect(res.body.message).toMatch(/token/i);
  });

  it("should reject request if token is invalid", async () => {
    const res = await request(app)
      .get("/staff")
      .set("Authorization", "Bearer invalid.token.here");

    expect(res.statusCode).toBe(401);
    expect(res.body.message).toMatch(/invalid/i);
  });

});
