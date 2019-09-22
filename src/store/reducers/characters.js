export default (state = [], action) => {

    const { payload, type } = action;

    switch(type) {
        case 'ADD_CHARACTERS': 
            return [ ...state, ...payload]
        default: return state;
    }
}