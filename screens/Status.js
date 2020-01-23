import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Separator, Left, Body, Right, Thumbnail} from 'native-base';
export default class ListAvatarExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List style={{marginBottom: 10}} >
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRS9b5DApC0yGQFVpQg13iJ7whSLngtsVxBAEyYDFCuiFZaMHXX' }} />
              </Left>
              <Body >
                <Text>Status Saya</Text>
                <Text note>Baru saja</Text>
              </Body>
              <Right/>
            </ListItem>
          </List>
          <Separator bordered>
            <Text style={{fontSize: 12, fontWeight: 'bold'}}>Pembaruan yang telah dilihat</Text>
          </Separator>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTr1_G1bic6EwgRZ1zpPK4-5EjPfe3uFakW64cHe2OFM1J_uaRV' }} />
              </Left>
              <Body>
                <Text>Lisa</Text>
                <Text note>1 menit yang lalu</Text>
              </Body>
              <Right/>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkFgpqe2cgLKqu7tlIOYeG-pMmBb1zJ6BbO1CDaiRx5cqPMAjL' }} />
              </Left>
              <Body>
                <Text>Raisa</Text>
                <Text note>2 menit yang lalu</Text>
              </Body>
              <Right/>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}