import React from 'react'
import icons from '../../assets/sprite.svg'

export default function icon({ name }) {
  return (
    <svg className={`icon icon-$name`}>
      <use xlinkHref={`${icons}#${name}`}> </use>
    </svg>
  )
}
