import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditContactForm extends Component {

    state = {
        contactName: this.props.name,
        contactPhone: this.props.phone,
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.updateContact(this.props.contactId, {
            ...this.state,
            name: this.state.contactName,
            phone: this.state.contactPhone,
        })
    };

    renderInput(fieldName) {
        return (
            <input
                name={ fieldName }
                value={ this.state[fieldName] }
                onChange={ this.handleChange }
            />
        )
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={ this.handleSubmit }>

                    { this.renderInput('contactName')}<br/>
                    { this.renderInput('contactPhone')}<br/>

                    <button>Promeni</button>
                </form>
            </React.Fragment>
        );
    }
}

export default connect(

    state => ({
        contacts: state.contacts
    }),

    dispatch => ({
        updateContact: (updatedContactId, updatedContact) =>
            dispatch({
                type: 'UPDATE_CONTACT',
                updatedContactId,
                updatedContact
            })
    })
)(EditContactForm);