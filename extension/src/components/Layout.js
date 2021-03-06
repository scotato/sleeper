import React from 'react'
import styled from 'styled-components'

import Blobs from './Blobs'

const Layout = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`

const BlobsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`

const Body = styled.main`
  display: flex;
  position: relative;
  margin: 0 auto;
  flex-direction: column;
  min-height: 100%;
  z-index: 10;
  pointer-events: none;

  [tabindex] {
    min-height: 100%;
  }
`

export const Container = styled.div`
  margin: 0 auto;
  padding: 32px 48px;
  max-width: 848px;

  @media (max-width: 720px) {
    padding: 24px;
  }

  @media (max-width: 350px) {
    padding: 16px;
  }
`

export default props => (
  <Layout>
    <Body>
      {props.children}
    </Body>
    <BlobsContainer>
      <Blobs />
    </BlobsContainer>
  </Layout>
)
