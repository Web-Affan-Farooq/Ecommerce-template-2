"use client";

import React, { useState } from 'react'

function page() {
    const clearURL = (event:any) => {
      event.preventDefault();
        const res = fetch("/signup",);
    }

  return (
    <div>
        <form action={"/"} className='signup-form' onSubmit={clearURL}>
            <h1>Signup</h1>
            <input type="email" name='email' placeholder='Enter email' required id="email" className='input-signup'/>
            <input type="password" name='password' placeholder='Enter password' required id="password" className='input-signup'/>
            <button type='submit'>Signup</button>
        </form>
    </div>
  )
}

export default page