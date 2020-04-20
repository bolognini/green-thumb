import React from 'react'
import {
  GreyHighSun,
  GreyLowSun,
  GreyNoAnswer,
  GreyOneDrop,
  GreyTwoDrops,
  GreyThreeDrops,
  GreyToxic,
  GreyPet
} from 'assets'

const createIcon = preference => {
  switch (preference) {
    case 'high':
      return (
        <div>
          <GreyHighSun />
          <span>High sunlight</span>
        </div>
      )
    case 'low':
      return (
        <div>
          <GreyLowSun />
          <span>Low sunlight</span>
        </div>
      )
    case 'no':
      return (
        <div>
          <GreyNoAnswer />
          <span>No sunlight</span>
        </div>
      )
    case 'rarely':
      return (
        <div>
          <GreyOneDrop />
          <span>Water rarely</span>
        </div>
      )
    case 'regularly':
      return (
        <div>
          <GreyTwoDrops />
          <span>Water regularly</span>
        </div>
      )
    case 'daily':
      return (
        <div>
          <GreyThreeDrops />
          <span>Water daily</span>
        </div>
      )
    case true:
      return (
        <div>
          <GreyToxic />
          <span><b>Beware!</b> Toxic for pets</span>
        </div>
      )
    default:
      return (
        <div>
          <GreyPet />
          <span>Non-toxic for pets</span>
        </div>
      )
  }
}

export default createIcon
