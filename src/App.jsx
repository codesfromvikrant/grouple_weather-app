import React from "react";
import { currentWeather } from "./api";

const App = () => {
  console.log(currentWeather().then((res) => console.log(res)));
  return <div>App</div>;
};

export default App;
