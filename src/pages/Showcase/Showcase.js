import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getList } from 'services'
import Header from 'components/Header'
import Card from 'components/Card'
import {
  ShowcaseWrapper,
  ShowcaseContent,
  Illustration,
  ShowcaseList,
  ListCarousel
} from './Showcase.style'

const Showcase = () => {
  const history = useHistory()
  const { location: { state } } = history
  const [list, setList] = useState([])

  useEffect(() => {
    getList(state, setList)
  }, [])

  return (
    <ShowcaseWrapper>
      <Header />
      <ShowcaseContent>
        <Illustration />
        <h2>Our picks for you</h2>
        <ListCarousel>
          <ShowcaseList>
            {list.map(item => {
              const { id, name, price, sun, water, url, toxicity } = item
              return (
                <Card
                  id={id}
                  name={name}
                  price={price}
                  sun={sun}
                  water={water}
                  url={url}
                  toxicity={toxicity}
                />
              )
            })}
          </ShowcaseList>
        </ListCarousel>
      </ShowcaseContent>
    </ShowcaseWrapper>
  )
}

export default Showcase
