import * as types from './types'
import * as props from './props'

export default (state = props, action) => {
    switch (action.type){
        case types.FETCH_PRODUCTS:
            return {
                ...state,
                product: action.payload
            }
        default:
            return{
                ...state
            }
    }
}