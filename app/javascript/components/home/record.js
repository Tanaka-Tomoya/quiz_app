import React from 'react';
import styled from 'styled-components';

export default function Record() {
  return (
			<Div>
        <ViewRecord>
          <Child>閲覧数</Child>
          <ViewNum>1</ViewNum>
        </ViewRecord>
        <AnswerRecord>
          <Child>回答数</Child>
          <AnswerNum>1</AnswerNum>
        </AnswerRecord>
        <RateRecord>
          <Child>正答率</Child>
          <RateNum>100%</RateNum>
        </RateRecord>
			</Div>
  );
}
const Div = styled.div`
  width: 100%;
  height: 50%;
  margin-top: 15px;
  display: flex;
`
const ViewRecord = styled.div`
  height: 100%;
  padding-left: 5px;
  text-align: center;
  width: 15%;
  border-right: #999999 solid 0.5px;
  margin-right: 5px;
  margin-left: auto;
`
const AnswerRecord = styled.div`
  height: 100%;
  padding-left: 5px;
  text-align: center;
  width: 15%;
  border-right: #999999 solid 0.5px;
  margin-right: 5px;
`
const RateRecord = styled.div`
  height: 100%;
  padding-left: 5px;
  text-align: center;
  width: 17%;
  border-right: #999999 solid 0.5px;
  margin-right: 5px;
`
const Child = styled.span`
  font-weight: 500;
  color: #555555;
`
const ViewNum = styled.div`
  padding-top: 10%;
  font-size: 20px;
  font-weight: 300;
  color: #222222;
`
const AnswerNum = styled.div`
  padding-top: 10%;
  font-size: 20px;
  font-weight: 300;
  color: #222222;
`
const RateNum = styled.div`
  padding-top: 10%;
  font-size: 20px;
  font-weight: 300;
  color: #222222;
`
