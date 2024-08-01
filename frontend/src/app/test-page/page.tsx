'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Page = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api/v1/health')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('エラーが発生しました', error);
      });
  }, []);
  return (
    <div>
      <h1>Health Check</h1>
      <p>{message}</p>
    </div>
  )
}

export default Page