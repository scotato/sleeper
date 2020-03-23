import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'

const Layout = styled.div`
width: 100%;
height: 100%;
`

export default props => (
  <>
    <GlobalStyle />
    <Layout {...props} />
  </>
)