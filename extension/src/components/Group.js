import React from 'react'
import styled from 'styled-components'

const Group = styled.div`
  margin-bottom: 16px;
`

const Title = styled.div`
  display: flex;
  padding: 8px 16px;
  font-size: 16px;
  color: ${props => props.theme.color.default};
  align-items: center;
  text-transform: uppercase;
`

const Detail = styled.span`
  margin-left: auto;
`

const Body = styled.div`
  border-radius: 16px;
  overflow: hidden;

  & > a,
  & > textarea,
  & > label,
  & > div {
    margin-top: 0;
    margin-bottom: 0;
    border-radius: 0;

    &:last-child {
      border-bottom-left-radius: 16px;
      border-bottom-right-radius: 16px;
    }
  }
`

const Caption = styled.div`
  padding: 8px 16px;
  font-size: 16px;
  color: hsl(0, 0%, 50%);
`

export default props => (
  <Group>
    <Title>
      {props.title}
      <Detail>{props.detail}</Detail>
    </Title>
    <Body>{props.children}</Body>
    <Caption>{props.caption}</Caption>
  </Group>
)
