import Marked from 'marked'
import _ from 'lodash'

export const convertMarkup = (markup) => {
  Marked.setOptions({
    breaks: true
  })
  return {__html: Marked(markup).replace(/\B@(\w+)/g, '<a href="https://github.com/$1">$&</a>')}
}