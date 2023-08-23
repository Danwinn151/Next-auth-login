"use client"
import React, {useState, useEffect} from 'react'
import { getProviders, useSession, signIn, signOut } from 'next-auth/react';
import {useRouter} from 'next/router'
interface providersType {

}
const Nav = () => {
    const [providers, setProviders] = useState<Record<string, {} | null>>()
    const {data: session} = useSession()
    
    console.log(session)
    const fetchProviders = async () => {
        const response = await getProviders()
        console.log(response)
        setProviders(response as {})
    }


    useEffect(() => {
        if(session) {
          
        }
    },[session])

  return (
    <div>
      {session ? <p> Yoou are currently signed in</p>
       : <button onClick={() => signIn()}>Sign in</button>
    }
    </div>
  )
}

export default Nav