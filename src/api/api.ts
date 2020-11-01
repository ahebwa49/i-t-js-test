import axios from "axios";

export interface IResult {
  status: number;
  statusText: string;
}

export const fetchWeatherData = async (
  args: (string | number)[]
): Promise<any> => {
  const [city, postalCode] = [...args];

  try {
    let response = await axios.get<IResult>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${postalCode}&appid=${
        process.env.APIkey
      }`,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    console.log(response);
    return response;
  } catch (ex) {
    const error =
      ex.response.status === 404
        ? "Resource not found"
        : "An unexpected error has occurred";
    console.log(error);
  }
};
