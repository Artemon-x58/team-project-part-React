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

import { useSelector } from 'react-redux';
import {
  selectCaloriesToday,
  selectRecommendedCalories,
} from 'redux/statistics/statisticsSelectors';


const Food = () => {
  const { calories, protein, fat, carbohydrates } = useSelector(
    selectRecommendedCalories
  );
  const {
    calories: consumedCalories,
    protein: consumedProtein,
    fat: consumedFat,
    carbohydrates: consumedCarbohydrates,
  } = useSelector(selectCaloriesToday);

  const leftCarbohydrates = carbohydrates - consumedCarbohydrates;
  const leftProtein = protein - consumedProtein;
  const leftFat = fat - consumedFat;

  return (
    <FoodWrapper>
      <FoodTitle>Food</FoodTitle>
      <InfoBox>
        <MainChartBox>
          <ChartForCalories
            calories={calories}
            consumedCalories={consumedCalories}
          />
        </MainChartBox>
        <CardList>
          <Card>
            <ChartBox>
              <ChartForCarbohydrates
                carbohydrates={carbohydrates}
                consumedCarbohydrates={consumedCarbohydrates}
              />
            </ChartBox>
            <CardText>
              <CardTitle>Carbohydrates</CardTitle>
              <CounterList>
                {/* мета вуглеводів  */}
                <Counter>
                  Goal: <span>{String(carbohydrates)}</span>
                </Counter>
                {/* залишилось вуглеводів */}
                <Counter>
                  left: <span>{String(leftCarbohydrates)}</span>
                </Counter>
              </CounterList>
            </CardText>
          </Card>
          <Card>
            <ChartBox>
              <ChartForProtein
                protein={protein}
                consumedProtein={consumedProtein}
              />
            </ChartBox>
            <CardText>
              <CardTitle>Protein</CardTitle>
              <CounterList>
                {/*мета протеїнів */}
                <Counter>
                  Goal: <span>{String(protein)}</span>
                </Counter>
                {/*залишилось протеїнів */}
                <Counter>
                  left: <span>{String(leftProtein)}</span>
                </Counter>
              </CounterList>
            </CardText>
          </Card>
          <Card>
            <ChartBox>
              <ChartForFat fat={fat} consumedFat={consumedFat} />
            </ChartBox>
            <CardText>
              <CardTitle>Fat</CardTitle>
              <CounterList>
                {/*мета жирів */}
                <Counter>
                  Goal: <span>{String(fat)}</span>
                </Counter>
                {/*залишилось жирів */}
                <Counter>
                  left: <span>{String(leftFat)}</span>
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
