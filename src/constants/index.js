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

export const QUIZZ_PREFERENCES = {
  SUNLIGHT: {
    background: 'sun',
    description: `First, set the amount of <b>sunlight</b> your plant will get`,
    preferences: [
      { Icon: CoralHighSun, text: 'High sunlight' },
      { Icon: CoralLowSun, text: 'Low sunlight' },
      { Icon: CoralNoAnswer, text: 'No sunlight' }
    ]
  },
  WATER: {
    background: 'wateringCan',
    description: `How often do you want to <b>water</b> your plant?`,
    preferences: [
      { Icon: GreenOneDrop, text: 'Rarely' },
      { Icon: GreenTwoDrops, text: 'Regularly' },
      { Icon: GreenThreeDrops, text: 'Daily' }
    ]
  },
  PET: {
    background: 'dog',
    description: `Do you have pets? Do they <b>chew</b> plants?`,
    caption: 'We are asking because some plants can be <b>toxic</b> for your buddy',
    preferences: [
      { Icon: GreenNoAnswer, text: 'Yes' },
      { Icon: GreenPet, text: `No/They don't care` }
    ]
  }
}
