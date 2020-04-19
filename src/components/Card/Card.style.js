import styled from 'styled-components'

export const CardWrapper = styled.li`
  display: grid;
  grid-template-rows: 4fr 1fr 1fr 2fr;
  justify-items: center;
  align-items: center;
  flex-shrink: 0;
  max-width: 268px;
  width: calc(100vw - 56px);
  min-height: 342px;
  padding: 0 26px;
  margin-left: 18px;
  background-color: var(--white);

  &:last-child {
    margin-right: 20px;
  }
`

export const PlantImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ url }) => url && `url(${url})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

export const PlantName = styled.span`
  font-weight: var(--bold-weight);
  font-size: 18px;
  line-height: 28px;
  color: var(--dark-green);
`

export const PlantInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const IconWrapper = styled.div`
  display: grid;
  align-items: center;
  max-width: 94px;
  grid-template-columns: ${({ isToxic }) => (isToxic ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)')};
  grid-column-gap: 9px;
`

export const Price = styled.span``
