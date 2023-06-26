import styled from 'styled-components/native';

export const TranslationsWrapper = styled.ScrollView`
  background-color: white;
  padding: 0 24px;
  flex: 1;
`;

export const Heading = styled.Text`
  margin-top: 24px;
  font-family: ${({ theme }) => theme.fonts.inter.bold};
  font-size: 24px;
`;

export const ButtonGroup = styled.View`
  margin-top: 24px;
`;

export const ChangeTranslationButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.clouds};
  border-radius: 24px;
  min-height: 48px;

  justify-content: center;
  align-items: center;
  
  margin-bottom: 12px;
`;

export const ChangeTranslationButtonLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.bold};
  color: ${({ theme }) => theme.colors.dracula_orchid};
  font-size: 16px;
`;

export const TranslationName = styled.Text`
  margin-top: 64px;
  margin-bottom: 8px;
  
  font-family: ${({ theme }) => theme.fonts.inter.bold};
  font-size: 20px;
`;

export const TranslationDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-size: 16px;
  line-height: 24px;

  margin-bottom: 8px;
`;

export const TranslationVersesNumber = styled.Text`
  margin-bottom: 32px;
`;