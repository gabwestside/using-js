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

  const promise = new Promise(function( resolve, reject) {
    return resolve('ok!')
  })

  // promise way to caught a response with then
  promise
    .then(function(response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
    .finally(function() {
      console.log('always will work')
    })
  
  //async await promise form
  async function start() {
    try {
      const result = await promise
      console.log(result)
    } catch (error) {
      console.log(error)
    } finally {
      console.log('it always running...')
    }
  }
  
  start()

  async function startApi() {
    try {
     const response = await fetch('https://api.github.com/users/gabwestside')
     const user = await response.json()
     const reposResponse = await fetch(user.repos_url)
     const repos = await reposResponse.json()
   
     console.log(repos)
    } catch (error) {
      console.log(error)
    }
   }
   
   startApi()
   
   async function startClean() {
     const url = 'https://api.github.com/users/gabwestside'
     const user = await fetch(url).then(r => r.json())
     const repos = await fetch(user.repos_url).then(r => r.json())
   
     console.log(repos)
   }
   
    startClean().catch(e => console.log(e))
  