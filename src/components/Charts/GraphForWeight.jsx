import { useSelector } from 'react-redux';
import { weightPerThisMonth } from 'redux/graphs/graphsSelectors';

import {
  List,
  Item,
  WeightTitle,
  DataTitle,
  Scale,
} from './Graphs.Styled';

const GraphForWeight = () => {

  const weightPerMonth = useSelector(weightPerThisMonth);

  return (
    <>
      <Scale>
        <List>
          {weightPerMonth.map(({date, weight }) => {
            return (
              <Item key={`${date}+${weight}`}>
                <WeightTitle>{weight}</WeightTitle>
                <DataTitle>{date.slice(-2)}</DataTitle>
              </Item>
            );
          })}
        </List>
        
      </Scale>
    </>
  );
};

export default GraphForWeight;
