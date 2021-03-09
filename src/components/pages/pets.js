import React from 'react'

import PageContainer from '../layout/PageContainer'
import AddPet from '../pets/AddPet'

export default function () {
  return (
    <PageContainer>
      <header>
        <h1 className='h2 text-black-50'>Add a pet</h1>
        <hr />
      </header>
      <section>
        <p className='lead'>Enter the breed of your pup</p>
        <AddPet />
      </section>
    </PageContainer>
  )
}