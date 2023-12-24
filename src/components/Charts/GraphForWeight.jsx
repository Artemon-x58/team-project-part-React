import { useSelector } from 'react-redux';
import {
  List,
  Item,
  //   WeightTitle, WeightValue
  //   DataTitle, DataValue
  TitleContainer,
  GraphsTitle,
  GraphsSubtitle,
  // GraphsCaption,
  Scale,
} from './Graphs.Styled';
import { averageValueWeight } from 'redux/graphs/graphsSelectors';

const GraphForWeight = () => {

  const upperRowValues = Array.from({ length: 31 }, () =>
    (Math.random() * (80 - 60) + 60).toFixed(0)
  );
  const lowerRowValues = Array.from({ length: 31 }, (_, i) =>
    (i + 1).toString()
  );

  const weight = useSelector(averageValueWeight);

  return (
    <>
      <TitleContainer>
        <GraphsTitle>Weight</GraphsTitle>
        <GraphsSubtitle>
          Average value: <span>{`${weight} kg`}</span>
        </GraphsSubtitle>
      </TitleContainer>
      <Scale>
        <List>
          {upperRowValues.map((value, index) => (
            <Item key={index} className="table-cell upper">
              {value}
            </Item>
          ))}
          {/* {weight.map(({ _id, amount }) => {
            return (
              <Item key={`${_id}+${amount}`}>
                <WeightTitle>{amount}</WeightTitle>
                <DataTitle>{_id}</DataTitle>
              </Item>
            );
          })} */}
        </List>
        <List>
          {lowerRowValues.map((value, index) => (
            <Item key={index} className="table-cell lower">
              {value}
            </Item>
          ))}
          {/* {weight.map(({ _id, amount }) => {
            return (
              <Item key={`${_id}+${amount}`}>
                <WeightTitle>{amount}</WeightTitle>
                <DataTitle>{_id}</DataTitle>
              </Item>
            );
          })} */}
        </List>
      </Scale>
    </>
  );
};

export default GraphForWeight;
