const INITIAL_STATE = {
    face: '¯\(°_o)/¯'
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CONFUSED':
            return {...state, face: action.payload};
        case 'HAPPY':
            return {...state, face: action.payload};
        case 'ANGRY':
            return {...state, face: action.payload};
        case 'SAD':
            return {...state, face: action.payload};
        case 'SURPRISED':
            return {...state, face: action.payload};
        default:
            return state;
    }
}



