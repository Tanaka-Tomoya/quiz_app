import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import Record from './record';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import logo from './logo.png'

let a = 0
export default function Question(question,i) {
  let id = true
  a += 1
  if (a > 5){
    id = false
  }
  return (
    <div>
      { id  &&
        <Item>
          <Card style={{}}>
            <CardContent>
              <div>
                <MainCardHeader
                  avatar={
                    <Avatar src={logo} alt="test" style={{margin:'0'}}></Avatar>
                  }
                  title={
                    <Typography variant="headline">
                      <Linkk to ={'/answer/' + question.id}>{question.title}</Linkk>
                    </Typography>
                  }
                  subheader="2018/7/10"
                  >
                </MainCardHeader>
              </div>
            </CardContent>
          </Card>
      </Item>
      }
    </div>
  );
}
const MainCardHeader = styled(CardHeader)`
  text-align: left;

`
const Item = styled.div`
  width: 100%;
  height: 110px;
  border-bottom: 0.5px solid #AAAAAA;
  margin-top: 10px;
`
const Linkk = styled(Link)`
  text-decoration: none;
  color: black;
`
