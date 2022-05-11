import {combineReducers} from 'redux'

import product from './component/product/reducer'

 const appReducer = combineReducers({
    product
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer