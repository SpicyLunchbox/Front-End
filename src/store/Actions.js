export const REQUEST_USER = "REQUEST_USER";
export const REQUEST_ALL_EQUIPMENT = "REQUEST_ALL_EQUIPMENT";
export const REQUEST_EQUIPMENT = "REQUEST_EQUIPMENT";

export function requestUser(user) {
    return {
        type: REQUEST_USER,
        payload: user
    }
}

export function requestEquipment(equipment) {
    return {
        type: REQUEST_EQUIPMENT,
        payload: equipment
    }
}

export function requestAllEquipment(equipments) {
    return {
        type: REQUEST_ALL_EQUIPMENT,
        payload: equipments
    }
}