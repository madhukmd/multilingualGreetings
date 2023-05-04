import styled from 'styled-components'

export const ListItem = styled.li``
export const Button = styled.button`
  border: 1px solid #db1c48;
  font-family: 'Roboto';
  font-size: 14px;
  border-radius: 7px;
  padding: 5px 10px;
  color: ${props => (props.active === 'true' ? '#ffffff' : '#db1c48')};
  background-color: ${props =>
    props.active === 'true' ? '#db1c48' : '#ffffff'};
`
