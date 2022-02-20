import React, { useState, useEffect, useCallback } from 'react';

import {
  Container,
  ItensContainer,
  Label,
  Button,
  ChangePageContainer,
  ListContainer,
  ButtonBrand,
  Index,
  NextButton
} from './styles';
import { split } from '../../Resolvers/splitListWords';

import { useDataBaseConnection } from '../../data/connnection';
interface WordsProps {
  id: number;
  word: string;
}

const ChoiceWords: React.FC = () => {
  const { wordsRpository } = useDataBaseConnection();

  const [newWord, setNewWord] = useState('');
  const [words, setwords] = useState<WordsProps[]>([]);

  const [listWors, setlistWors] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(1);
  var choiceListWords: string[] = []

  const handleCreateWord = useCallback(async () => {
    const word = await wordsRpository.create({ id: 10, word: newWord });

    setwords(current => [...current, word])
  }, [newWord, wordsRpository]);

  useEffect( () => {
    wordsRpository.getAll().then(setwords)
    console.log(words)
  }, [wordsRpository, words] );

  useEffect( () => {
    setlistWors( split(index) )
  }, [index]);

  function behindPage() {
    if(index > 1) {
      setIndex( index - 1 )
      setlistWors(split(index));
    }
  }

  function nextPage() {
    setIndex( index + 1 )
    setlistWors(split(index));
  }
  
  return(
    <Container>
      <ListContainer>
        {
          listWors.map(( item, index ) => {
            return(
            <ItensContainer key={index}>
              <Label> {item} </Label>
              <ButtonBrand 
                title='Add'
                onPress={ () => {
                  setNewWord(item)
                  handleCreateWord();
                }}
              />
            </ItensContainer>
          );

          })
        }
      </ListContainer>
      <ChangePageContainer>
        <Button 
          title='Preview'
          onPress={ () => { behindPage() } }
        />
        <Index> { index } </Index>
        <Button 
          title="next"
          onPress={ () => { nextPage() } }
        />
      </ChangePageContainer>
      <NextButton title="Treinar"/>
      <NextButton title="Home"/>
    </Container>
  );
}

export default ChoiceWords; 