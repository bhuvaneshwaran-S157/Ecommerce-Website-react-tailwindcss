import React, { act } from 'react'

export const initialActive = "Home" ;

export const NavReducer = (state, action) => {

    switch (action.type) {
        case 'SET_ACTIVE':
            return action.payload;
        default:
            return state;
    }

}

