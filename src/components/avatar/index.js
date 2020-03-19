import React from 'react'
import styled from 'styled-components'

const Avatar = ({
  size = 50,
  src = 'https://www.challenges.fr/assets/img/2015/06/22/cover-r4x3w1000-59a6be192027f-dominique-strauss-kahn-dit-dsk-sur-le-perron-de-l-elysee.jpg'
}) => {
  return <AvatarImage size={size} src={src}></AvatarImage>
}

const AvatarImage = styled.img`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border-radius: ${props => `${props.size / 2}px`};
`

export default Avatar
