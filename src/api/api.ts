import axios from "axios";

export const fetchWeatherData = (args: (string | number)[]) => {
  const [city, postalCode] = [...args];

  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${postalCode}&appid=dd05d606881a63228048476dcf7038c4`,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    .then(response => {
      console.log(response);
    })
    .catch(ex => {
      const error =
        ex.response.status === 404
          ? "Resource not found"
          : "An unexpected error has occurred";
      console.log(error);
    });
};
