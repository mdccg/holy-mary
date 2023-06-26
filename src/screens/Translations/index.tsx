import { useContext, useEffect, useState } from 'react';
import BackButton from './../../components/BackButton';
import CustomStatusBar from './../../components/CustomStatusBar';
import translations_details from './../../data/translations_details.json';
import BibleService from './../../services/BibleService';
import TranslationType from './../../types/TranslationType';
import { ButtonGroup, ChangeTranslationButton, ChangeTranslationButtonLabel, Heading, TranslationDescription, TranslationName, TranslationVersesNumber, TranslationsWrapper } from './styles';
import LoadingPanel from './../../components/LoadingPanel';
import { UserContext } from './../../context/UserContext';
import theme from './../../stylesheets/theme';

const Translations = () => {
  const { translationAbbreviation, setTranslationAbbreviation } = useContext(UserContext);
  const [bibleService] = useState<BibleService>(new BibleService());
  const [translations, setTranslations] = useState<TranslationType[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [translationDetails, setTranslationDetails] = useState<TranslationType | null>(null);

  const handleChangeTranslationButtonPress = (abbreviation: string) => {
    setTranslationAbbreviation(abbreviation);
  }

  const reset = () => {
    setTranslations([]);
    setIsFetching(true);
  }

  const getTranslations = async () => {
    reset();

    const validTranslations = (await bibleService.retrieveValidTranslationsAbbreviations()).map(({ version }) => version);
    let translations = translations_details.filter(({ abbreviation }) => validTranslations.includes(abbreviation));
    setTranslations(translations);

    setIsFetching(false);
  }

  const getTranslation = () => {
    let index = translations_details.map(({ abbreviation }) => abbreviation).indexOf(translationAbbreviation);
    let translationDetails = translations_details.at(index);
    setTranslationDetails(translationDetails as TranslationType);
  }

  useEffect(() => {
    getTranslations();
  }, []);

  useEffect(() => {
    getTranslation();
  }, [translationAbbreviation]);

  return (
    <>
      <CustomStatusBar />

      <TranslationsWrapper contentContainerStyle={isFetching ? { flex: 1 } : {}}>
        {isFetching && <LoadingPanel />}

        {!isFetching && (
          <>
            <BackButton />
    
            <Heading>Traduções</Heading>
          
            <ButtonGroup>
              {translations.map(({ abbreviation, name }) => {
                const isSelected = translationAbbreviation === abbreviation;
                const backgroundColor = isSelected ? theme.colors.dracula_orchid : theme.colors.clouds;
                const color = isSelected ? theme.colors.clouds : theme.colors.dracula_orchid;

                return (
                  <ChangeTranslationButton
                    key={abbreviation}
                    style={{ backgroundColor }}
                    onPress={() => handleChangeTranslationButtonPress(abbreviation)}>
                    <ChangeTranslationButtonLabel style={{ color }}>{name} ({abbreviation.toUpperCase()})</ChangeTranslationButtonLabel>
                  </ChangeTranslationButton>
                );
              })}
            </ButtonGroup>

            {translationDetails && (
              <>
                <TranslationName>{translationDetails.name}</TranslationName>
                <TranslationDescription>{translationDetails.description}</TranslationDescription>
                <TranslationVersesNumber>Essa versão da Bíblia Sagrada tem, ao todo, {translationDetails.verses.toLocaleString()} versículos.</TranslationVersesNumber>
              </>
            )}
          </>
        )}
      </TranslationsWrapper>
    </>
  );
}

export default Translations;