import React, { useState, useEffect } from "react";
import { get } from "./mockBackend/fetch";

// DATA
// In this module, we use some functions like Math.random(), 
// Math.floor(), and Array.from() to generate some fake data.
// When building user interfaces, it can be helpful to 
// mock out simplified versions of the data that our code
// will eventually fetch from backend servers

const getRandomId = () => `${Math.random()}-${Math.random()}`;

const getRandomNumber = (min, range) =>
  Math.floor((Math.random() * 100 * range) / 100) + min;

const summaries = [
  "Rainy",
  "Cloudy",
  "Partly Cloudy",
  "Partly Sunny",
  "Mostly Sunny",
  "Sunny"
];

const randomFromList = (list) => list[getRandomNumber(0, list.length)];

const getTemp = () => {
  const avg = getRandomNumber(60, 30);

  return {
    avg,
    min: avg - 10,
    max: avg + 10
  };
};

const getWeatherItem = () => ({
  id: getRandomId(),
  summary: randomFromList(summaries),
  temp: getTemp(),
  precip: getRandomNumber(0, 100)
});


// export default {
//   "/daily": Array.from({ length: 5 }, getWeatherItem),
//   "/hourly": Array.from({ length: 24 }, getWeatherItem)
// };




// FAKE GET()
// Fake data fetching functionality.
// In a real app, this would grab data from the internet, but
// this module just waits a little bit before responding.


function get(endpoint) {
  const delay = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!DATA.hasOwnProperty(endpoint)) {
        const validEndpoints = Object.keys(DATA)
          .map((endpoint) => ` - "${endpoint}"`)
          .join("\n ");
        reject(
          `"${endpoint}" is an invalid endpoint. Try getting data from: \n ${validEndpoints}`
        );
      }

      const response = { status: 200, data: DATA[endpoint] };

      resolve(response);
    }, delay);
  });
}





// THE ACTUAL APP 


export default function Forecast() {
  const [data, setData] = useState();
  const [notes, setNotes] = useState({});
  const [forecastType, setForecastType] = useState("/daily");

  useEffect(() => {
    alert("Requested data from server...");
    get(forecastType).then((response) => {
      alert("Response: " + JSON.stringify(response, "", 2));
      setData(response.data);
    });
  }, [forecastType]);

  const handleChange =
    (index) =>
    ({ target }) =>
      setNotes((prev) => ({
        ...prev,
        [index]: target.value,
      }));

  return (
    <div className="App">
      <h1>My Weather Planner</h1>
      <div>
        <button onClick={() => setForecastType("/daily")}>5-day</button>
        <button onClick={() => setForecastType("/hourly")}>Today</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Summary</th>
            <th>Avg Temp</th>
            <th>Precip</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((item, i) => (
              <tr key={item.id}>
                <td>{item.summary}</td>
                <td> {item.temp.avg}°F</td>
                <td>{item.precip}%</td>
                <td>
                  <input
                    value={notes[item.id] || ""}
                    onChange={handleChange(item.id)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </tbody>
      </table>
    </div>
  );
}
