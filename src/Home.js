import React from 'react'
import Dashboard from './Dashboard'
import {Row , Col} from 'antd'
function Home() {
  return (
    <Dashboard>
        
        <Row justify='center' className='home'>

          
          <Col lg={10} sm={24}>
            <img src={require('./spidermanwallpaper.jpg')} alt='' height='400' display='flex' />
          </Col>

          <Col lg={24} sm={24}>
            <h3 style={{color: '#FFFFFC'}}><b>Hello👀! Welcome</b></h3>
            <p>The Dashboard is created by: Abhisek & Yug  ✌</p>
          </Col>


        </Row>

    </Dashboard>
  ) 
}

export default Home