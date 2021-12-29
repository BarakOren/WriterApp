const INITIAL_STATE = {
    category: "outline",
    pressure: "highPressure",
    outline: "#c60040",
    fill: "#fee100",
    background: "#46559a",
    powerline: "#000000",
    highlights: "#ffffff",
    saved: []
}

function removeSchemeFunction(saved, selectedItem){
    const itemToRemove = saved.find(item => item === selectedItem);
    const newArray = saved.filter((item) => item !== itemToRemove);
    return newArray;
}


export const webVersionReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "SELECT_CATEGORY":
            return {
                ...state,
                category: action.payload
            }
        case "SELECT_PRESSURE":
            window.scrollTo({top: 0, behavior: 'smooth'});
            return {
                ...state,
                pressure: action.payload
            }
        case "SELECT_BACKGROUND":
            return{
                ...state,
                background: action.payload
            }
        case "SELECT_OUTLINE":
            return{
                ...state,
                outline: action.payload
            }
        case "SELECT_HIGHLIGHTS":
            return{
                ...state,
                highlights: action.payload
            }
        case "SELECT_POWERLINE":
            return{
                ...state,
                powerline: action.payload
            }
        case "SELECT_FILL":
            return{
                ...state,
                fill: action.payload
            }
        case "SAVE_SCHEME": 
            return{
                ...state,
                saved: [...state.saved, action.payload]
            }
        case "REMOVE_SCHEME":
            return {
                ...state,
                saved: removeSchemeFunction(state.saved, action.payload)
            }
        default:
            return state;
    }
}