import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { number, string, bool } from 'prop-types'
import {
  GreyToxic,
  GreyOneDrop,
  GreyTwoDrops,
  GreyThreeDrops,
  GreyNoAnswer,
  GreyHighSun,
  GreyLowSun
} from 'assets'
import Button from 'components/Button'
import { CardWrapper, PlantImage, PlantName, PlantInformation, IconWrapper, Price } from './Card.style'

const Card = props => {
  const history = useHistory()
  const [sunData, setSunData] = useState(<GreyNoAnswer />)
  const [waterData, setWaterData] = useState(<GreyThreeDrops />)
  const {
    id,
    name,
    price,
    sun,
    water,
    url,
    toxicity
  } = props

  const mountSunData = () => {
    if (sun === 'high') {
      setSunData(<GreyHighSun />)
    } else if (sun === 'low') {
      setSunData(<GreyLowSun />)
    }
  }

  const mountWaterData = () => {
    if (water === 'rarely') {
      setWaterData(<GreyOneDrop />)
    } else if (water === 'regularly') {
      setWaterData(<GreyTwoDrops />)
    }
  }

  useEffect(() => {
    mountSunData()
    mountWaterData()
  }, [])

  return (
    <CardWrapper>
      <PlantImage url={url} />
      <PlantName>{name}</PlantName>
      <PlantInformation>
        <Price>${price}</Price>
        <IconWrapper isToxic={toxicity === true}>
          {toxicity === true && <GreyToxic />}
          {sunData}
          {waterData}
        </IconWrapper>
      </PlantInformation>
      <Button
        text='buy now'
        disabled={false}
        secondary
        onClick={() => history.push({
          pathname: `/plant`,
          search: `?id=${id}`
        })}
      />
    </CardWrapper>
  )
}


Card.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  price: number.isRequired,
  sun: string.isRequired,
  water: string.isRequired,
  url: string.isRequired,
  toxicity: bool.isRequired
}

export default Card
