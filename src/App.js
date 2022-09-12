import DateCalc from './datecalc';
import './App.css';
import { Radio } from '@mantine/core';
import { useState } from 'react';
import TimeCalc from './timecalc';
function App() {

  const [value, setValue] = useState('');

  return (
    <div className="App">
      <h1>Date & Time Calculator 📅</h1>
      <Radio.Group
        className='radio'
        value={value}
        onChange={setValue}
        name="favoriteFramework"
      >
        <Radio value="Dates" label="Dates" />
        <Radio value="Time" label="Time" />

      </Radio.Group>
      {(value === "Time" ? <TimeCalc /> : <DateCalc />)}
      <p><strong>Created By:</strong> Strike#1800</p>
    </div>
  );
}

export default App;
