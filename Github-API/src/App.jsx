import React from 'react'
import GithubAPI from './Components/GithubAPI'

const App = () => {
  return (
    <React.Fragment>
      <h1 className='text-violet-400 font-semibold text-center text-4xl my-[24px]'>GitHub API </h1>
      <GithubAPI />
    </React.Fragment>
  )
}

export default App