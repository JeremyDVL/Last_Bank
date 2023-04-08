import React from 'react';
import Card from './context';

function Home(){
  return (
    <div className="column">
      <div className="row">
    <Card
      txtcolor="black"
      header="Welcome to the Last Bank"
      title="Your Money is Safe with Us"
      body={(<img src={require('../images/spyvsspy.png')} className="img-fluid" alt=""/>)}
      >
    </Card>
      </div>
      <div className="column">
      <div className="row"></div>
    <Card
      txtcolor="grey"
      header="Money Goes In"
      title="But May Not Come Out"
      body={(<img src={require('../images/vault.jpg')} className="img-fluid" alt=""/>)}
      >
      </Card>
      </div>
      </div>
  );  
}

export default Home;
