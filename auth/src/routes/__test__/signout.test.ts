import request from "supertest";
import { app } from "../../app";

it("clears cookie after signout", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "hardik@gmail.com",
      password: "123456",
    })
    .expect(201);

  const response = await request(app)
    .post("/api/users/signout")
    .send({})
    .expect(200);

  expect(response.get("Set-Cookie")[0]).toEqual(
    "express:sess=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly"
  );
});
