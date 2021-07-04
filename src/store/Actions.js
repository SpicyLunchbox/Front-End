export const REQUEST_USER = "REQUEST_USER";
export const REQUEST_EQUIPMENT = "REQUEST_EQUIPMENT";
export const EDIT_USER = "EDIT_USER";
export const EDIT_EQUIPMENT = "EDIT_EQUIPMENT";

export function requestUser(user) {
    return {
        type: REQUEST_USER,
        payload: user,
    }
}

export function editUser(user) {
    return {
        type: EDIT_USER,
        payload: user
    }
}

export function requestEquipment(equipment) {
    return {
        type: REQUEST_EQUIPMENT,
        payload: equipment,
    }
}

export function editEquipment(equipment) {
    return {
        type: EDIT_EQUIPMENT,
        payload: equipment
    }
}