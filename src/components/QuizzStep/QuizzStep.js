import React from 'react'
import {
  string,
  arrayOf,
  object,
  shape
} from 'prop-types'
import {
  QuizzStepWrapper,
  Illustration,
  Description,
  PreferencesList
} from './QuizzStep.style'

const QuizzStep = ({ step }) => {
  const { background, description, preferences } = step

  return (
    <QuizzStepWrapper>
      <Illustration background={background} />
      <Description dangerouslySetInnerHTML={{ __html: description }} />
      <PreferencesList petPreference={background === 'dog'}>
        {preferences.map(preference => {
          const { Icon, text } = preference
          return (
            <li key={background}>
              <Icon />
              <span>{text}</span>
            </li>
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
  }).isRequired
}

export default QuizzStep
