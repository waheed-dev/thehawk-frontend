
import endpoints from '@/config/endpoints'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function AuthorSection({ User }) {
  const [users, setusers] = useState([])
  const loadUsers = async () => {
    try {
      const { data } = await axios.get(endpoints.users.all)
      setusers(data)
    } catch (error) {
      
    }
  }
  useEffect(() => {
    loadUsers()
  }, [])
  console.log(users);
  
  return (
    <>
          <div className="side-widget sw-contributors">
              <h5><span>Contributors</span></h5>
              <div className="sw-inner">
                  <ul>
            {
              users?.map((user) => (
                <li key={user._id}><a href="./contributor.html"><img src={user.avatar} className="img-responsive" alt="" /></a></li>
              ))
                     }
           
                    
                  </ul>
              </div>
          </div>
    </>
  )
}

