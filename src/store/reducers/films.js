export default (state = [], action) => {

    const { payload, type } = action;
    switch(type) {
        case 'SET_FILMS': 
            return payload
        default: return state;
    }
}