const endPoints = {
    'listIssues': (owner, repo) => `https://api.github.com/repos/${owner}/${repo}/issues`,
    'listIssuesPerPage': (owner, repo, page, number) => `https://api.github.com/repos/${owner}/${repo}/issues?page=${page}&per_page=${number}`,
    'getIssue': (owner, repo, issueNumber) =>  `https://api.github.com/repos/${owner}/${repo}/issues/${issueNumber}`,
    'getComments': (owner, repo, issueNumber) => `https://api.github.com/repos/${owner}/${repo}/issues/${issueNumber}/comments`
}

export default endPoints
