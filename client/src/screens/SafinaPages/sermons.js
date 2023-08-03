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
    </>
  )
}

export default Sermons
