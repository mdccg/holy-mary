import { useEffect, useState } from 'react';
import CustomStatusBar from '../../components/CustomStatusBar';
import BibleService from '../../services/BibleService';
import ScreenProps from '../../types/ScreenProps';
import { LectureWrapper } from './styles';

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
  const [bibleService] = useState<BibleService>(new BibleService());

  const getChapter = async () => {
    const verses = await bibleService.retrieveVersesByChapter('nvi', book.abbrev.en, chapter);
    console.log(verses);
  }

  useEffect(() => {
    getChapter();
  }, []);

  return (
    <>
      <CustomStatusBar />

      <LectureWrapper>
        {/* Todo o conteúdo da tela vem aqui */}
      </LectureWrapper>
    </>
  );
}

export default Lecture;