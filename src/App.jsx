import React, { Component } from 'react';
import { Button, Container, Header, Icon, Menu } from 'semantic-ui-react';

import DictionaryList from './DictionaryList.jsx';

export class App extends Component {
  render() {
    return (
      <Container style={{ padding: '2em 0em' }}>
        <Menu borderless secondary>
          <Menu.Item>
            <Header>Kamus Teknologi</Header>
          </Menu.Item>
          <Menu.Item position="right">
            <iframe
              src="https://ghbtns.com/github-btn.html?user=mhdsyarif&repo=kamus-teknologi&type=star&count=true&size=large"
              scrolling="0"
              frameBorder="0"
              width="120px"
              height="30px"
            ></iframe>

            <Button
              color="facebook"
              style={{ marginLeft: 16 }}
              as="a"
              href="https://github.com/mhdsyarif/kamus-teknologi"
            >
              <Icon name="github" />
              Kode Program
            </Button>
          </Menu.Item>
        </Menu>

        <DictionaryList />
      </Container>
    );
  }
}
