import { ENDPOINT } from 'constants/index'

export const getList = (object, setState, setError) => {
  if (!object) return setError(true)
  const { sun, water, pets } = object
  fetch(`${ENDPOINT}sun=${sun}&water=${water}&pets=${pets}`)
    .then(res => res.json())
    .then(res => {
      setState(res)
    })
    .catch(error => console.error(error))
}

export const sendUserInformation = (object, form) => {
  // const { name, email, id } = object
  fetch(ENDPOINT, {
    method: 'post',
    body: new FormData(form)
  })
    .then(res => res.json())
    .catch(error => console.error(error))
}
