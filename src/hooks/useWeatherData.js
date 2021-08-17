import { useState, useEffect, useCallback } from 'react';
import { API_KEY } from '../constants.js';

/**
 * The weather data comes with 8 3h forcast per day and we only care about one
 * per day. so we can use this function to filter only what we want.
 */
const isDesiredIndex = (_, i) => i % 8 === 0;

const useWeatherData = (city, options) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState();

  const createApiUrl = useCallback(
    ({ units = 'standard' }) => {
      return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${API_KEY}`;
    },
    [city]
  );


  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const res = await fetch(createApiUrl(options));
        if (!res.ok) {
          throw new Error(`The status of the response is: ${res.status}`);
        }
        const data = await res.json();

        const dataArr = data.list.filter(isDesiredIndex).map((d) => {
          const { dt_txt: date, main, weather } = d;
          return {
            date: new Date(date).toLocaleDateString('en-US', { weekday: 'short' }),
            max: main.temp_max.toFixed(),
            min: main.temp_min.toFixed(),
            icon: weather[0].icon,
          };
        });

        setData(dataArr);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    getWeatherData();
  }, [createApiUrl, options]);

  return {
    loading: isLoading,
    error,
    data,
  };
};

export { useWeatherData };
