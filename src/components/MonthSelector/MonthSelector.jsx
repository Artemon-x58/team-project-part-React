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
  WrapperBtnAndIcon,
  WrapperSelect,
} from './MonthSelector.styled';
import { useNavigate } from 'react-router-dom';

// const MonthSelector = () => {
//   const currentMonthIndex = new Date().getMonth();
//   const [selectedMonth, setSelectedMonth] = useState(months[currentMonthIndex]);

//   const handleMonthChange = selectedOption => {
//     setSelectedMonth(selectedOption);
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
  const [isdropdownopen, setIsdropdownOpen] = useState(false);
  const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const wrapperRef = useRef(null); // Создаем ref для WrapperSelect
  const navigate = useNavigate();
  console.log(selectedMonth);

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
    setIsdropdownOpen(!isdropdownopen);
  };

  const handleMonthSelect = month => {
    setSelectedMonth(month);
    setIsdropdownOpen(false);
    // Добавьте вашу логику обработки выбранного месяца здесь
  };

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      // Если клик был вне WrapperSelect, закрыть его
      setIsdropdownOpen(false);
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
        <WrapperBtnAndIcon>
          <SvgSelectLeft onClick={() => navigate('/main')}>
            <UseSelect xlinkHref={`${Icons}#icon-arrow-right`} />
          </SvgSelectLeft>
          <ButtonSelect onClick={handleButtonClick}>
            Months{' '}
            <SvgSelectDown $isdropdownopen={`${isdropdownopen}`}>
              <UseSelect xlinkHref={`${Icons}#icon-arrow-down`} />
            </SvgSelectDown>
            {isdropdownopen && (
              <WrapperSelect>
                {months.map(month => (
                  <LabelSelect key={month} className="radio-label">
                    <InputSelect
                      name="month"
                      type="radio"
                      value={month}
                      defaultChecked={currentMonth === month}
                      onChange={() => handleMonthSelect(month)}
                    />
                    {month}
                  </LabelSelect>
                ))}
              </WrapperSelect>
            )}
          </ButtonSelect>
        </WrapperBtnAndIcon>
        <TextSelect>{currentMonth}</TextSelect>
      </BtnWrapper>
    </ContainerSelect>
  );
};

export default MonthSelector;
