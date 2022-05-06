import { combineReducers } from 'redux'
import showModalReducer from '../Reducer/showModalReducer'
import getIndexReducer from '../Reducer/getIndexReducer'
import showModalAddressReducer from '../Reducer/showModalAddressReducer'

const CombineReducers = combineReducers(
    {
        showModalReducer: showModalReducer,
        getIndexReducer: getIndexReducer,
        showModalAddressReducer: showModalAddressReducer,
    }
)

export default CombineReducers