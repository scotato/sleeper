import React from 'react'
import styled from 'styled-components'

export default () => (
  <defs>
    <RadialGradient id="yellowRadial">
      <Stop offset="0%" color="yellow" opacity={0} />
      <Stop offset="100%" color="yellow" opacity={0.75} />
    </RadialGradient>

    <RadialGradient id="orangeRadial">
      <Stop offset="0%" color="orange" opacity={0.5} />
      <Stop offset="100%" color="yellow" opacity={0.9} />
    </RadialGradient>

    <RadialGradient id="pinkRadial">
      <Stop offset="0%" color="orange" opacity={0.5} />
      <Stop offset="100%" color="pink" opacity={0.9} />
    </RadialGradient>

    <RadialGradient id="redRadial">
      <Stop offset="33%" color="red" opacity={0.75} />
      <Stop offset="100%" color="orange" opacity={0.5} />
    </RadialGradient>

    <RadialGradient id="purpleRadial">
      <Stop offset="0%" color="purple" opacity={0} />
      <Stop offset="100%" color="purple" opacity={0.9} />
    </RadialGradient>

    <RadialGradient id="orangeAlphaRadial">
      <Stop offset="0%" color="orange" opacity={0.5} />
      <Stop offset="100%" color="yellow" opacity={0.5} />
    </RadialGradient>

    <RadialGradient id="pinkAlphaRadial">
      <Stop offset="0%" color="pink" opacity={0.5} />
      <Stop offset="100%" color="pink" opacity={0.5} />
    </RadialGradient>

    <RadialGradient id="purpleAlphaRadial">
      <Stop offset="0%" color="purple" opacity={0.5} />
      <Stop offset="100%" color="purple" opacity={0.5} />
    </RadialGradient>

    <LinearGradient id="yellowPinkLinear" x1="0" x2="0" y1="0" y2="1">
      <Stop offset="0%" color="yellow" opacity={1} />
      <Stop offset="100%" color="pink" opacity={1} />
    </LinearGradient>

    <LinearGradient id="purpleLinear" x1="0" x2="1" y1="0" y2="1">
      <Stop offset="0%" color="purpleDark" opacity={0.9} />
      <Stop offset="100%" color="purple" opacity={0.1} />
    </LinearGradient>
  </defs>
)

const RadialGradient = props => (
  <radialGradient id={props.id} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
    {props.children}
  </radialGradient>
)

const LinearGradient = props => (
  <linearGradient {...props} />
)

const Stop = styled.stop`
  stop-opacity: ${({ opacity }) => opacity !== undefined ? opacity : 1};
  stop-color: ${({ theme, color }) => theme.color[color || 'black']};
`
