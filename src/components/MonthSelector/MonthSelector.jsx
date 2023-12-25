import React, { useState } from 'react';
import Icons from '../../icons/icons.svg';
import {
  ArrowIcon,
  Box,
  ChoiceMonth,
  Container,
  CurrentMonth,
  Holder,
  StyledSelect,
} from './MonthSelector.styled';

const months = [
  { value: 'january', label: 'January' },
  { value: 'february', label: 'February' },
  { value: 'march', label: 'March' },
  { value: 'april', label: 'April' },
  { value: 'may', label: 'May' },
  { value: 'june', label: 'June' },
  { value: 'july', label: 'July' },
  { value: 'august', label: 'August' },
  { value: 'september', label: 'September' },
  { value: 'october', label: 'October' },
  { value: 'november', label: 'November' },
  { value: 'december', label: 'December' },
];

const MonthSelector = () => {
  const currentMonthIndex = new Date().getMonth();
  const [selectedMonth, setSelectedMonth] = useState(months[currentMonthIndex]);

  const handleMonthChange = selectedOption => {
    setSelectedMonth(selectedOption);
  };

  const customStyles = {
    indicatorsContainer: provided => ({
      ...provided,
      padding: 0,
    }),
    control: provided => ({
      ...provided,
      background: 'transparent',
      border: 'none',
      boxShadow: 'none',
    }),
    valueContainer: provided => ({
      ...provided,
      display: 'none',
      background: 'transparent',
    }),
    dropdownIndicator: provided => ({
      ...provided,
      position: 'absolute',
      right: 0,
    }),
    menu: (provided, state) => ({
      ...provided,
      background: '#0F0F0F',
      color: '#B6B6B6',
    }),
    menuList: provided => ({
      ...provided,
      maxHeight: '144px',
    }),
  };

  return (
    <Box>
      <Container>
        <ArrowIcon>
          <use xlinkHref={`${Icons}#icon-arrow-right`} />
        </ArrowIcon>
        <Holder>
          <ChoiceMonth>Months</ChoiceMonth>
          <StyledSelect
            options={months}
            value={selectedMonth}
            onChange={handleMonthChange}
            styles={customStyles}
          />
        </Holder>
      </Container>
      <CurrentMonth>{selectedMonth?.label}</CurrentMonth>
    </Box>
  );
};

export default MonthSelector;
