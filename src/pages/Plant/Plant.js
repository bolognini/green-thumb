import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { getPlant } from 'services'
import Header from 'components/Header'
import Form from 'components/Form'
import parsePreferenceInformation from './utils'
import {
  PlantWrapper,
  PlantContent,
  PlantInformation,
  PlantName,
  Price,
  PlantImage,
  ChosenPreferences,
  Preference,
  FormArea
} from './Plant.style'

const Plant = () => {
  const history = useHistory()
  const useQuery = () => new URLSearchParams(useLocation().search)
  const query = useQuery()
  const [plantData, setPlantData] = useState({})
  const [fallback, setFallback] = useState(false)

  useEffect(() => {
    if (!query.get('id')) {
      return history.push('/')
    }
    getPlant(query.get('id'), setPlantData, setFallback)
  }, [])

  const {
    id,
    name,
    sun,
    water,
    toxicity,
    price,
    url
  } = plantData

  return (
    <PlantWrapper>
      <Header />
      <PlantContent>
        {fallback
          ? history.push('/notfound')
          : (
            <>
              <PlantInformation>
                <PlantName>{name}</PlantName>
                <Price>${price}</Price>
                <PlantImage url={url} />
                <ChosenPreferences>
                  <Preference>
                    {parsePreferenceInformation(sun)}
                  </Preference>
                  <Preference>
                    {parsePreferenceInformation(water)}
                  </Preference>
                  <Preference>
                    {parsePreferenceInformation(toxicity)}
                  </Preference>
                </ChosenPreferences>
              </PlantInformation>
              <FormArea>
                <Form plantId={id} />
              </FormArea>
            </>
          )}
      </PlantContent>
    </PlantWrapper>
  )
}

export default Plant
