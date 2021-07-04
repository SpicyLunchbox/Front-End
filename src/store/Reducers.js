import {REQUEST_USER, REQUEST_EQUIPMENT, EDIT_USER, EDIT_EQUIPMENT} from './actions'; 

const initialState = {
    user: {
        user_id: null,
        username: null,
        name: null,
        email_address: null,
        phone_number: null,
        address_line: null,
        address_state: null,
        address_city: null,
        zip_code: null
    },
    equipment: {
        equipment_id: null,
        equipment_name: null,
        equipment_type: null,
        equipment_type_id: null,
        equipment_description: null,
        cost: null,
        seller: null,
        purchaser: null
    }
} 

export default function reducer(state = initialState, action) {
    switch(action.type) {
    
        case REQUEST_USER:
            return {}
        case REQUEST_EQUIPMENT:
            return {}
        case EDIT_USER:
            return {}
        case EDIT_EQUIPMENT:
            return {}
        default:
            return state;
    }
}