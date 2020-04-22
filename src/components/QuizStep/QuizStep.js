import React, { useState } from 'react'
import {
  string,
  arrayOf,
  object,
  shape,
  bool,
  func
} from 'prop-types'
import {
  QuizStepWrapper,
  Illustration,
  Description,
  PreferencesList,
  PreferenceItem,
  Caption
} from './QuizStep.style'

const QuizStep = ({ step, active, setSelectedPreference, setDisabled }) => {
  const [selected, setSelected] = useState(null)
  const { stepName, background, description, caption, preferences } = step

  const handleSelected = (selectedItem, selectedPreference) => {
    setSelected(selectedItem)
    setSelectedPreference(stepName, selectedPreference)
    setDisabled(false)
  }

  return (
    <QuizStepWrapper active={active}>
      <Illustration petPreference={background === 'dog'} background={background} />
      <Description petPreference={background === 'dog'} dangerouslySetInnerHTML={{ __html: description }} />
      {caption && <Caption dangerouslySetInnerHTML={{ __html: caption }} />}
      <PreferencesList petPreference={background === 'dog'}>
        {preferences.map((preference, index) => {
          const { Icon, text, requisitionValue, preferenceId } = preference
          return (
            <PreferenceItem
              key={preferenceId}
              background={background}
              selected={selected === index}
              onClick={() => handleSelected(index, requisitionValue)}
            >
              <Icon />
              <span>{text}</span>
            </PreferenceItem>
          )
        })}
      </PreferencesList>
    </QuizStepWrapper>
  )
}

QuizStep.propTypes = {
  step: shape({
    background: string,
    description: string,
    preferences: arrayOf(object)
  }).isRequired,
  active: bool.isRequired,
  setSelectedPreference: func.isRequired,
  setDisabled: func.isRequired
}

export default QuizStep
