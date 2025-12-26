// create booking
// Post request
// Request Body
import { test, expect } from "@playwright/test";

test("Create Post Request using static body", async ({ request }) => {
  // Request body
  const requestBody = {
    firstname: "Aashu",
    lastname: "Karnam",
    totalprice: 111,
    depositpaid: true,
    bookingdates: {
      checkin: "2025-01-01",
      checkout: "2025-01-01",
    },
    additionalneeds: "Breakfast",
  };

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
    firstname: "Aashu",
    lastname: "Karnam",
    totalprice: 111,
    depositpaid: true,
    additionalneeds: "Breakfast",
  });

  expect(booking.bookingdates).toMatchObject({
    checkin: "2025-01-01",
    checkout: "2025-01-01",
  });
});
