const { expect } = require("chai");
const request = require("supertest");

const app = require("../index");

describe("grupo test de la ruta", () => {
  it("respond with json containing a list of text invert", (done) => {
    request(app)
      .get("/reverce?text=hola")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("respond with json containing an error", (done) => {
    request(app)
      .get("/reverce")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400, done)
      .expect({ error: "No text" });
  });
});
