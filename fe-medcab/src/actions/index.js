import axios from 'axios';

export const FETCH_STRAINS = 'FETCH_STRAIN';
export const FETCH_STRAINS_SUCCESS = 'FETCH_STRAIN_SUCCESS';
export const FETCH_STRAINS_FAILURE = 'FETCH_STRAIN_FAILURE';

export const getStrains = () => {
    return dispatch =>{
        dispatch({
            type: FETCH_STRAINS
        });

        axios
        .get('https://medcab-backend-test.herokuapp.com/api/patients') 
        .then ( res => {
            dispatch(
                { type: FETCH_STRAINS_SUCCESS, payload: res.data}
                    )
                        }
              )
        .catch(err => {
            console.log("Nope", err);
            dispatch({ type: FETCH_STRAINS_FAILURE, payload: err})
        })
    }
}
