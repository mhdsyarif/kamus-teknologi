import React from 'react';
import { shallow } from 'enzyme';
import { DictionaryTable } from './DictionaryTable';

describe('DictionaryTable', () => {
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

    shallow(
      <DictionaryTable
        dictionaries={dictionaries}
        totalCount={100}
        totalPages={10}
        currentPage={0}
        onChangePage={() => {}}
        addFavorite={() => {}}
        onChangeLimit={() => {}}
        limit={'10'}
      />
    );
  });

  it('Empty props.dictionaries', () => {
    shallow(
      <DictionaryTable
        totalCount={100}
        totalPages={10}
        currentPage={0}
        onChangePage={() => {}}
        addFavorite={() => {}}
        onChangeLimit={() => {}}
        limit={'10'}
      />
    );
  });
});
