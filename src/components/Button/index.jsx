import React from 'react';
import { ButtonContainer } from './styles';

const Button = ({title, variant="primary", onclick}) => {
  return (
    <ButtonContainer variant={variant} onClick={onclick}>
        {title}
    </ButtonContainer>
  )
}


export { Button };