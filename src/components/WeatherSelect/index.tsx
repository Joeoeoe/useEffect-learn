import React, { FC, useEffect } from 'react';

const WeatherSelect: FC<any> = function ({ weather, setWeather, setActivity }) {
  useEffect(() => {
    if (weather === 'rain') {
      setActivity('homework');
    }
  }, [weather]);

  return (
    <div style={{ margin: '0 20px 0 20px' }}>
      <span>天气：</span>
      <select
        onChange={(e) => {
          setWeather(e.target.value);
        }}>
        <option value='sun'>晴天</option>
        <option value='rain'>雨天</option>
      </select>
    </div>
  );
};

export default WeatherSelect;
