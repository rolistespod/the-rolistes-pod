import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';


const initialState = {
    showPopup: false
};


const setShowPopup = (state, action) => {
    return updateObject(state,{
        showPopup: action.showPopup
    });
};

const reducer = (state = initialState, action) => {
    
    switch (action.type){                   

        case actionTypes.SET_SHOW_POPUP:
            return setShowPopup(state, action); 

        default:
            return state;
    }
};

export default reducer;