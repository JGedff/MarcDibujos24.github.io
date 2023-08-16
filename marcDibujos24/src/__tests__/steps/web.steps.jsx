import React from 'react' 
import { render, screen } from '@testing-library/react' 
import '@testing-library/jest-dom/extend-expect' 

import { App } from '../../App.jsx'

export const __template__ = ({ 
  given: Given, 
  and: And, 
  when: When, 
  then: Then 
}) => { 
  Given ('The user opens the app', () => { 
    render(<App></App>) 
  })
 
} 
 
export default __template__