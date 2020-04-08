import styled, { css } from 'styled-components'

export const blurStyle = css`
  backdrop-filter: blur(64px) invert(.15) brightness(1.3) contrast(1);

  @-moz-document url-prefix() {
    background-color: hsla(0, 0%, 100%, 0.99);
  }

  .dark-mode & {
    backdrop-filter: blur(64px) invert(.175) brightness(0.7) contrast(1.2);

    @-moz-document url-prefix() {
      background-color: hsla(0, 0%, 7.5%, 0.99);
    }
  }
`

const Blur = styled.div`
  ${blurStyle}
`

export default Blur
