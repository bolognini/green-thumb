import React, { useState, useEffect } from 'react'
import { QUIZZ_CHOICE, QUIZZ_PREFERENCES } from 'constants/index'
import { useHistory } from 'react-router-dom'
import Button from 'components/Button'
import Header from 'components/Header'
import QuizzStep from 'components/QuizzStep'
import {
  QuizzWrapper,
  QuizzContent,
  ButtonContainer
} from './Quizz.style'

const Quizz = () => {
  const history = useHistory()
  const [disabled, setDisabled] = useState(true)
  const [activeStep, setActiveStep] = useState(0)
  const [collectedPreferences, setCollectedPreferences] = useState({
    sun: null,
    water: null,
    pets: null
  })
  const { firstButtonText, secondButtonText } = QUIZZ_PREFERENCES[activeStep]

  useEffect(() => {
    setDisabled(true)
  }, [activeStep])

  const handleSelection = (step, preference) => {
    setCollectedPreferences({ ...collectedPreferences, [step]: preference })
  }

  return (
    <QuizzWrapper>
      <Header />
      <QuizzContent>
        <QuizzStep
          active={activeStep === QUIZZ_CHOICE.SUNLIGHT}
          step={QUIZZ_PREFERENCES[QUIZZ_CHOICE.SUNLIGHT]}
          setSelectedPreference={handleSelection}
          setDisabled={setDisabled}
        />
        <QuizzStep
          active={activeStep === QUIZZ_CHOICE.WATER}
          step={QUIZZ_PREFERENCES[QUIZZ_CHOICE.WATER]}
          setSelectedPreference={handleSelection}
          setDisabled={setDisabled}
        />
        <QuizzStep
          active={activeStep === QUIZZ_CHOICE.PET}
          step={QUIZZ_PREFERENCES[QUIZZ_CHOICE.PET]}
          setSelectedPreference={handleSelection}
          setDisabled={setDisabled}
        />
        <ButtonContainer petPreference={activeStep === QUIZZ_CHOICE.PET}>
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
      </QuizzContent>
    </QuizzWrapper>
  )
}

export default Quizz
