import request from "supertest";
import { app } from "../../app";

it("fails when non-existing email is supplies", async () => {
  await request(app)
    .post("/api/users/signin")
    .send({
      email: "hardik@gmail.com",
      password: "123456",
    })
    .expect(400);
});

it("fails when invalid credentials are supplied", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "hardik@gmail.com",
      password: "123456",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signin")
    .send({
      email: "hardik@gmail.com",
      password: "cfgnsfg",
    })
    .expect(400);
});

it("responds with cookie when successful signin", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "hardik@gmail.com",
      password: "123456",
    })
    .expect(201);

  const response = await request(app)
    .post("/api/users/signin")
    .send({
      email: "hardik@gmail.com",
      password: "123456",
    })
    .expect(200);

  expect(response.get("Set-Cookie")).toBeDefined();
});
