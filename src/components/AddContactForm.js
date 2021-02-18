import React, { Component } from 'react';
import { connect } from 'react-redux';

const initialState = {
    contactName: '',
    contactPhone: ''
};

class AddContactForm extends Component {

    state = initialState;

    handleSubmit = event => {
        event.preventDefault();
        this.props.addContact(this.state);
        this.setState(initialState);
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
        
    };

    render() {

        const inputSize = 30;
        const { contactName, contactPhone } = this.state;
        return (
            <React.Fragment>
                <strong>Unesi kontakt:</strong>
                <form onSubmit={ this.handleSubmit }>
                    <input
                        name='contactName'
                        size={ inputSize }
                        placeholder='Unesi ime'
                        value={ contactName }
                        onChange = { this.handleChange }
                    /><br/>
                    <input
                        name='contactPhone'
                        size={ inputSize }
                        placeholder='Unesi broj telefona'
                        value = { contactPhone }
                        onChange = { this.handleChange }
                    /><br/>
                    <br/>
                    <button>Dodaj</button>
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
        addContact: ({ contactName, contactPhone }) =>
            dispatch({
                type: 'ADD_CONTACT',
                contactName,
                contactPhone,
            })
    })
)(AddContactForm);