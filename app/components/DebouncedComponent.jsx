'use client'
import React ,{useState} from 'react'
import { useDebounce } from '../utils/debounce'


function DebouncedComponent() {
    const [text, setText]=useState('')
    const debouncedText=useDebounce(text,500)
  return (
    <>
    <input
    onChange={(e)=>setText(e.target.value)}
    type='text'/>
    <span>{text}</span>
    <span>{debouncedText}</span>

    </>
  )
}

export default DebouncedComponent