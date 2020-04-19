/* eslint-disable import/prefer-default-export */
import { ENDPOINT } from 'constants/index'

export const getList = (object, setState) => {
  const { sun, water, pets } = object
  fetch(`${ENDPOINT}sun=${sun}&water=${water}&pets=${pets}`)
    .then(res => res.json())
    .then(res => {
      setState(res)
    })
    .catch(error => console.error(error))
}
