import styled from 'styled-components/native';

export const LectureWrapper = styled.ScrollView`
 
`;

export const StyledVerse = styled.Text`
 margin-left: 7px;
 font-size: 16px;
 font-family: ${({ theme }) => theme.fonts.inter.regular};
`;

export const VerseNumber = styled.Text`
    font-size: 10px;
`;