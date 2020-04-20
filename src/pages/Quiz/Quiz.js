import React, { useState, useEffect } from 'react'
import { QUIZ_CHOICE, QUIZ_PREFERENCES } from 'constants/index'
import { useHistory } from 'react-router-dom'
import Button from 'components/Button'
import Header from 'components/Header'
import QuizStep from 'components/QuizStep'
import {
  QuizWrapper,
  QuizContent,
  ButtonContainer
} from './Quiz.style'

const Quiz = () => {
  const history = useHistory()
  const [disabled, setDisabled] = useState(true)
  const [activeStep, setActiveStep] = useState(0)
  const [collectedPreferences, setCollectedPreferences] = useState({
    sun: null,
    water: null,
    pets: null
  })
  const { firstButtonText, secondButtonText } = QUIZ_PREFERENCES[activeStep]

  useEffect(() => {
    setDisabled(true)
  }, [activeStep])

  const handleSelection = (step, preference) => {
    setCollectedPreferences({ ...collectedPreferences, [step]: preference })
  }

  return (
    <QuizWrapper>
      <Header />
      <QuizContent>
        <QuizStep
          active={activeStep === QUIZ_CHOICE.SUNLIGHT}
          step={QUIZ_PREFERENCES[QUIZ_CHOICE.SUNLIGHT]}
          setSelectedPreference={handleSelection}
          setDisabled={setDisabled}
        />
        <QuizStep
          active={activeStep === QUIZ_CHOICE.WATER}
          step={QUIZ_PREFERENCES[QUIZ_CHOICE.WATER]}
          setSelectedPreference={handleSelection}
          setDisabled={setDisabled}
        />
        <QuizStep
          active={activeStep === QUIZ_CHOICE.PET}
          step={QUIZ_PREFERENCES[QUIZ_CHOICE.PET]}
          setSelectedPreference={handleSelection}
          setDisabled={setDisabled}
        />
        <ButtonContainer petPreference={activeStep === QUIZ_CHOICE.PET}>
          <Button
            disabled={disabled}
            text={firstButtonText}
            onClick={() => {
              activeStep > 1 ? history.push('/showcase', collectedPreferences) : setActiveStep(activeStep + 1)
            }}
            hasArrow
          />
          <Button
            text={secondButtonText}
            onClick={() => {
              activeStep < 1 ? history.push('/') : setActiveStep(activeStep - 1)
            }}
            hasArrow
            secondary
          />
        </ButtonContainer>
      </QuizContent>
    </QuizWrapper>
  )
}

export default Quiz
