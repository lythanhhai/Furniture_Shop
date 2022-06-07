import { combineReducers } from 'redux'
import showModalReducer from '../Reducer/showModalReducer'
import getIndexReducer from '../Reducer/getIndexReducer'
import showModalAddressReducer from '../Reducer/showModalAddressReducer'
import showModalProductReducer from '../Reducer/showModalProductReducer'
import getIdProductReducer from '../Reducer/getIdProductReducer'

const CombineReducers = combineReducers(
    {
        showModalReducer: showModalReducer,
        getIndexReducer: getIndexReducer,
        showModalAddressReducer: showModalAddressReducer,
        showModalProductReducer: showModalProductReducer,
        getIdProductReducer: getIdProductReducer,
    }
)

export default CombineReducers