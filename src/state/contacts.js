const initialState = {
    data: [
        {
            id: '1',
            name: 'Nemanja Pakaški',
            phone: '060 084 25 83',
        },
        {
            id: '2',
            name: 'Tijana Jovanović',
            phone: '061 285 32 32',
        },
        {
            id: '3',
            name: 'Dragan Mirković',
            phone: '060 321 65 65',
        }
    ]
};

export default (state = initialState, action = {}) => {
    switch (action.type) {

        case 'ADD_CONTACT':
            return {
                ...state,
                    data: state.data.concat({
                        id: Date.now().toString(32),
                        name: action.contactName,
                        phone: action.contactPhone
                    })
            };

        case 'REMOVE_CONTACT':
            return {
                ...state,
                data: state.data.filter(contact => contact.id !== action.removedContactId)
            };

        case 'UPDATE_CONTACT':
            return {
                ...state,
                data: state.data.map(
                    contact =>
                        contact.id !== action.updatedContactId
                            ? contact
                            : {
                                ...contact,
                                ...action.updatedContact
                            }
                )
            };

        default:
            return state
    }
};