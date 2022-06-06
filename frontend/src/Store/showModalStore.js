import { combineReducers } from 'redux'
import showModalReducer from '../Reducer/showModalReducer'
import getIndexReducer from '../Reducer/getIndexReducer'
import showModalAddressReducer from '../Reducer/showModalAddressReducer'
import showModalProductReducer from '../Reducer/showModalProductReducer'

const CombineReducers = combineReducers(
    {
        showModalReducer: showModalReducer,
        getIndexReducer: getIndexReducer,
        showModalAddressReducer: showModalAddressReducer,
        showModalProductReducer: showModalProductReducer,
    }
)

export default CombineReducers