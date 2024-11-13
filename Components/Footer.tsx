import React from 'react'


export default function FooterBro() {
  return (
    <footer className='bg-gray-400'>
        <div className="text-center p-5">
            <p>© {new Date().getFullYear()} ardiminda project. All rights reserved.</p>
        </div>
    </footer>
  )
}
