import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
   
       <div className="flex gap-3 p-3">
      <Link href='/'>Sathish Kumar</Link>
      <Link href='/blog'>Blog</Link>
      <Link href='/contact'>Contact</Link>
      </div>
    
    
  )
}

export default Header
