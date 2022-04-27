import { combineReducers } from 'redux'
import showModalReducer from '../Reducer/showModalReducer'
import getIndexReducer from '../Reducer/getIndexReducer'

const CombineReducers = combineReducers(
    {
        showModalReducer: showModalReducer,
        getIndexReducer: getIndexReducer,
    }
)

export default CombineReducers