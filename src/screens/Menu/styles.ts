import styled from 'styled-components/native';

export const MenuWrapper = styled.View`
  justify-content: space-between;
  flex: 1;

  padding: 32px;
  padding-top: 96px;
`;

export const Heading = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.bold};
  font-size: 24px;
  margin-bottom: 24px;
`;

export const MeetTheTeamButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 48px;
`;

export const MeetTheTeamButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.bold};
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;