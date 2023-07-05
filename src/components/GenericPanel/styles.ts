import styled from 'styled-components/native';

export const GenericPanelWrapper = styled.View`
  height: 384px;
  opacity: .5;
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const GenericPanelMessage = styled.Text`
  margin-top: 16px;

  font-family: ${({ theme }) => theme.fonts.inter.bold};
  font-size: 16px;

  text-align: center;
  line-height: 24px;
`;