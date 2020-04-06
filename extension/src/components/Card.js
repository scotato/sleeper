import styled from 'styled-components'

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(64px);
  border-radius: 16px;
  pointer-events: all;
  will-change: background-color;
  transition: background-color 0.2s ease-in-out;

  .dark-mode & {
    background-color: rgba(0, 0, 0, 0.5);

    @-moz-document url-prefix() {
      background-color: rgba(0, 0, 0, 0.9);
    }
  }

  @-moz-document url-prefix() {
    background-color: rgba(255, 255, 255, 0.9);
  }
`

export default Card
