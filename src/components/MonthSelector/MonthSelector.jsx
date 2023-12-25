import React, { useEffect, useRef, useState } from 'react';
import Icons from '../../icons/icons.svg';
import {
  BtnWrapper,
  ButtonSelect,
  ContainerSelect,
  InputSelect,
  LabelSelect,
  SvgSelectDown,
  SvgSelectLeft,
  TextSelect,
  UseSelect,
  WrapperSelect,
} from './MonthSelector.styled';

// const MonthSelector = () => {
//   const currentMonthIndex = new Date().getMonth();
//   const [selectedMonth, setSelectedMonth] = useState(months[currentMonthIndex]);

//   const handleMonthChange = selectedOption => {
//     setSelectedMonth(selectedOption);
//   };

//   const customStyles = {
//     indicatorsContainer: provided => ({
//       ...provided,
//       padding: 0,
//     }),
//     control: provided => ({
//       ...provided,
//       background: 'transparent',
//       border: 'none',
//       boxShadow: 'none',
//     }),
//     valueContainer: provided => ({
//       ...provided,
//       display: 'none',
//       background: 'transparent',
//     }),
//     dropdownIndicator: provided => ({
//       ...provided,
//       position: 'absolute',
//       right: 0,
//     }),
//     menu: (provided, state) => ({
//       ...provided,
//       background: '#0F0F0F',
//       color: '#B6B6B6',
//     }),
//     menuList: provided => ({
//       ...provided,
//       maxHeight: '144px',
//     }),
//   };

//   return (
//     <Box>
//       <Container>
//         <ArrowIcon>
//           <use xlinkHref={`${Icons}#icon-arrow-right`} />
//         </ArrowIcon>
//         <Holder>
//           <ChoiceMonth>Months</ChoiceMonth>
//           <StyledSelect
//             options={months}
//             value={selectedMonth}
//             onChange={handleMonthChange}
//             styles={customStyles}
//           />
//         </Holder>
//       </Container>
//       <CurrentMonth>{selectedMonth?.label}</CurrentMonth>
//     </Box>
//   );
// };

// export default MonthSelector;

const MonthSelector = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const wrapperRef = useRef(null); // Создаем ref для WrapperSelect

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMonthSelect = month => {
    setSelectedMonth(month);
    setIsDropdownOpen(false);
    // Добавьте вашу логику обработки выбранного месяца здесь
  };

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      // Если клик был вне WrapperSelect, закрыть его
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Добавляем обработчик события клика при монтировании компонента
    document.addEventListener('click', handleClickOutside);
    // Убираем обработчик события клика при размонтировании компонента
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []); // Пустой массив зависимостей гарантирует, что useEffect выполняется только при монтировании и размонтировании

  return (
    <ContainerSelect>
      <BtnWrapper ref={wrapperRef}>
        <div>
          <SvgSelectLeft>
            <UseSelect xlinkHref={`${Icons}#icon-arrow-right`} />
          </SvgSelectLeft>
          <ButtonSelect onClick={handleButtonClick}>
            Months{' '}
            <SvgSelectDown isDropdownOpen={isDropdownOpen}>
              <UseSelect xlinkHref={`${Icons}#icon-arrow-down`} />
            </SvgSelectDown>
            {isDropdownOpen && (
              <WrapperSelect>
                {months.map(month => (
                  <LabelSelect key={month} className="radio-label">
                    <InputSelect
                      name="month"
                      type="radio"
                      value={month}
                      checked={selectedMonth === month}
                      defaultChecked={currentMonth === month}
                      onChange={() => handleMonthSelect(month)}
                    />
                    {month}
                  </LabelSelect>
                ))}
              </WrapperSelect>
            )}
          </ButtonSelect>
        </div>
        <TextSelect>{currentMonth}</TextSelect>
      </BtnWrapper>
    </ContainerSelect>
  );
};

export default MonthSelector;
