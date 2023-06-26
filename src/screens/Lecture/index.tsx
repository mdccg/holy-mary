import { useEffect, useState } from 'react';
import CustomStatusBar from '../../components/CustomStatusBar';
import BibleService from '../../services/BibleService';
import ScreenProps from '../../types/ScreenProps';
import { LectureWrapper, Verses } from './styles';
import VerseDTO from '../../data-transports/VerseDTO';
import { Text } from 'react-native';

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
    console.log(verses); 
   
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
         {verses.map((verse) => <Verses>{verse.text}</Verses>)} 
      </LectureWrapper>
    </>
  );
}

export default Lecture