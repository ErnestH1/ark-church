import React from 'react'
import Safinabar from '../../components/SafinaTvcomp/safinabar'
import Main from '../../components/SafinaTvcomp/Main'
import Row from '../../components/SafinaTvcomp/Main'
import requests from '../../Requests'


function Sermons() {
  return (
    <>
      <Safinabar />
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
