import { test, expect } from "@playwright/test";

test("Get Booking details by ID - path param", async ({ request }) => {
  const bookingId = 2; // we can pass this as path param

  // sending get request
  const response = await request.get(`/booking/${bookingId}`);

  // parse the response and sprint
  const responseBody = await response.json();
  console.log(responseBody);

  // add assertions
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
});

test.only("Get Booking details by name - query param", async ({ request }) => {
  const fname = "Susan";
  const lname = "Jones";

  // sending get request
  const response = await request.get("/booking", { params: { fname, lname } });

  // parse the response and sprint
  const responseBody = await response.json();
  console.log(responseBody);

  // add assertions
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  //check response should not be empty
  expect(responseBody.length).toBeGreaterThan(0);

  for (const response1 of responseBody) {
    expect(response1).toHaveProperty("bookingid");
    expect(typeof response1.bookingid).toBe("number");
    expect(response1.bookingid).toBeGreaterThan(0);
  }
});
