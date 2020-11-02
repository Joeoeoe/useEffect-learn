import React, { FC } from 'react';

const ActivitySelect:FC<any> = function ({setActivity}) {
  return (
    <div>
      <span>活动：</span>
      <select
        onChange={(e) => {
          console.log(e.target.value);
        }}>
        <option value='travel'>郊游</option>
        <option value='football'>足球</option>
        <option value='homework'>写作业</option>
      </select>
    </div>
  );
};

export default ActivitySelect;
