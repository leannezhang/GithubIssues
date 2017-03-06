import Marked from 'marked'

export const convertMarkup = (markup) => {
  Marked.setOptions({
    breaks: true
  })
  return {__html: Marked(markup)}
}