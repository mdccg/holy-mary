import { useEffect, useState } from 'react';
import CustomStatusBar from '../../components/CustomStatusBar';
import BibleService from '../../services/BibleService';
import ScreenProps from '../../types/ScreenProps';
import { LectureWrapper, StyledVerse, VerseNumber} from './styles';
import VerseDTO from '../../data-transports/VerseDTO';


type LectureProps = ScreenProps<'Lecture'>;

const Lecture = ({
  navigation: {
    navigate,
    goBack
  },
  route: {
    params: {
      book,
      chapter
    }
  }
}: LectureProps) => {
  console.log( book.abbrev.en, chapter)
  const [bibleService] = useState<BibleService>(new BibleService());

  const getChapter = async () => {
    const verses = await bibleService.retrieveVersesByChapter('nvi', book.abbrev.en, chapter);
       
    setVerses(verses); 
  }

  const [verses, setVerses] = useState<VerseDTO[]>([])
  

  
 
  

  useEffect(() => {
    getChapter();
  }, []);

  return (
    <>
      <CustomStatusBar />

      <LectureWrapper>
         {verses.map((verse) => (
           <StyledVerse key={verse.number}>
            <VerseNumber key= {verse.number}> {verse.number} </VerseNumber> 
            {verse.text}
            </StyledVerse>
          ))} 
      </LectureWrapper>
    </>
  );
}

export default Lecture