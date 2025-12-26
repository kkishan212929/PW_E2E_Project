// create booking
// Post request
// Request Body
import { test, expect } from "@playwright/test";
import fs from "fs";

test("Create Post Request using json file body", async ({ request }) => {
  // Read data from JSOn
  const jsonFile = "testdata_n/post_request_body.json";
  const requestBody = JSON.parse(fs.readFileSync(jsonFile, "utf-8"));

  // send post request

  const response = await request.post("/booking", {
    data: requestBody,
  });

  const responseBody = await response.json(); // extracted response body
  console.log(requestBody);

  // Validate response status code
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  // validate response body

  expect(responseBody).toHaveProperty("bookingid");
  expect(responseBody).toHaveProperty("booking");
  expect(responseBody).toHaveProperty("booking.additionalneeds");

  // Validate booking details
  const booking = responseBody.booking;
  expect(booking).toMatchObject({
    firstname: requestBody.firstname,
    lastname: requestBody.lastname,
    totalprice: requestBody.totalprice,
    depositpaid: requestBody.depositpaid,
    additionalneeds: requestBody.additionalneeds,
  });

  expect(booking.bookingdates).toMatchObject({
    checkin: requestBody.bookingdates.checkin,
    checkout: requestBody.bookingdates.checkout,
  });
});
