import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description}></meta>
      <meta name='keyword' content={keywords}></meta>
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Currency convertor react',
  keywords: 'currency-conversion ,rates, money, finance',
  description: 'Best rates out there',
}

export default Meta
