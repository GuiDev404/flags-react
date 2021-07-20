import React from 'react'
import Button from '../components/Button'
import imgFallback from '../not_found_fallback.jpg'

const NotFound = () => {

  return (
    <div className='not-found'>
      <Button isAnchor link='/' styles='btn-back'> 
        <i className="fas fa-long-arrow-alt-left"></i>
        Back
      </Button>
      <div className="container">
         <h1 className='title'>404 Not Found</h1>
        <img src={imgFallback} alt="revolucion francesa bandera" />
      </div>
    </div>
  )
}

export default NotFound
