import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToggleEditContactButton from './ToggleEditContactButton';

class ContactList extends Component {

    handleRemoveClick = event => {
        const contactId = event.target.dataset.contactId;
        this.props.removeContact(contactId);
    };

    render() {
        const { contacts } = this.props;

        return (
            <React.Fragment>
                <strong>Lista kontakta:</strong>
                <ul>
                    { contacts.data.map(contact => {

                        return (
                            <li key={ contact.id }>

                                <strong>{ contact.name }</strong><br/>
                                { contact.phone }<br/>

                                <button
                                    onClick={ this.handleRemoveClick }
                                    data-contact-id={ contact.id }>
                                    Ukloni
                                </button>

                                <ToggleEditContactButton
                                    contact={ contact }
                                    updateContact={ this.props.updateContact }
                                />

                            </li>
                        )
                    })}
                </ul>
            </React.Fragment>
        );

    }
}

export default connect(

    state => ({
        contacts: state.contacts
    }),

    dispatch => ({
        removeContact: (removedContactId) =>
            dispatch({
                type: 'REMOVE_CONTACT',
                removedContactId
            })
    })
)(ContactList);