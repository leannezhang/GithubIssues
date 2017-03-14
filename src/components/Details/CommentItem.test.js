import React from 'react'
import ReactDOM from 'react-dom'
import CommentItem from './CommentItem'
import CommentsTestData from './testData/comments-test-data.json'

describe('Test CommentItem', ()=> {
  let commentData

  beforeAll(()=> {
    //runs before all tests in this block
    commentData = CommentsTestData[0];
  })

  test('CommentItem renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CommentItem comment={commentData} />, div)
  })


})


