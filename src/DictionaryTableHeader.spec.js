import React from 'react';
import { mount, shallow } from 'enzyme';
import { DictionaryTableHeader } from './DictionaryTableHeader';
import { Table } from 'semantic-ui-react';

describe('DictionaryTableHeader', () => {
  it('should render correctly', () => {
    shallow(<DictionaryTableHeader handleSort={jest.fn()} />);
  });

  it('Column Header On Click', () => {
    const wrapper = mount(
      <Table>
        <DictionaryTableHeader handleSort={jest.fn()} column={'id'} />
      </Table>
    );
    wrapper.find(Table.HeaderCell).forEach(node => {
      node.simulate('click');
    });
  });

  it('Sorted Column', () => {
    const columns = [
      'id',
      'indonesia',
      'english',
      'sumber',
      'keterangan',
      'suka',
    ];

    columns.forEach(column => {
      shallow(
        <Table>
          <DictionaryTableHeader column={column} direction={'ascending'} />
        </Table>
      );
    });
  });
});
