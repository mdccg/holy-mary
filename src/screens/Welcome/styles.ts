import { css } from 'styled-components';
import styled from 'styled-components/native';

export const WelcomeWrapper = styled.ImageBackground`
  flex: 1;
`;

export const DarkOverlay = styled.View`
  background-color: black;
  opacity: .2;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
`;

export const WelcomeWrapperContent = styled.View`
  padding: 128px 48px 384px;

  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const titleGroup = css`
  color: white;
`;

export const Title = styled.Text`
  ${titleGroup};
  font-family: ${({ theme }) => theme.fonts.inter.bold};
  font-size: 32px;
  margin-bottom: 8px;
`;

export const SubTitle = styled.Text`
  ${titleGroup};
  font-family: ${({ theme }) => theme.fonts.inter.medium};
  font-size: 16px;
  line-height: 24px;
`;

export const StartButton = styled.TouchableOpacity`
  padding: 16px 28px;
  border: 3px solid white;
  border-radius: 64px;
`;

export const StartButtonText = styled.Text`
  ${titleGroup};
  font-family: ${({ theme }) => theme.fonts.inter.semiBold};
  font-size: 20px;
  text-transform: uppercase;
`;