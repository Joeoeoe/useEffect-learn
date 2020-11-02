import { hot } from 'react-hot-loader/root'; // 热替换
import React from 'react';
import './App.css';
import TestCom from './components/Parent';
import Parent from './components/Parent';

function App() {
  return (
    <div>
      <Parent />
    </div>
  );
}

export default hot(App);
