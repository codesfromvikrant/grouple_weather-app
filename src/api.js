import axios from "axios";

const BASE_URL = "https://api.weatherapi.com/v1";
const API_KEY = "af04f92943bf4b558a8143733231909";

const lat = 35.658581;
const lon = 139.745433;

const currentWeather = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/current.json?key=${API_KEY}&q=${lat},${lon}`
  );
  return data;
}

export { currentWeather };

