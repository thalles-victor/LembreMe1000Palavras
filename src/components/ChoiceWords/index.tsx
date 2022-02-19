import React, { useState, useEffect } from 'react';

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

const Home: React.FC = () => {
  const [listWors, setlistWors] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(1);
  var choiceListWords: string[] = []


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
                  if(!choiceListWords.includes(item))
                    choiceListWords.push(item)
                  console.log(choiceListWords)
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

export default Home; 