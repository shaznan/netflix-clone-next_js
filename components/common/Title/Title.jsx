import React from 'react'
import { HeadingOne, HeadingTwo } from './style'


export const TitleOne = ({children}) => {
  return (
    <HeadingOne>{children}</HeadingOne>
  )
}

export const TitleTwo = ({children}) => {
  return (
    <HeadingTwo>{children}</HeadingTwo>
  )
}


export default Title