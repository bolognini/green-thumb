import React, { useState } from 'react'
import {
  string,
  arrayOf,
  object,
  shape,
  bool
} from 'prop-types'
import {
  QuizzStepWrapper,
  Illustration,
  Description,
  PreferencesList,
  PreferenceItem
} from './QuizzStep.style'

const QuizzStep = ({ step, active, collectPreferences }) => {
  const [selected, setSelected] = useState(null)
  const { background, description, preferences } = step

  const handleSelected = (selectedItem, selectedPreference) => {
    setSelected(selectedItem)
    collectPreferences(selectedPreference)
  }

  return (
    <QuizzStepWrapper active={active}>
      <Illustration background={background} />
      <Description dangerouslySetInnerHTML={{ __html: description }} />
      <PreferencesList petPreference={background === 'dog'}>
        {preferences.map((preference, index) => {
          const { Icon, text } = preference
          return (
            <PreferenceItem
              key={background}
              background={background}
              selected={selected === index}
              onClick={() => handleSelected(index, text)}
            >
              <Icon />
              <span>{text}</span>
            </PreferenceItem>
          )
        })}
      </PreferencesList>
    </QuizzStepWrapper>
  )
}

QuizzStep.propTypes = {
  step: shape({
    background: string,
    description: string,
    preferences: arrayOf(object)
  }).isRequired,
  active: bool.isRequired
}

export default QuizzStep
