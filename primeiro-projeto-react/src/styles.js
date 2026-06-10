import styled from 'styled-components'

import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

export const InputArea = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 539px) {
    flex-direction: column;
    align-items: stretch;
  }
`

export const Container = styled.div`
background: linear-gradient(90deg,rgb(109, 29, 29) 0%, #000000 81.25% );
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

export const ToDoList = styled.div`
background: transparent;
padding: 50px 90px;
border-radius: 5px;
max-width: 600px; /* limita largura máxima */
width: 90vw; 

ul {
    padding: 0;
    margin-top: 60px;
    max-height: 70vh;
    overflow-y: auto;
}
&:hover {
    opacity: 1.2;
    background: linear-gradient(90deg, #000000  0%, rgb(221, 25, 25) 81.25% );
}

&:active {
    opacity: .8;
}

@media (max-width: 539px) {
    /* padding: 20px 15px;
    margin-top: 20px; */
    margin-right: 0;
    margin-bottom: 10px;
    width: 100%;
}
`
export const Input = styled.input`
border: 2px solid rgba (209, 211, 212, 0.4);
border-radius:5px;
height: 40px;
margin-right: 20px;
padding: 0 10px;
/* width: 300px;
max-width: 0; */
min-width: 0;
flex: 1;
`
export const Button = styled.button`
background: #8052ec;
border-radius: 5px;
height: 40px;
border: none;
line-height: 2px;
font-size: 17px;
font-weight: 900;
color: #FFFFFF;
width: 130px;
cursor: pointer;

&:hover {
    opacity: .8;
    background: linear-gradient(90deg,rgb(52, 172, 28) 0%, #125e08 81.25% );
}

&:active {
    opacity: .6;
}

@media (max-width: 539px) {
    width: 100%;
}
`

export const ListItem = styled.div`
  background: ${(props) => (props.isFinished ? '#E8FF8B' : '#E4E4E4')};
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  height: auto;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 10px;
  width: 100%; /* ocupa toda a largura do container pai */

li {
    list-style: none;
    flex: 1; /* permite o texto ocupar espaço disponível */
    padding: 0 10px;
    word-break: break-word; /* quebra texto longo */
}

@media (max-width: 539px) {
    flex-direction: column;
    align-items: flex-start;
    /* height: auto; */
    padding: 10px;
}
`

export const Trash = styled(FcEmptyTrash)`
cursor: pointer;
`
export const Check = styled(FcCheckmark)`
cursor: pointer;
`






