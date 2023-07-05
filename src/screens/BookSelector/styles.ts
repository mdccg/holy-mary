import styled from 'styled-components/native';

export const BookSelectorWrapper = styled.ScrollView`
  padding: 0 24px;
`;

export const Header = styled.View`
  margin-bottom: 32px;

  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const SearchInputContainer = styled.TouchableHighlight`
  border: 1px solid ${({ theme }) => theme.colors.american_river};
  border-radius: 48px;
  flex-direction: row;
  align-items: center;
  width: 192px;
  height: 48px;
  padding: 0 16px;
`;

export const SearchInputIconContainer = styled.View`
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

export const SearchInput = styled.TextInput`
  padding-right: 8px;
  width: 100%;
  flex: 1;
  
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-size: 14px;
`;

export const TestamentContainer = styled.View``;

export const TestamentLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.bold};
  font-size: 24px;

  margin-bottom: 12px;
`;

export const GroupContainer = styled.View`
  margin-bottom: 16px;
`;

export const GroupLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.bold};
  font-size: 20px;

  margin-bottom: 8px;
`;

export const BookButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  padding-left: 0;
`;

export const BookButtonLabel = styled.Text`
  margin-left: 16px;
  font-family: ${({ theme }) => theme.fonts.inter.bold};
  color: ${({ theme }) => theme.colors.dracula_orchid};
  font-size: 16px;
`;