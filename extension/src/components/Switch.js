import React, { useContext } from 'react'
import ReactSwitch from 'react-switch'
import styled, { ThemeContext } from 'styled-components'

const Switch = styled(ReactSwitch)`
  display: block !important;
`

export default props => {
  const { color } = useContext(ThemeContext)

  return (
    <Switch
      width={52}
      height={32}
      handleDiameter={28}
      onColor={color.greenHex}
      offColor={color.grayHex}
      activeBoxShadow={`0 0 2px 2px ${color.blue}`}
      checkedIcon={false}
      uncheckedIcon={false}
      {...props}
    />
  )
}
