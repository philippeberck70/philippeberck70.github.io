import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='container mt-3'>
      <h3>Exercices de français</h3>
      <p><strong>Gopb</strong> est un site Internet pour tester ses compétences en orthographe.</p>
      <button onClick={() => navigate("/exercices")} className='btn btn-secondary'>Commencer</button>
    </div>
  )
}

export default Home