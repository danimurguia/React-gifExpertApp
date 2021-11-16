import React, { useState } from 'react'

export const AddCategory = ({setCategorias}) => {

const [inputvalue, setinputvalue] = useState()

const handleInputChange = (e) =>{
  
  setinputvalue(e.target.value)
}

const handleSubmit = (e) => {

e.preventDefault()

if (inputvalue.trim().length > 0){
  setCategorias(categos => [inputvalue, ...categos]);
  setinputvalue('')
}



}

  return (
   
    <form onSubmit = {handleSubmit}>
      <input type = 'text' value = {inputvalue}
      onChange = {handleInputChange} />
      </form>
    
  )
}
