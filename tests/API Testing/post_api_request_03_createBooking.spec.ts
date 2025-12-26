// create booking
// Post request
// Request Body is random/ dynamic data - faker library
// npm install luxon - to deal with dates
import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { DateTime } from "luxon";

test("Create Post Request using json file body", async ({ request }) => {
  // Read data

  const fname = faker.person.firstName();
  const lname = faker.person.lastName();
  const totalPrice = faker.number.int({ min: 100, max: 5000 });
  const depositpaid = faker.datatype.boolean();
  const checkin = DateTime.now().toFormat("yyyy-MM-dd");
  const checkout = DateTime.now().plus({ day: 5 }).toFormat("yyyy-MM-dd");
  const additionalneeds = "super bowls";
  const requestBody = {
    firstname: fname,
    lastname: lname,
    totalprice: totalPrice,
    depositpaid: depositpaid,
    bookingdates: {
      checkin: checkin,
      checkout: checkout,
    },
    additionalneeds: additionalneeds,
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
