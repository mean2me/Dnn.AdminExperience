import ActionTypes from "../constants/actionTypes/extensionsActionTypes";

export default function extensionsReducer(state = { 
    // TODO: pageDetailsFooterComponents: [],
    toolbarComponents: []
}, action) {

    switch (action.type) {
        case ActionTypes.REGISTER_TOOLBAR_COMPONENT:
            return { ...state,                
                toolbarComponents: [...state.toolbarComponents, action.data.component]
            };

        default:
            return state;
    }
}