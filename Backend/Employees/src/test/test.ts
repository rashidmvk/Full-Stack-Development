import assert from "assert";
import { getApiService } from "../services/services";

describe("employeesList", function () {
  it("responds with matching records", async function () {
    const res = await new getApiService().getEmployeeInfo();
    assert.equal(res.length, 6);
  });
});
