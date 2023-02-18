import { CardsBack, CardsFront, StyledCard } from './Card.styles'

import React from 'react'

function Card() {
  return (
    <StyledCard>
        <CardsFront></CardsFront>
        <CardsBack></CardsBack>
    </StyledCard>
  )
}

export default Card