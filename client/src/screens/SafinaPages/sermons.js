import React from 'react'
import Main from '../../components/SafinaTvcomp/Main'
import Row from '../../components/SafinaTvcomp/Main'
import requests from '../../Requests'
import Navbar from '../../components/Safina/navbar'


function Sermons() {
  return (
    <>
      <Navbar />
      <Main />
      <Row title='Up Coming' fetchURL={requests.requestUpcoming} />
      <Row title='Popular' fetchURL={requests.requestUpcoming} />
      <Row title='Trending' fetchURL={requests.requestUpcoming} />
      <Row title='Top Rated' fetchURL={requests.requestUpcoming} />
      <Row title='Top ' fetchURL={requests.requestUpcoming} />
    </>
  )
}

export default Sermons
