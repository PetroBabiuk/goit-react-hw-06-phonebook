import { combineReducers } from "redux";
import types from "./types";

const contacts = (state = [], { type, payload }) => {
    switch (type) {
        case types.ADD:
            const foundNames = state.map(({name}) => name.toLocaleLowerCase());
            const lowerName = payload.name.toLocaleLowerCase();
            if(foundNames.includes(lowerName)){
                alert(`${payload.name} is already in contacts`);
                return state;
            }
            return [payload, ...state];
        
        case types.DELETE:
            return state.filter(({ id }) => id !== payload);
        
        default:
            return state;
    }
}

const filter = (state = '', {type, payload}) => {
    switch (type) {
        case types.CHANGE_FILTER:
            return payload;
    
        default:
            return state;
    }
}

export default combineReducers({
    contacts,
    filter,
});