import React, { FC } from 'react'

import { Container, Text } from './home.styles'
import ResulSection from '../../components/result-section'
import ButtonSection from '../../components/buttons-section'

const Home: FC = () => {
  return (
    <Container>
     <ResulSection/>
      <ButtonSection/>
    </Container>
  )
}

export default Home;