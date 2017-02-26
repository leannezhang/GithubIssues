import endPoints from './endPoints'

// ES7, async returns you a promise for you
export const getListIssues = async (owner, repo) => {
    const url = endPoints.listIssues(owner, repo)
    //try {
    const data = await fetch(url)
    // ES7: await: resolve a promise on the fly
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
    const parsed = await data.json()
    return parsed
    //} catch(e) {
    //    throw e
    //}
}


export const getListIssuesPerPage = async (owner, repo, page) => {
  const number = 25
  const url = endPoints.listIssuesPerPage(owner, repo, page, number)

  const data = await fetch(url)
  const parsed = await data.json()

  return parsed
}

export const getIssue = async (owner, repo, issueNumber) => {
  const url = endPoints.getIssue(owner, repo, issueNumber)

  const data = await fetch(url)
  const parsed = await data.json()

  return parsed
}