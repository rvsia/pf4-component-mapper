import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Title } from '@patternfly/react-core';
import { TextContent, Text, TextVariants } from '@patternfly/react-core';

const SubForm = ({ fields, title, description, formOptions }) => (
  <React.Fragment>
    { title && <Title size="xl">{ title }</Title> }
    { description && <TextContent><Text component={ TextVariants.small } style={{ marginBottom: 0 }}>{ description }</Text></TextContent> }
    <Grid gutter="md">{ formOptions.renderForm(fields, formOptions) }</Grid>
  </React.Fragment>
);

SubForm.propTypes = {
  fields: PropTypes.array.isRequired,
  formOptions: PropTypes.shape({
    renderForm: PropTypes.func.isRequired,
  }).isRequired,
  name: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SubForm;
