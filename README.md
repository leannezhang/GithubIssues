## NPM Issue Viewer App
This is a new issue viewer application created with ReactJS.

## Requirements
- **Default List Page**: List 25 issues per page. In this case, we are loading from 
[npm issues from github] (https://github.com/npm/npm/issues). Should only display the first 140 characters of the summary (ending on a clean word)
- **Detail Page**: Click on an individual issue from the default page will take you to a new page that has the issue details.
               Issue comments will be displayed. Names with @-notation will have a link to the user's Github page.
- See [mock-up](#mock-up) below. 

## To Run this app

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
Chrome browser is recommended.

### `npm test`
Run all tests using Jest.<br>


## Approach

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Mock-up
- Draw and identify reusable React components in the mock-up. 
For example, Home, IssueList, IssueItem, Details, DetailItem, CommentList, and CommentItem. 
- ![Image of Issue Viewer Default ](https://octodex.github.com/images/Issue_Viewer_Default.png)
- ![Image of Issue Viewer Details ](https://octodex.github.com/images/Issue_Viewer_Details.png)

### Structure
- `Home`: consists of components related to a list of issues and default page.
  Separated stateful components and stateless components.
  Chose to follow higher order components patterns to pass stateful components to stateless components.
  For example, pass stateless Home to StatefulHome.
- `Details`: consists of components related to Details page.
- `api/github`: consists of endpoints and I use fetch and Promise to make a get request
- `Common`: consists of utility functions

### Packages used
- Chose to `htmlToText` and `lodash` are used to convert html to text in order to truncate to 140 characters
-  Chose to use `Marked` to convert github markup to valid html in order to process body content

### Styling
- Majority of styling are written in inline styles. 
- Use `Panel` and `Pagination` from `React-Bootstrap` for re-usable components

### Tests
- Unit tests are written with Jest. 
If there is more time, I will write more tests such as checking if endpoints have the valid responses, 
if navigate issue work, and check if error messages have been handled correctly.
