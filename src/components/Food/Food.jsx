import ChartForCalories from 'components/Charts/ChartForCalories';
import ChartForCarbohydrates from 'components/Charts/ChartForCarbohydrates';
import ChartForProtein from 'components/Charts/ChartForProtein';
import ChartForFat from 'components/Charts/ChartForFat';

import {
  FoodWrapper,
  FoodTitle,
  InfoBox,
  MainChartBox,
  CardList,
  Card,
  ChartBox,
  CardText,
  CardTitle,
  CounterList,
  Counter,
} from './Food.styled';

const Food = () => {
  return (
    <FoodWrapper>
      <FoodTitle>Food</FoodTitle>
      <InfoBox>
        <MainChartBox>
          <ChartForCalories />
        </MainChartBox>
        <CardList>
          <Card>
            <ChartBox>
              <ChartForCarbohydrates />
            </ChartBox>
            <CardText>
              <CardTitle>Carbohydrates</CardTitle>
              <CounterList>
                {/* мета вуглеводів  */}
                <Counter>
                  Goal: <span>{}</span>
                </Counter>
                {/* залишилось вуглеводів */}
                <Counter>
                  left: <span>{}</span>
                </Counter>
              </CounterList>
            </CardText>
          </Card>
          <Card>
            <ChartBox>
              <ChartForProtein />
            </ChartBox>
            <CardText>
              <CardTitle>Protein</CardTitle>
              <CounterList>
                {/*мета протеїнів */}
                <Counter>
                  Goal: <span>{}</span>
                </Counter>
                {/*залишилось протеїнів */}
                <Counter>
                  left: <span>{}</span>
                </Counter>
              </CounterList>
            </CardText>
          </Card>
          <Card>
            <ChartBox>
              <ChartForFat />
            </ChartBox>
            <CardText>
              <CardTitle>Fat</CardTitle>
              <CounterList>
                {/*мета жирів */}
                <Counter>
                  Goal: <span>{}</span>
                </Counter>
                {/*залишилось жирів */}
                <Counter>
                  left: <span>{}</span>
                </Counter>
              </CounterList>
            </CardText>
          </Card>
        </CardList>
      </InfoBox>
    </FoodWrapper>
  );
};

export default Food;
