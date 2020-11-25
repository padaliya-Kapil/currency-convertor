import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Table, Col } from 'react-bootstrap'

import Meta from '../components/Meta'
import Selector from '../components/Selector'

const RatesScreen = () => {
  const [base, setBase] = useState('GBP')
  const [conversionData, setConversionData] = useState({})
  const [updateTime, setUpdateTime] = useState('')
  var rowNumber = 1

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        'https://api.exchangeratesapi.io/latest?base=' + base
      )
      setConversionData(data)
      setUpdateTime(new Date() + '')
    }
    fetchData()
    return (rowNumber = 1)
  }, [])

  return (
    <>
      <Meta title='Rates' />
      <Row>
        <Col xs lg='2' md='auto' sm='auto'>
          <Selector />
        </Col>
      </Row>

      <p>Base currency {base}</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.no.</th>
            <th>Currency</th>
            <th>Rates</th>
          </tr>
        </thead>
        <tbody>
          {typeof conversionData.rates !== 'undefined' &&
            Object.entries(conversionData.rates).map(([key, value]) => (
              <tr key={key}>
                <td>{rowNumber++}</td>

                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <p>Last updated on {updateTime}</p>
    </>
  )
}

export default RatesScreen

// </tbody>
// </Table>
