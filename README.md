## NPM Issue Viewer App
This is a new issue viewer application created with ReactJS.

## Requirements
- **Default List Page**: List 25 issues per page. In this case, we are loading from 
[npm issues from github] (https://github.com/npm/npm/issues). Should only display the first 140 characters of the summary (ending on a clean word).
- **Detail Page**: Click on an individual issue from the default page will take you to a new page that has the issue details.
               Issue comments will be displayed. Names with @-notation will have a link to the user's Github page.
- See [mock-up](#mock-up) below. 

## Run this app

### `npm install`

Install the app

### `npm start`

Runs the app in the development mode. <br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
Chrome browser is recommended.

### `npm test`
Run all tests using Jest.<br>


## Approach

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Scope
- Most of the requirements outlined are complete.
- Exception: I have not worked on labels. If I have more time, I will create a component LabelList which will store Label components.
Then, render the LabelList component inside the IssueItem.

### Mock-up
- Draw and identify reusable React components in the mock-up
For example: Home, IssueList, IssueItem, Details, DetailItem, CommentList, and CommentItem

 ![Image of Issue Viewer Default ](docs/Issue_Viewer_Default.png)
 ![Image of Issue Viewer Details ](docs/Issue_Viewer_Details.png)

### Structure
- `components/Home`: consists of components related to a list of issues and separate components with stateless and stateful. <br />
- `components/Details`: consists of components related to Details page
- `components/Common`: consists of utility functions
- `api/github`: consists of github issues endpoints

### Packages used
- `htmlToText`: convert from html to text
- `lodash`: truncate to 140 characters
- `Marked`: convert from github markup to html markup

### Styling
- I wrote the majority of styles with inline styles
- Used `Panel` for displaying comment and `Pagination` from `React-Bootstrap`

### Tests
- Unit tests are written with Jest. 
If there is more time, I will write more tests such as checking if endpoints have the valid responses, 
navigation, and check if error messages have been handled correctly.

Thank you. If you have any questions, please feel free to email me at lzhang800@gmail.com

## What the app looks like

### Npm issues default page
![Image of Issue Viewer Default ](docs/Issue_Viewer_Result_Default.png)

### Npm detail page
![Image of Issue Viewer Details ](docs/Issue_Viewer_Result_Detail.png)