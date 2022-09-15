import React from 'react';
import {Card} from 'react-bootstrap';
import {useTypedSelector} from "../hooks/useTypedSelector";
import Keys from "./UI/Keys/Keys";

const KeyBoard: React.FC = () => {
  const {userInput, open} = useTypedSelector(state => state.keyboard)
  return (
    <Card style={{ width: '18rem', margin: '0 auto' }}>
      <Card.Header>
        <h1 style={{textAlign: 'center', marginTop: '10px', color: open?'green':'red'}}>{userInput}</h1>
      </Card.Header>
      <Card.Body>
        <Keys />
      </Card.Body>
    </Card>
  );
};

export default KeyBoard;