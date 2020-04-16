/* eslint-disable import/prefer-default-export */
import {
  CoralHighSun,
  CoralLowSun,
  CoralNoAnswer,
  GreenOneDrop,
  GreenTwoDrops,
  GreenThreeDrops,
  GreenNoAnswer,
  GreenPet
} from 'assets'

export const QUIZZ_CHOICE = {
  SUNLIGHT: 0,
  WATER: 1,
  PET: 2
}

export const QUIZZ_PREFERENCES = [
  {
    background: 'sun',
    description: `First, set the amount of <b>sunlight</b> your plant will get`,
    preferences: [
      { Icon: CoralHighSun, text: 'High sunlight' },
      { Icon: CoralLowSun, text: 'Low sunlight' },
      { Icon: CoralNoAnswer, text: 'No sunlight' }
    ],
    firstButtonText: 'next',
    secondButtonText: 'home'
  },
  {
    background: 'wateringCan',
    description: `How often do you want to <b>water</b> your plant?`,
    preferences: [
      { Icon: GreenOneDrop, text: 'Rarely' },
      { Icon: GreenTwoDrops, text: 'Regularly' },
      { Icon: GreenThreeDrops, text: 'Daily' }
    ],
    firstButtonText: 'next',
    secondButtonText: 'previous'
  },
  {
    background: 'dog',
    description: `Do you have pets? Do they <b>chew</b> plants?`,
    caption: 'We are asking because some plants can be <b>toxic</b> for your buddy',
    preferences: [
      { Icon: GreenNoAnswer, text: 'Yes' },
      { Icon: GreenPet, text: `No/They don't care` }
    ],
    firstButtonText: 'finish',
    secondButtonText: 'previous'
  }
]
