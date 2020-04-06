import emoji from 'react-easy-emoji'

const Emoji = props => emoji(props.children, {
  baseUrl: '//twemoji.maxcdn.com/2/',
  size: 'svg',
  ext: '.svg',
  props: {
    style: {
      height: props.size || 24,
      width: props.size || 24,
      margin: 0,
      verticalAlign: -4
    }
  }
})

export default Emoji
