const stateDefault = {
    example: 'a',
    sinhViens:[]
}


export const accountReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "TEST":
            return {...state, example: action.payload}
        case 'ADD':{
            return {...state, sinhViens: [...state.sinhViens, action.payload]}    
        }
        case 'REMOVE':{
            return {...state, sinhViens: [...state.sinhViens].filter(sv => sv.id !== action.payload)}   
        }
        case 'UPDATE':{
            return {...state, sinhViens: [...state.sinhViens].map(sv => {
                if(sv.id === action.payload.id) {
                    return action.payload
                }

                return sv
            })}   
        }
        
        default: return state;
    }
}