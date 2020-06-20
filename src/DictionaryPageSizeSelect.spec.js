import React from 'react';
import { shallow } from 'enzyme';
import { DictionaryPageSizeSelect } from './DictionaryPageSizeSelect';

describe('DictionaryPageSizeSelect', () => {
  it('should render correctly', () => {
    shallow(<DictionaryPageSizeSelect limit={10} onChangeLimit={jest.fn()} />);
  });
});
