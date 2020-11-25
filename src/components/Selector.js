import React from 'react'
import { Form } from 'react-bootstrap'
import currencies from './currencies.js'
const Selector = ({ customSelect, customValue }) => {
  customSelect = (val) => {
    console.log(val)
  }
  return (
    <Form.Control
      as='select'
      onChange={(val) => customSelect(val)}
      value={customValue}
    >
      {currencies.map((currency) => (
        <option key={currency.code}>
          {currency.emoji}
          {currency.code}
        </option>
      ))}
    </Form.Control>
  )
}

export default Selector
