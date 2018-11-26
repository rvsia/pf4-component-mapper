/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import FormRenderer from '@data-driven-forms/react-form-renderer';
import miqSchema from './demo-schemas/miq-schema';
import { uiArraySchema, arraySchema, schema, uiSchema, conditionalSchema } from './demo-schemas/widget-schema';
import { formFieldsMapper, layoutMapper } from '../src';
import { Title, Button, Toolbar, ToolbarGroup, ToolbarItem } from '@patternfly/react-core';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { schema: miqSchema, schemaString: 'miq', ui: uiArraySchema };
    }

    render() {
        return (<div style={{ widht: '100%' }}>
        <div style={{ maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}>
            <Title size="4xl">Pf4 component mapper</Title>
            <Toolbar style={{ marginBottom: 20, marginTop: 20 }}>
                <ToolbarGroup>
                    <Button onClick={() => this.setState(state => ({ schema: arraySchema, schemaString: 'mozilla', ui: uiArraySchema}))}>arraySchema</Button>
                </ToolbarGroup>
                <ToolbarGroup>
                    <Button onClick={() => this.setState(state => ({ schema: schema, schemaString: 'mozilla', ui: uiSchema}))}>schema</Button>
                </ToolbarGroup>
                <ToolbarGroup>
                    <Button onClick={() => this.setState(state => ({ schema: miqSchema, schemaString: 'miq'}))}>miq</Button>
                </ToolbarGroup>
                <ToolbarGroup>
                    <Button onClick={() => this.setState(state => ({ schema: conditionalSchema, schemaString: 'mozilla', ui: uiSchema}))}>conditional</Button>
                </ToolbarGroup>
            </Toolbar>
            <FormRenderer
                onSubmit={console.log}
                schemaType={this.state.schemaString}
                formFieldsMapper={formFieldsMapper}
                layoutMapper={layoutMapper}
                schema={this.state.schema}
                uiSchema={this.state.ui}
            />
        </div>
    </div>)
    };
}

ReactDOM.render(<App />, document.getElementById('root'));
