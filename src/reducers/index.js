import { combineReducers } from 'redux'
import SuperHeroesReducer from './super-heroes-reducer'

export default combineReducers({
  superHeroes: SuperHeroesReducer
})
