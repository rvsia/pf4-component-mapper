import React from 'react';
import { layoutComponents } from '@data-driven-forms/react-form-renderer';
import { Form, GridItem, Button, ActionGroup, Grid } from '@patternfly/react-core';
import { PlusIcon, CloseIcon } from '@patternfly/react-icons';

const Icon = ({ name }) => name === 'close' ? <CloseIcon /> : <PlusIcon />;
const ButtonLayout = ({ label, bsStyle, children, ...props }) => <Button variant={ bsStyle } { ...props }>{ label }{ children }</Button>;
const ColLayout = ({ children, xs }) => <GridItem span={ xs || 12 } >{ children }</GridItem>;
const ButtonGroupLayout = ({ children, ...props }) => <ActionGroup style={{ marginTop: 0 }} { ...props } >{ children }</ActionGroup>;
const ArrayFieldLayout = ({ children, ...props }) => <Grid gutter="md" { ...props } >{ children }</Grid>;
const HelpBlockLayout = ({ children, ...props }) => <div { ...props } style={{ color: '#a30000' }} >{ children }</div>;

const layoutMapper = {
  [layoutComponents.FORM_WRAPPER]: Form,
  [layoutComponents.BUTTON]: ButtonLayout,
  [layoutComponents.COL]: ColLayout,
  [layoutComponents.FORM_GROUP]: React.Fragment,
  [layoutComponents.BUTTON_GROUP]: ButtonGroupLayout,
  [layoutComponents.ICON]: Icon,
  [layoutComponents.ARRAY_FIELD_WRAPPER]: ArrayFieldLayout,
  [layoutComponents.HELP_BLOCK]: HelpBlockLayout,
};

export default layoutMapper;
