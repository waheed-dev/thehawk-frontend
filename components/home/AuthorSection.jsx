
import endpoints from '@/config/endpoints'
import axios from 'axios'
import Link from 'next/link'
import url from '@/config/url'
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
      {
        users.length > 0 ? <>
          <div className="side-widget sw-contributors">
            <h5><span>Contributors</span></h5>
            <div className="sw-inner">
              <ul>
                {
                  users?.map((user) => (
                    <li key={user._id}>
                      <Link href={url.author.single.replace(":name", user.name ).replace(":id" , user._id)}>
                        <a >
                          <img src={user.avatar} loading="lazy" className="img-responsive" alt="" />
                        </a>
                      </Link>
                     
                    </li>
                  ))
                }


              </ul>
            </div>
          </div>
        </> : ''
      }
        
    </>
  )
}

