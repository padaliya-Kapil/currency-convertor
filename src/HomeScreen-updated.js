import React, { useState } from 'react'
import { Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import Meta from '../components/Meta'
import Selector from '../components/Selector'

const HomeScreen = () => {
  const [value, setValue] = useState('')
  return (
    <>
      <Meta title='Home' />
      <p>{value}</p>
      <Row>
        <Col sm>
          <InputGroup className='mb-3'>
            <InputGroup.Prepend>
              <InputGroup.Text
                min='0'
                id='inputGroup-sizing-sm'
              ></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label='Small'
              aria-describedby='inputGroup-sizing-sm'
            />
          </InputGroup>
        </Col>
        <Col sm>
          <Selector customSelect={(val) => setValue(val)} customValue={value} />
        </Col>
        <Col sm id='arrow' style={{ textAlign: 'center' }} className='my-auto '>
          <i className='fas fa-exchange-alt'></i>
        </Col>
        <Col sm>
          <Selector />
        </Col>
      </Row>
    </>
  )
}

export default HomeScreen
