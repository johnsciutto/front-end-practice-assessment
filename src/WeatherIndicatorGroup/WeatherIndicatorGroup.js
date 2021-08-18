import WeatherIndicator from '../WeatherIndicator/WeatherIndicator.js';

import './WeatherIndicatorGroup.css';

const WeatherIndicatorGroup = ({ data }) => {
  return (
    <div className="indicator-group">
      {data.map((dataDay, idx) => {
        if (idx === 0) return <WeatherIndicator key={dataDay.date} today data={dataDay} />
        return <WeatherIndicator key={dataDay.date} data={dataDay} />
      })}
    </div>
  );
};

export default WeatherIndicatorGroup;
