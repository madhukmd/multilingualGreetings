import styled from 'styled-components'

export const GreetingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 50px;
  border-radius: 10px;
  box-shadow: 0 0 7px 0.5px rgba(0, 0, 0, 0.2);
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  text-align: center;
  font-weight: bold;
`
export const ButtonsContainer = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 100%;
`
export const Image = styled.img`
  height: 250px;
  width: 200px;
`
