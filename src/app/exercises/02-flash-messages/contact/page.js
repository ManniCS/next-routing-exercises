'use client';
import React from 'react';

import {useRouter} from 'next/navigation'

import {ToastContext} from '../../../../components/ToastProvider'

function ContactPage() {
  const router = useRouter()

  const {createToast} = React.useContext(ToastContext)

  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');

  return (
    <main>
      <form
        onSubmit={(event) => { 
            event.preventDefault();
            router.push('.')
            createToast("Your message was received. We'll get back to you shortly!", "success")
        }}
      >
        <label htmlFor="name">Name:</label>
        <input id="name" value={name} required={true} onChange={(event) => {
          setName(event.target.value)
        }}/>

        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} required={true} onChange={(event) => { 
          setMessage(event.target.value)
        }}/>

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
