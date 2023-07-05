import styled from 'styled-components/native';

export const MenuOptionWrapper = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 32px;
`;

export const MenuOptionIconContainer = styled.View`
  align-items: center;
  width: 32px;
`;

export const MenuOptionContent = styled.View`
  padding-left: 16px;
  flex: 1;
`;

export const MenuOptionSubHeading = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.bold};
  font-size: 16px;
  margin-bottom: 8px;
`;

export const MenuOptionDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.medium};
  font-size: 14px;
  line-height: 20px;
`;