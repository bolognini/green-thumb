import {
  CoralHighSun,
  CoralLowSun,
  CoralPet,
  CoralNoAnswer,
  GreenOneDrop,
  GreenTwoDrops,
  GreenThreeDrops
} from 'assets'

export const QUIZ_CHOICE = {
  SUNLIGHT: 0,
  WATER: 1,
  PET: 2
}

export const QUIZ_PREFERENCES = [
  {
    stepName: 'sun',
    background: 'sun',
    description: `First, set the amount of <b>sunlight</b> your plant will get.`,
    preferences: [
      { preferenceId: 0, Icon: CoralHighSun, text: 'High sunlight', requisitionValue: 'high' },
      { preferenceId: 1, Icon: CoralLowSun, text: 'Low sunlight', requisitionValue: 'low' },
      { preferenceId: 2, Icon: CoralNoAnswer, text: 'No sunlight', requisitionValue: 'no' }
    ],
    firstButtonText: 'next',
    secondButtonText: 'home'
  },
  {
    stepName: 'water',
    background: 'wateringCan',
    description: `How often do you want to <b>water</b> your plant?`,
    preferences: [
      { preferenceId: 0, Icon: GreenOneDrop, text: 'Rarely', requisitionValue: 'rarely' },
      { preferenceId: 1, Icon: GreenTwoDrops, text: 'Regularly', requisitionValue: 'regularly' },
      { preferenceId: 2, Icon: GreenThreeDrops, text: 'Daily', requisitionValue: 'daily' }
    ],
    firstButtonText: 'next',
    secondButtonText: 'previous'
  },
  {
    stepName: 'pets',
    background: 'dog',
    description: `Do you have pets? Do they <b>chew</b> plants?`,
    caption: `We are asking because some plants can be <b>toxic</b> for your buddy`,
    preferences: [
      { preferenceId: 0, Icon: CoralPet, text: 'Yes', requisitionValue: 'true' },
      { preferenceId: 1, Icon: CoralNoAnswer, text: `No/They don't care`, requisitionValue: 'false' }
    ],
    firstButtonText: 'finish',
    secondButtonText: 'previous'
  }
]

export const ENDPOINT = `https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service`

export const REGEX = {
  NAME: /^[[A-Z][a-z'\u00C0-\u00FF]+(\s+[[A-Z][a-z'\u00C0-\u00FF]+\s*)+$/gm,
  EMAIL: /^[\w0-9._-]+@[\w0-9.-]+\.[\w]{2,}$/igm
}
