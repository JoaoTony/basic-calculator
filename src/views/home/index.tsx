import React, { FC } from 'react'

import { Container, Text } from './home.styles'

import Button from '../../components/button'

const Home: FC = () => {
  return (
    <Container>
      <Text>Olá Mundo!!!</Text>
      <Button text="2"/>
    </Container>
  )
}

export default Home;