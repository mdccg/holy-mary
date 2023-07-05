import styled from 'styled-components/native';

export const BookmarksWrapper = styled.ScrollView`
  padding: 0 24px;
  flex: 1;
`;

export const Heading = styled.Text`
  margin: 24px 0;
  font-family: ${({ theme }) => theme.fonts.inter.bold};
  font-size: 24px;
`;

export const BookmarkedVerse = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-radius: 2px;
  padding: 8px;

  margin-bottom: 16px;
`;

export const Signature = styled.Text`
  margin-right: 16px;

  font-family: ${({ theme }) => theme.fonts.inter.bold};
  font-size: 20px;
`;

export const Verse = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-size: 16px;

  flex: 1;
`;

export const Footer = styled.View`
  position: absolute;
  width: 100%;
  bottom: 0;

  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.soothing_breeze};
`;

export const DeleteSelectedBookmarkedVersesButton = styled.TouchableOpacity`
  align-items: center;
  padding: 12px 0;
  flex: 1;
`;

export const DeleteSelectedBookmarkedVersesButtonLabel = styled.Text`
  margin-top: 4px;

  font-family: ${({ theme }) => theme.fonts.inter.regular};
  color: ${({ theme }) => theme.colors.alizarin};
  font-size: 12px;
`;