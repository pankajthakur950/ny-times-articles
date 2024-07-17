import React, { useState } from 'react';
import styles from './styles.module.css';

interface RadioButtonPillsProps<T>{
    name: string;
    options: {
        text: string;
        value: T;
    }[],
    onChange: (value: T) => void;
    selection?: T;
}

const RadioButtonPills = <T extends { toString(): string }>({ name, options, selection, onChange }: RadioButtonPillsProps<T>)=> {
  const [selectedOption, setSelectedOption] = useState(selection);

  const handleSelect = (option: T) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <div className={styles['radio-pills']}>
      {options.map(option => {
        const optionValue = option.value.toString();
        return (
        <div key={optionValue} 
            className={`${styles.pill} ${selectedOption === option.value ? styles.selected : ''}`} 
            onClick={() => handleSelect(option.value)}>
          <input
            type="radio"
            id={optionValue}
            name="radioPills"
            value={option.toString()}
            checked={selectedOption === option.value}
            onChange={() => handleSelect(option.value)}
            style={{ display: 'none' }}
          />
          <label htmlFor={optionValue}>{option.text}</label>
        </div>
      )})}
    </div>
  );
};

export default RadioButtonPills;
