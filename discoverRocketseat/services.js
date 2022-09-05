import axios from 'axios';

axios
  .get("https://api.github.com/users/gabwestside")
  .then(res => axios.get(res.data.repos_url))
  .then(repos => console.log(repos.data))
  .catch(error => console.log(error))

Promise.all([
  axios.get('https://api.github.com/users/gabwestside'),
  axios.get('https://api.github.com/users/gabwestside/repos')
])
  .then( results => {
    console.log( results[0].data.login)
    console.log( results[1].data.length)
  })
  .catch( err => console.log(err.message))