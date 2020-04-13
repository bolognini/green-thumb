import React, { useState } from 'react'
import { QUIZZ_PREFERENCES } from 'constants/index'
import Button from 'components/Button'
import Header from 'components/Header'
import QuizzStep from 'components/QuizzStep'
import { QuizzWrapper } from './Quizz.style'

const Quizz = () => {
  const [step, setStep] = useState(QUIZZ_PREFERENCES.PET)

  return (
    <QuizzWrapper>
      <Header />
      <QuizzStep step={step} />
      <Button text='next' hasArrow />
      <Button text='home' hasArrow secondary />
    </QuizzWrapper>
  )
}

export default Quizz
