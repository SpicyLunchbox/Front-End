import {REQUEST_USERS, REQUEST_USER, REQUEST_ALL_EQUIPMENT, REQUEST_EQUIPMENT, EDIT_USER, EDIT_EQUIPMENT} from './actions'; 

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
    },
    users: {},
    equipments: {}
} 

export default function reducer(state = initialState, action) {
    switch(action.type) {
        
        case REQUEST_USERS:
            return{}

        case REQUEST_USER:
            return {
                ...state,
                user: {
                    ...state.user,
                    user_id: action.payload.user_id,
                    username: action.payload.username,
                    name: action.payload.name,
                    email_address: action.payload.email_address,
                    phone_number: action.payload.phone_number,
                    address_line: action.payload.address_line,
                    address_state: action.payload.address_state,
                    address_city: action.payload.address_city,
                    zip_code: action.payload.zip_code
                }    
            }

        case REQUEST_ALL_EQUIPMENT:
            return {}

        case REQUEST_EQUIPMENT:
            return {
                ...state,
                equipment: {
                    ...state.equipment,
                    equipment_id: action.payload.equipment_id,
                    equipment_name: action.payload.equipment_name,
                    equipment_type: action.payload.equipment_type,
                    equipment_type_id: action.payload.equipment_type_id,
                    equipment_description: action.payload.equipment_description,
                    cost: action.payload.cost,
                    seller: action.payload.seller,
                    purchaser: action.payload.purchaser
                }
            }

        case EDIT_USER:
            return {}

        case EDIT_EQUIPMENT:
            return {}

        default:
            return state;
    }
}