import React from 'react';
import { Card, Row, Col, Icon, CardTitle } from 'react-materialize';
import './style.css';


function WelcomeHeader() {
  return (
    <Row className="welcomeHeader">

      
        <Card
         className='headerCard darken-1'
         actions={[
            <h1>Grub What Is Best For You!!!</h1>
          ]}
          closeIcon={<Icon>close</Icon>}
          header={<CardTitle></CardTitle>}
          revealIcon={<Icon>more_vert</Icon>}

        >    
        </Card>

    </Row>
  );
}
export default WelcomeHeader;
