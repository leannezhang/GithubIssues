import endPoints from './endPoints'

// ES7, async returns you a promise for you
export const getListIssues = async (owner, repo) => {
    const uri = endPoints.listIssues(owner, repo)
    //try {
    const data = await fetch(uri)
    // ES7: await: resolve a promise on the fly
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
    const parsed = await data.json()
    return parsed
    //} catch(e) {
    //    throw e
    //}
}
