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
      <Row rowID='1' title='Up Coming' fetchURL={requests.requestUpcoming} />
      <Row rowID='2' title='Popular' fetchURL={requests.requestUpcoming} />
      <Row rowID='3' title='Trending' fetchURL={requests.requestUpcoming} />
      <Row rowID='4' title='Top Rated' fetchURL={requests.requestUpcoming} />
      <Row rowID='5' title='Top ' fetchURL={requests.requestUpcoming} />
    </>
  )
}

export default Sermons
