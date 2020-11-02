import React, { FC, ReactNode, useEffect, useState } from 'react';
import ActivitySelect from '../ActivitySelect';
import WeatherSelect from '../WeatherSelect';

// TODO未想好如何总结这一情况
const Parent: FC = function () {
  const [weather, setWeather] = useState('rain');
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    console.log('report to mom!');
  }, [weather, activity]);

  return (
    <div style={{ display: 'flex', marginTop: 20 }}>
      <WeatherSelect weather={weather} setWeather={setWeather} setActivity={setActivity} />
      <ActivitySelect setActivity={setActivity} />
    </div>
  );
};

export default Parent;
