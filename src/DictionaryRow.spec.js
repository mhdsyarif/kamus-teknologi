import React from 'react';
import { mount } from 'enzyme';
import { DictionaryRow } from './DictionaryRow';
import { Button, Table } from 'semantic-ui-react';

describe('DictionaryRow', () => {
  it('should render correctly', () => {
    const dictionaries = [
      {
        "id": 1,
        "indonesia": "Admin sistem",
        "english": "Sysadmin/System Administrator",
        "sumber": "Wikipedia",
        "keterangan": "",
        "suka": false
      },
      {
        "id": 2,
        "indonesia": "Algoritme",
        "english": "Algorithm",
        "sumber": "Wikipedia",
        "keterangan": "",
        "suka": false
      },
    ];

    const wrapper = mount(
      <Table>
        <Table.Body>
          <DictionaryRow
            dictionary={dictionaries[0]}
            addFavorite={dictionary => {
              dictionary.suka = !dictionary.suka;
            }}
          />
        </Table.Body>
      </Table>
    );

    wrapper.find(Button).forEach(node => {
      node.simulate('click');
    });
  });
});
