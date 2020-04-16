import React, { useState, useEffect } from 'react'
import { QUIZZ_CHOICE, QUIZZ_PREFERENCES } from 'constants/index'
import history from 'routes/history'
import Button from 'components/Button'
import Header from 'components/Header'
import QuizzStep from 'components/QuizzStep'
import {
  QuizzWrapper,
  QuizzContent,
  ButtonContainer
} from './Quizz.style'

const Quizz = () => {
  const [disabled, setDisabled] = useState(true)
  const [activeStep, setActiveStep] = useState(0)
  const [collectedPreferences, setCollectedPreferences] = useState({})
  const { firstButtonText, secondButtonText } = QUIZZ_PREFERENCES[activeStep]

  useEffect(() => {
    setDisabled(true)
    console.log(collectedPreferences)
  }, [activeStep])

  const collectPreferences = selectedPreference => {
    setCollectedPreferences({ ...collectPreferences, selectedPreference })
    setDisabled(false)
  }

  return (
    <QuizzWrapper>
      <QuizzContent>
        <Header />
        <QuizzStep
          active={activeStep === QUIZZ_CHOICE.SUNLIGHT}
          step={QUIZZ_PREFERENCES[QUIZZ_CHOICE.SUNLIGHT]}
          collectPreferences={collectPreferences}
        />
        <QuizzStep
          active={activeStep === QUIZZ_CHOICE.WATER}
          step={QUIZZ_PREFERENCES[QUIZZ_CHOICE.WATER]}
          collectPreferences={collectPreferences}
        />
        <QuizzStep
          active={activeStep === QUIZZ_CHOICE.PET}
          step={QUIZZ_PREFERENCES[QUIZZ_CHOICE.PET]}
          collectPreferences={collectPreferences}
        />
        <ButtonContainer>
          <Button
            disabled={disabled}
            text={firstButtonText}
            onClick={() => (activeStep > 1 ? history.push('/showcase') : setActiveStep(activeStep + 1))}
            hasArrow
          />
          <Button
            text={secondButtonText}
            onClick={() => (activeStep < 1 ? history.push('/') : setActiveStep(activeStep - 1))}
            hasArrow
            secondary
          />
        </ButtonContainer>
      </QuizzContent>
    </QuizzWrapper>
  )
}

export default Quizz
