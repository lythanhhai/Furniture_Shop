import { combineReducers } from 'redux'
import showModalReducer from '../Reducer/showModalReducer'

const CombineReducers = combineReducers(
    {
        showModalReducer: showModalReducer
    }
)

export default CombineReducers