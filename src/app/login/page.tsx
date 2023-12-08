import React from 'react'
import useUserStore from '@/hooks/userStore'

type Props = {}

export default function page({}: Props) {
  return (
    <div className='text'>
      <div>
        <h1>Log In</h1>
      </div>
      <div>
        <form action="dashboard">
        <input 
              type="text"
              className=''
              placeholder='Username'
              // value={logInUsername}
              // onChange={(e) => setLogInUsername(e.target.value)}
            />
            <input
              type="password"
              className=''
              placeholder='Password'
              // value={logInPassword}
              // onChange={(e) => setLogInPassword(e.target.value)}
            />
            <button type="submit" className=''>Submit</button>
        </form>
      </div>
    </div>
  )
}