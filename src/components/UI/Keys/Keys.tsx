import React from 'react';
import {Button} from "react-bootstrap";
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";



const Keys = () => {
  const buttons = [7, 8, 9, 4, 5, 6, 1, 2, 3, '<', 0, 'E']
  const {addToKeyBoard, removeFromKeyBoard, openKeyBoard, changeKeyBoard} = useActions()
  const {password, userInput} = useTypedSelector(state => state.keyboard)
  return (
    <div style={{width: 120, margin: '0 auto'}}>
      {buttons.map(btn =>
        <Button
          key={btn}
          style={{float: 'left'}}
          onClick={() => {
            if (userInput === 'ACCESS GRANTED' || userInput === 'ACCESS DENIED') {
              changeKeyBoard('')
            }
            if (userInput.length < 4) {
              if (btn !== '<' && btn !== 'E') {
                addToKeyBoard(`${btn}`)
              }
            }
            if (btn === '<') {
              removeFromKeyBoard()
            } else if (btn === 'E') {
              if (userInput === password) {
                openKeyBoard()
                changeKeyBoard('ACCESS GRANTED')
              } else {
                changeKeyBoard('ACCESS DENIED')
              }
            }
          }}
        >{btn}</Button>
      )}
    </div>
  );
};

export default Keys;