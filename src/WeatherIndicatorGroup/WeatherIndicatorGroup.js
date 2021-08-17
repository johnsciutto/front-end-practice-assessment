import WeatherIndicator from '../WeatherIndicator/WeatherIndicator.js';
import './WeatherIndicatorGroup.css';

const WeatherIndicatorGroup = ({ data }) => {
  return (
    <div className="indicator-group">
      <WeatherIndicator today data={data[0]} />
      <WeatherIndicator data={data[1]} />
      <WeatherIndicator data={data[2]} />
      <WeatherIndicator data={data[3]} />
      <WeatherIndicator data={data[4]} />
    </div>
  );
};

export default WeatherIndicatorGroup;
