import axios from "axios";
import { fetchWeatherData, IResult } from "../api/api";

it("Calls the GET method as expected", async () => {
  const expectedResult: IResult = { status: 200, statusText: "OK" };

  // set up mock for axios.get
  const mock = jest.spyOn(axios, "get");
  (axios.get as jest.Mock).mockReturnValueOnce(expectedResult);

  const result = await fetchWeatherData(["New York", 10005]);

  expect(axios.get as jest.Mock).toHaveBeenCalled();
  expect(result).toBe(expectedResult);

  // restore axios.get
  mock.mockRestore();
});
