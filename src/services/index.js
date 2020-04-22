import { ENDPOINT } from 'constants/index'

export const getList = (object, setState, setError, setFallback) => {
  if (!object) return setError(true)
  const { sun, water, pets } = object
  fetch(`${ENDPOINT}?sun=${sun}&water=${water}&pets=${pets}`)
    .then(res => {
      if (res.status === 404) {
        return setFallback(true)
      }
      return res
    })
    .then(res => res && res.json())
    .then(res => {
      res && setState(res)
    })
    .catch(error => console.error(error))
}

export const getPlant = (id, setState, setFallback) => {
  fetch(`${ENDPOINT}/plant?id=${id}`)
    .then(res => {
      if (res.status === 422) {
        return setFallback(true)
      }
      return res
    })
    .then(res => res && res.json())
    .then(res => {
      setState(res)
    })
    .catch(error => console.error(error))
}

export const sendUserInformation = object => {
  fetch(`${ENDPOINT}?`, {
    method: 'post',
    body: JSON.stringify(object)
  })
    .then(res => {
      if (res.status === 200) {
        res.json()
      }
    })
    .catch(error => console.error(error))
}
