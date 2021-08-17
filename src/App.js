import './App.css';
import WeatherIndicatorGroup from './WeatherIndicatorGroup/WeatherIndicatorGroup.js';
import ErrorDisplay from './ErrorDisplay/ErrorDisplay.js';
import { useWeatherData } from './hooks/useWeatherData.js';

function App() {
  const { data, loading, error } = useWeatherData('Toronto', {
    units: 'metric',
  });

  return (
    <div className="app-container">
      {loading && <div> Loading...</div>}
      {error && <ErrorDisplay error={error} />}
      {data && !error && <WeatherIndicatorGroup data={data} />}
    </div>
  );
}

export default App;
