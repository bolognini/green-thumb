import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getList } from 'services'
import Header from 'components/Header'
import Card from 'components/Card'
import ErrorComponent from 'components/ErrorComponent'
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
  const [error, setError] = useState(false)
  const [fallback, setFallback] = useState(false)

  useEffect(() => {
    getList(state, setList, setError, setFallback)
  }, [])

  return (
    <ShowcaseWrapper>
      <Header />
      {error
        ? <ErrorComponent text='Please, click on the puppy to get back to quiz.' />
        : (
          <ShowcaseContent>
            <Illustration />
            <h2>Our picks for you</h2>
            <ListCarousel>
              <ShowcaseList fallback={fallback}>
                {fallback
                  ? <ErrorComponent text='Sorry, but no plant was found with those preferences. Please, click on the puppy to get back to quiz.' />
                  : list && list.map(item => {
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
        )}
    </ShowcaseWrapper>
  )
}

export default Showcase
