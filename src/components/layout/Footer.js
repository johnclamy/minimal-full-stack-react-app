import React from 'react'

export default function () {
  return (
    <footer className='mt-2 p-4 bg-dark'>
      <p className='text-center text-white-50 h6 font-italic font-weight-light'>
        &copy; {new Date().getFullYear()} Tiny Pets Inc. | All rights reserved.
      </p>
    </footer>
  )
}