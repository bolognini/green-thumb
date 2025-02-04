import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from 'components/Button'
import {
  HomeWrapper,
  HomeContent,
  Title,
  BackgroundIllustration,
  Logo
} from './Home.style'

const Home = () => {
  const history = useHistory()

  return (
    <HomeWrapper>
      <HomeContent>
        <Logo title='Green Thumb Logo' />
        <Title>Find your next green friend</Title>
        <Button
          text='start quiz'
          hasArrow
          onClick={() => history.push('/quiz')}
        />
      </HomeContent>
      <BackgroundIllustration />
    </HomeWrapper>
  )
}

export default Home
