const endPoints = {
    'listIssues': (owner, repo) => `https://api.github.com/repos/${owner}/${repo}/issues`,
    'listIssuesPerPage': (owner, repo, page, number) => `https://api.github.com/repos/${owner}/${repo}/issues?page=${page}&per_page=${number}`,
    'getIssue': (owner, repo, issueId) =>  `https://api.github.com/repos/${owner}/${repo}/issues/${issueId}`,
    'getComments': (owner, repo, issueId) => `https://api.github.com/repos/${owner}/${repo}/issues/${issueId}/comments`
}

export default endPoints
