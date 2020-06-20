import React from 'react';
import { shallow } from 'enzyme';
import { DictionaryFilter } from './DictionaryFilter';

describe('DictionaryFilter', () => {
  it('should render correctly in "debug" mode', () => {
    let filter = '';
    let totalCount = 100;
    let onSubmitFilter = function() {};

    const component = shallow(
      <DictionaryFilter
        filter={filter}
        totalCount={totalCount}
        onSubmitFilter={onSubmitFilter}
        debug
      />
    );

    expect(component).toMatchSnapshot();

    component.instance().handleOnChange({}, {});
  });
});
