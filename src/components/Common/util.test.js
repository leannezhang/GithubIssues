import {convertMarkup} from './util'

test('add @mention to a hyper link', () => {
  const actual = convertMarkup('\@MexXxo').__html.toString().trim()
  const expected = '<p><a href="https://github.com/MexXxo">@MexXxo</a></p>'
  expect(expected).toEqual(actual)
})

test('email address should not appear as hyper link', () => {
  const actual = convertMarkup('name@gmail.com').__html.toString().trim()
  const expected = '<p>name@gmail.com</p>'
  expect(expected).toEqual(actual)
})