import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"

import Header from 'extension/src/components/Header'
import { Container } from 'extension/src/components/Layout'

const Body = styled(motion.div)`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 100%;
  min-height: 100vh;
  justify-content: stretch;
`

const Page = styled.div`
  margin-bottom: 72px;
  padding: 32px 0;
  pointer-events: all;
  background: white;
  font-size: 20px;

  @media (max-width: 720px) {
    padding: 0;
  }

  > div {
    display: grid;
    min-height: 100%;
  }

  .dark-mode & {
    background: hsl(0, 0%, 5%);
  }

  ul {
    margin-bottom: 32px;
    padding-left: 52px;
    list-style-type: none;
    font-size: 22px;

    li {
      position: relative;
      margin: 4px 0;

      img {
        position: absolute;
        top: 4px;
        left: -36px;
      }
    }
  }
`

export default props => (
  <Body
    animate={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 64 }}
    transition={{ type: 'spring' }}
  >
    <div>
      <Header />
    </div>
    <Page>
      <Container>
        {props.children}
      </Container>
    </Page>
  </Body>
)
