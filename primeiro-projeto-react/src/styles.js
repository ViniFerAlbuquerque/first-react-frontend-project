import styled from 'styled-components'

import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`
background: linear-gradient(90deg,rgb(109, 29, 29) 0%, #000000 81.25% );
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

export const ToDoList  = styled.div`
background: #FFFFFF;
padding: 50px 90px;
border-radius: 5px;

ul {
    padding: 0;
    margin-top: 60px;
}
`
export const Input = styled.input`
border:2px solid rgba (209, 211, 212, 0.4);
border-radius:5px;
height: 40px;
margin-right: 40px;
width: 340px;
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
    opacity: .6;
    background: linear-gradient(90deg,rgb(109, 29, 29) 0%, #000000 81.25% );
}

&:active {
    opacity: .8;
}
`

export const ListItem = styled.div`
background: ${ (props) => (props.isFinished ? '#E8FF8B' : '#E4E4E4') };
box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
border-radius: 5px;
height: 60px;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 30px;
padding: 0 10px;
width: 500px;

li {
    list-style: none;
}

`
export const Trash = styled(FcEmptyTrash)`
cursor: pointer;
`
export const Check = styled(FcCheckmark)`
cursor: pointer;
`


