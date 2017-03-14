import React from 'react'
import ReactDOM from 'react-dom'
import IssueItem, {truncateSummary} from './IssueItem'
import testData from './testData/issueItem-test-data.json'

test('truncate less than 140 characters', () => {
  const truncated = truncateSummary('abc')
  expect(truncated).toBe('abc')
})

test('truncate github markup characters to less than 140 characters', () => {
  const truncated = truncateSummary(testData.body)
  expect(truncated.length).toBeLessThanOrEqual(140)
  expect(truncated.length).toEqual(135)

})

test('IssueItem renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<IssueItem issue={testData} />, div)
})
