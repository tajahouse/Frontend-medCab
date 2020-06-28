import { FETCH_STRAINS, FETCH_STRAINS_SUCCESS, FETCH_STRAINS_FAILURE } from "../actions";

const initialState = {
    strain: [],
    isFetching: false,
    error:''
}

function strainReducer( state = initialState, action ) {
    switch(action.type) {
        case FETCH_STRAINS:
                return{
                    ...state,
                    isFetching: true,
                    error: "",
                    strain:[]
                }
        case FETCH_STRAINS_SUCCESS:
                    return{
                        ...state,
                        error:'',
                        isFetching:false,
                        strain: action.payload
                }
        case FETCH_STRAINS_FAILURE:
                    return{
                        ...state,
                        error: action.payload,
                        isFetching:false,
                }
    
    default:
        return state;

}
}  

export default strainReducer;