export default (state = [], action) => {

    const { payload, type } = action;
    switch(type) {
        case 'ADD_SPECIES': 
            return [ ...state, ...payload]
        default: return state;
    }
}