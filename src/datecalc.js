import './App.css';
//import { Button } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { NumberInput, SegmentedControl } from '@mantine/core';
import { IconCalendar, IconListNumbers } from '@tabler/icons';
import { useState } from 'react';

function DateCalc() {
  const [calValue, calSetValue] = useState(new Date())
  const [numValue, numSetValue] = useState(0)
  const [action, setAction] = useState("Add")

  let FinalDate = addDays(calValue, numValue)

  function addDays(date, days) {
    var result = new Date(date);
    if (action === "Subtract") {
      result.setDate(result.getDate() - days);
    } else {
      result.setDate(result.getDate() + days);
    }
    return result
  }


  return (

    <div className="App">
      <div className='picker'>
        <DatePicker onChange={calSetValue} value={calValue} placeholder="Pick A Date" label="Start Date" firstDayOfWeek="sunday" dropdownType='modal' icon={<IconCalendar size={16} />} />
        <NumberInput
          placeholder="Number of Days"
          label={`Days To ${action === "Subtract" ? "Subtract ➖" : "Add ➕"}`}
          min={1}
          stepHoldDelay={500}
          stepHoldInterval={100}
          icon={<IconListNumbers size={16} />}
          onChange={numSetValue}
          value={numValue}
        />
        <SegmentedControl onChange={setAction} value={action} defaultValue="Add" data={[
          { label: 'Add', value: 'Add' },
          { label: 'Subtract', value: 'Subtract' },
        ]} />
      </div>
      <h2>{(numValue > 0 ? "Final Date - Us Format" : "")}</h2>
      <h3>{(numValue > 0 ? FinalDate.toLocaleDateString() : "")}</h3>

    </div>
  );
}

export default DateCalc;
