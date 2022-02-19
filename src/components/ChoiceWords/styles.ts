import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ListContainer = styled.View`
`;

export const ItensContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0px;
  border: 1px solid;
  width: 300px;
`;

export const Label = styled.Text`
  font-size: 20px;
`;

export const ButtonBrand = styled.Button.attrs({
  color: "#48D449"
})``;


export const Button = styled.Button.attrs({
  color: "#5829F5",

})`
  background-color: red;
  margin: 10px 34px;
`;

export const Index = styled.Text`

`;

export const ChangePageContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 70px 50px;
  width: 100%;
`;

export const NextButton = styled.Button.attrs({
  color: "#F537DA"
})``;