import React, { Component } from 'react';
import EditContactForm from './EditContactForm';

class ToggleEditContactButton extends Component {

    state = {
        showEditForm: false
    };

    render() {

        const { contact } = this.props;

        return (

            <React.Fragment>
                <button
                    onClick={() =>
                        this.setState({ showEditForm: !this.state.showEditForm })
                    }
                >
                Uredi
                </button>

                { this.state.showEditForm && (
                    <EditContactForm
                       contactId={ contact.id }
                       name={ contact.name }
                       phone={ contact.phone }                      
                       updateContact={this.props.updateContact}
                    />
                ) }

            </React.Fragment>
        );
    }
}

export default ToggleEditContactButton;