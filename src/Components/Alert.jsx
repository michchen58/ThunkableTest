import React from 'react';
import styled from 'styled-components';

const OverlayElt = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display:flex;
  align-items:center;
  justify-content: center;
  background-color: rgba(187, 187, 187, 0.14);
`;

const AlertElt = styled.div`
  width: 338px;
  min-width: 338px;
  height: 128px;
  background-color: rgb(241,241,244);
  padding: 26px 38px 38px 63px;
  position: relative;
  -webkit-box-shadow: 3px 3px 7px 0px rgba(0,0,0,0.5);
  -moz-box-shadow: 3px 3px 7px 0px rgba(0,0,0,0.5);
  box-shadow: 3px 3px 7px 0px rgba(0,0,0,0.5);
  position: relative;
  line-height: 30px;
  background-image: url('../img/Question.svg');
  background-repeat: no-repeat;
  background-size: 22px;
  background-position: 26px 32px;
  font-size:16px;
  margin-bottom: 250px;
`;

const SubMessage = styled.div`
  color: #7F7F7F;
`;

const Button = styled.button`
  cursor: pointer;
  font-size:0.9em;
  border-radius:5px;
  position: absolute;
  right: 32px;
  bottom: 32px;
  height: 32px;
  width: 60px;
`;



const Alert = props => {console.log(props.clickModalCb); return (
  <React.Fragment>
    {props.visible
      ? <OverlayElt>
          <AlertElt className="noselect">
            <div>{props.message}</div>
            <SubMessage>{props.sub}</SubMessage>
            <Button style={{right: '107px'}} onClick={() => props.clickModalCb(false)}>No</Button>
            <Button style={{backgroundColor: '#1890FF', color: '#FFFFFF'}} onClick={() => props.clickModalCb(true)}>Yes</Button>
          </AlertElt>
        </OverlayElt>
      : ''
    }
  </React.Fragment>
);}

export default Alert;
