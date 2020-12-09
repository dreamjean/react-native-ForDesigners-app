import Constants from 'expo-constants';
import styled from 'styled-components';

const SafeAreaBox = styled.SafeAreaView`
  flex: 1;

  ${({ theme: { isIos, space } }) => ({
    paddingTop: isIos ? space.n : Constants.statusBarHeight,
  })}
`;

export default SafeAreaBox;
