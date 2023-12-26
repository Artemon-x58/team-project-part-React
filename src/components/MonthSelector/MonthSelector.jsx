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
import { useSelector } from 'react-redux';
import { selectMothsArr } from 'redux/graphs/graphsSelectors';

const MonthSelector = ({ onClick, currentMonth }) => {
  const [isdropdownopen, setIsdropdownOpen] = useState(false);

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const wrapperRef = useRef(null);

  const navigate = useNavigate();

  const months = useSelector(selectMothsArr);

  const handleButtonClick = () => {
    setIsdropdownOpen(!isdropdownopen);
  };

  const handleMonthSelect = month => {
    setSelectedMonth(month);
    setIsdropdownOpen(false);
    onClick(month.toLowerCase());
  };

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsdropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <ContainerSelect>
      <BtnWrapper ref={wrapperRef}>
        <WrapperBtnAndIcon>
          <SvgSelectLeft onClick={() => navigate('/main')}>
            <UseSelect xlinkHref={`${Icons}#icon-arrow-right`} />
          </SvgSelectLeft>
          <ButtonSelect onClick={handleButtonClick}>
            Months{' '}
            <SvgSelectDown $isdropdownopen={isdropdownopen}>
              <UseSelect xlinkHref={`${Icons}#icon-arrow-down`} />
            </SvgSelectDown>
            {isdropdownopen && (
              <WrapperSelect>
                {months.map(month => (
                  <LabelSelect
                    key={month}
                    value={month}
                    className="radio-label"
                    onClick={e =>
                      handleMonthSelect(e.currentTarget.firstChild.value)
                    }
                  >
                    <InputSelect
                      name="month"
                      type="radio"
                      value={month}
                      defaultChecked={currentMonth === month}
                    />
                    {month}
                  </LabelSelect>
                ))}
              </WrapperSelect>
            )}
          </ButtonSelect>
        </WrapperBtnAndIcon>
        <TextSelect>{selectedMonth}</TextSelect>
      </BtnWrapper>
    </ContainerSelect>
  );
};

export default MonthSelector;
