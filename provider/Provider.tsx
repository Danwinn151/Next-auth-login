"use client"

import React from 'react'
import {SessionProvider} from "next-auth/react"

interface SessionProps {
  children: React.ReactNode
}

const Provider = ({children}: SessionProps) => {
  return (
    <SessionProvider>
       {children}
    </SessionProvider>
  )
}

export default Provider