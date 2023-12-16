import Img from '../../img/Sport-and-fitness-tracker.png';
import {
  AuthLink,
  AuthLinkWrapper,
  ContentWrapper,
  Description,
  ImageWrapper,
  PossibilityList,
  Title,
  Wrapper,
} from './WelcomePage.styled';

export const WelcomePage = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={Img} alt="Sport-and-fitness-tracker" />
      </ImageWrapper>
      <ContentWrapper>
        <Title>Set goals and achieve them</Title>
        <Description>
          The service will help you set goals and follow them.
        </Description>
        <AuthLinkWrapper>
          <AuthLink to="/signIn">Sign in</AuthLink>
          <AuthLink to="/signUp">Sign up</AuthLink>
        </AuthLinkWrapper>
        <PossibilityList>
          <li>Set goals</li>
          <li>Watch your calories</li>
          <li>Keep track of your water intake</li>
          <li>Control your weight</li>
        </PossibilityList>
      </ContentWrapper>
    </Wrapper>
  );
};
