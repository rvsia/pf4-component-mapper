import React from 'react';
import toJson from 'enzyme-to-json';
import Tabs from '../form-fields/tabs';
import { shallow } from 'enzyme';

describe('Tabs component', () => {
  const props = {
    fields: [
      {
        key: 'cosiKey',
        title: 'cosiTitle',
        name: 'cosiName',
        fields: [],
      },
    ],
    formOptions: {
      renderForm: (fields, formOptions) => <div>{ 'Here would be form' }</div>,
    },
  };

  it('should render tabs correctly', () => {
    const wrapper = shallow(
      <Tabs { ...props }>
      </Tabs>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
