import { useSelector } from 'react-redux';
import { weightPerThisMonth } from 'redux/graphs/graphsSelectors';

import { List, Item, WeightTitle, DataTitle, Scale } from './Graphs.Styled';
import { getDaysInMonth } from './getDaysOfMonth';

const GraphForWeight = ({ month, year }) => {
  const weightPerMonth = useSelector(weightPerThisMonth);
  const arrOfDate = getDaysInMonth(month, year);

  return (
    <>
      <Scale>
        <List>
          {arrOfDate.map(date => {
            const weightObject = weightPerMonth.find(
              obj => Number(obj.date.slice(-2)) === date
            );

            return (
              <Item key={date}>
                <WeightTitle>
                  {weightObject ? weightObject.weight : ''}
                </WeightTitle>
                <DataTitle>{date}</DataTitle>
              </Item>
            );
          })}
        </List>
      </Scale>
    </>
  );
};

export default GraphForWeight;
