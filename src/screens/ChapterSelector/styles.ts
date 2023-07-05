import styled from 'styled-components/native';

export const ChapterSelectionWrapper = styled.ScrollView`
  padding: 0 24px;
`;

export const Testament = styled.Text`
  margin: 48px 0 32px;

  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-size: 16px;
  text-align: center;
  align-self: center;
`;

export const BookNameContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const NavigationButtonContainer = styled.TouchableOpacity`
  width: 48px;
  height: 48px;

  justify-content: center;
  align-items: center;
`;

export const BookName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.bold};
  font-size: 24px;
  text-align: center;
  flex: 1;
`;

export const ChapterButtonGroup = styled.View`
  margin-top: 32px;

  flex-direction: row;
  flex-wrap: wrap;

  margin-bottom: 96px;
`;

export const ChapterButtonContainer = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.american_river};
  border-radius: 4px;

  justify-content: center;
  align-items: center;

  margin-left: 4px;
  margin-bottom: 4px;
`;

export const ChapterButtonLabel = styled.Text`
  font-size: 16px;
`;