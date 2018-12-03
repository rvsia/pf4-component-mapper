import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '@patternfly/react-core';

const FormTabs = ({ fields, formOptions }) =>
  fields.map(({ key, fields, title, name }) => (
    <React.Fragment key={ key || name }>
      <Title size="3xl">{ title }</Title>
      { formOptions.renderForm(fields, formOptions) }
    </React.Fragment>
  ));

FormTabs.propTypes = {
  fields: PropTypes.array.isRequired,
  formOptions: PropTypes.shape({
    renderForm: PropTypes.func.isRequired,
  }).isRequired,
};

export default FormTabs;
