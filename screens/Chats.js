import React, { Component } from 'react';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, View, Fab, Icon } from 'native-base';
export default class ListAvatarExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaIRmJD8ECfo8AlLwe90Qy8sIDvVDXHjFmGjS3oBHP1d-s_x9x' }} />
              </Left>
              <Body>
                <Text>Leonardo Dicaprio</Text>
                <Text note>let's play badminton</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQmqjNsXgYHCEtXKIfbt8K9ngCpmE6jecsZIF22ecQqd3L5ZKk' }} />
              </Left>
              <Body>
                <Text>Tony Stark</Text>
                <Text note>Hey broo!!</Text>
              </Body>
              <Right>
                <Text note>5:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>

      </Container>
    );
  }
}
