import React from 'react'
import { useParams } from 'react-router-dom'

export const Number = () => {
  const {id, texte, background} = useParams();
  const checkNumber = isNaN(+id);
  return (
    <h1 style={{color: texte, background: background}}>The {checkNumber ? "word" : "number"} is: {id}</h1>
  )
}
