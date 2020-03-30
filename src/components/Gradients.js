import React from 'react'
import styled from 'styled-components'

export default () => (
  <defs>
    <RadialGradient id="orange">
      <Stop offset="0%" color="orange" />
      <Stop offset="90%" color="yellow" />
      <Stop offset="100%" color="yellow" />
    </RadialGradient>

    <RadialGradient id="pink">
      <Stop offset="0%" color="pink" />
      <Stop offset="100%" color="pink" />
    </RadialGradient>

    <RadialGradient id="purple">
      <Stop offset="0%" color="purple" />
      <Stop offset="100%" color="purple" />
    </RadialGradient>

    <RadialGradient id="orangeAlpha">
      <Stop offset="0%" color="orange" opacity={0.5} />
      <Stop offset="100%" color="yellow" opacity={0.5} />
    </RadialGradient>

    <RadialGradient id="pinkAlpha">
      <Stop offset="0%" color="pink" opacity={0.5} />
      <Stop offset="100%" color="pink" opacity={0.5} />
    </RadialGradient>

    <RadialGradient id="purpleAlpha">
      <Stop offset="0%" color="purple" opacity={0.5} />
      <Stop offset="100%" color="purple" opacity={0.5} />
    </RadialGradient>
  </defs>
)

const RadialGradient = props => (
  <radialGradient id={props.id} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
    {props.children}
  </radialGradient>
)

const Stop = styled.stop`
  stop-opacity: ${props => props.opacity || 1};
  stop-color: ${props => props.theme.color[props.color || 'black']};
`
