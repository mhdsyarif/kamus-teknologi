import React from 'react';
import { shallow, mount } from 'enzyme';
import DictionaryList from './DictionaryList';
import 'isomorphic-fetch';
import fetchMock from 'fetch-mock';

describe('DictionaryList', () => {
  it('should render correctly', () => {
    shallow(<DictionaryList />);
  });

  it('Success', () => {
    fetchMock.mock('*', [
      {
        "id": 1,
        "indonesia": "Salin",
        "english": "Copy",
        "keterangan": "",
        "sumber": "Wikipedia",
        "suka": false
      },
    ]);
    const wrapper = mount(<DictionaryList />);
    wrapper.instance().handleSort('make');
    wrapper.instance().onChangeLimit({}, { value: 20 });
    wrapper.instance().onSubmitFilter('someFilterTerm');
    wrapper.instance().onChangePage({}, { activePage: 1 });
    wrapper.instance().addFavorite({ suka: false, id: 1 });
    fetchMock.restore();
  });

  it('Fail', () => {
    fetchMock.mock('*', {
      status: 404,
      body: {
        message: 'Some error message',
      },
    });
    const wrapper = mount(<DictionaryList />);
    wrapper.instance().handleSort('make');
    wrapper.instance().onChangeLimit({}, { value: 20 });
    wrapper.instance().onSubmitFilter('someFilterTerm');
    wrapper.instance().onChangePage({}, { activePage: 1 });
    wrapper.instance().addFavorite({ suka: false, id: 1 });
    fetchMock.restore();
  });
});
