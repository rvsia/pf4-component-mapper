/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import FormRenderer from '@data-driven-forms/react-form-renderer';
import miqSchema from './demo-schemas/miq-schema';
import { uiArraySchema, arraySchema, schema, uiSchema, conditionalSchema } from './demo-schemas/widget-schema';
import { formFieldsMapper, layoutMapper } from '../src';
import { Title, Button, Toolbar, ToolbarGroup, ToolbarItem } from '@patternfly/react-core';
import { wizardSchema } from './demo-schemas/wizard-schema';
import sandboxSchema from './demo-schemas/sandbox';

const Summary = props => <div>Custom summary component.</div>;
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { schema: wizardSchema, schemaString: 'default', sandbox: false };
    }

    render() {
        return (<div style={{ widht: '100%' }}>
        <div style={{ maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}>
            <Title size="4xl">Pf4 component mapper</Title>
            <Toolbar style={{ marginBottom: 20, marginTop: 20 }}>
                <ToolbarGroup>
                    <Button onClick={() => this.setState(state => ({ schema: wizardSchema, schemaString: 'default' }))}>Wizard</Button>
                </ToolbarGroup>
                <ToolbarGroup>
                    <Button onClick={() => this.setState(state => ({ schema: arraySchema, schemaString: 'mozilla', ui: uiArraySchema}))}>ArraySchema</Button>
                </ToolbarGroup>
                <ToolbarGroup>
                    <Button onClick={() => this.setState(state => ({ schema: schema, schemaString: 'mozilla', ui: uiSchema}))}>Schema</Button>
                </ToolbarGroup>
                <ToolbarGroup>
                    <Button onClick={() => this.setState(state => ({ schema: miqSchema, schemaString: 'miq'}))}>MIQ</Button>
                </ToolbarGroup>
                <ToolbarGroup>
                    <Button onClick={() => this.setState(state => ({ schema: conditionalSchema, schemaString: 'mozilla', ui: uiSchema}))}>Conditional</Button>
                </ToolbarGroup>
                <ToolbarGroup>
                    <Button onClick={() => this.setState(state => ({ schema: sandboxSchema, schemaString: 'default', ui: uiSchema }))}>Sandbox</Button>
                </ToolbarGroup>
            </Toolbar>
                <FormRenderer
                    onSubmit={console.log}
                    schemaType={this.state.schemaString && this.state.schemaString}
                    formFieldsMapper={{
                        ...formFieldsMapper,
                        summary: Summary
                    }}
                    onCancel={() => console.log('Cancel action')}
                    layoutMapper={layoutMapper}
                    schema={this.state.schema}
                    uiSchema={this.state.ui}
                />
        </div>
    </div>)
    };
}

ReactDOM.render(<App />, document.getElementById('root'));
