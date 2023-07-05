import styled, { css } from 'styled-components/native';

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  min-height: 64px;
  padding: 0 16px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.soothing_breeze};
`;

export const ButtonGroup = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ChangeChapterButton = styled.TouchableOpacity`
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.american_river};
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;

  margin-right: 2px;
`;

const buttonLabel = css`
  font-family: ${({ theme }) => theme.fonts.inter.semiBold};
  font-size: 12px;
`;

export const ButtonLabel = styled.Text`
  ${buttonLabel};
`;

export const ChangeTranslationButton = styled.TouchableOpacity`
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.american_river};
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
`;

export const ChangeTranslationButtonLabel = styled.Text`
  ${buttonLabel};
  text-transform: uppercase;
`;

export const IconGroup = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  
  justify-content: center;
  align-items: center;

  margin-left: 8px;
`;

export const LectureWrapper = styled.ScrollView`
  flex: 1;
`;

export const MainText = styled.Text`
  padding: 16px 24px 128px;
  line-height: 32px;
`;

export const Verse = styled.Text``;

export const VerseNumber = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.bold};
  color: ${({ theme }) => theme.colors.american_river};
`;

export const VerseText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.regular};
`;

const navigationButton = css`
  width: 48px;
  height: 48px;

  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 32px;

  background-color: black;
  border-radius: 32px;
`;

export const LeftNavigationButton = styled.TouchableOpacity`
  ${navigationButton};
  left: 32px;
`;

export const RightNavigationButton = styled.TouchableOpacity`
  ${navigationButton};
  right: 32px;
`;