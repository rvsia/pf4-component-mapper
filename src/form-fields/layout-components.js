import React from 'react';
import { layoutComponents } from '@data-driven-forms/react-form-renderer';
import { Form, Toolbar, ToolbarGroup, ToolbarItem, Button, ActionGroup, Grid } from '@patternfly/react-core';
import { PlusIcon, CloseIcon } from '@patternfly/react-icons';
import './layout-components-styles.scss';

const Icon = ({ name }) => name === 'close' ? <CloseIcon /> : <PlusIcon />;
const ButtonLayout = ({ label, bsStyle, children, ...props }) =>
  <ToolbarGroup>
    <ToolbarItem>
      <Button variant={ bsStyle } { ...props }>
        { label }{ children }
      </Button>
    </ToolbarItem>
  </ToolbarGroup>;
const ColLayout = ({ children }) => <React.Fragment>{ children }</React.Fragment>;
const ButtonGroupLayout = ({ children, ...props }) =>
  <ActionGroup { ...props } >
    <Toolbar>
      { children }
    </Toolbar>
  </ActionGroup>;
const ArrayFieldLayout = ({ children, ...props }) => <Grid className="field-array" { ...props } >{ children }</Grid>;
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
