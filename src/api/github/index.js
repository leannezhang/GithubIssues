import endPoints from './endPoints'

const parseData = (url) => {
  return fetch(url)
    .then(data => data.json())
    .catch(e => {
      return []
    })
}

export const getListIssues = (owner, repo) => {
  const url = endPoints.listIssues(owner, repo)
  return parseData(url)
}

export const getListIssuesPerPage = (owner, repo, page) => {
  const number = 25
  const url = endPoints.listIssuesPerPage(owner, repo, page, number)
  return parseData(url)
}

export const getIssue = (owner, repo, issueNumber) => {
  const url = endPoints.getIssue(owner, repo, issueNumber)
  return parseData(url)
}

export const getComments = (owner, repo, issueNumber) => {
  const url = endPoints.getComments(owner, repo, issueNumber)
  return parseData(url)
}