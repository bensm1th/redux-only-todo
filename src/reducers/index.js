import { combineReducers } from 'redux';
import {  VisibilityFilters } from '../actions';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, PERSON} from '../actions'; 


const SHOW_ALL = VisibilityFilters.SHOW_ALL;

function visibilityFilter(state = SHOW_ALL, action) {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state    
    }
}

function todos(state = [], action) {
    
    switch(action.type) {
        case ADD_TODO:
            return [...state, { text: action.text, completed: false }]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {completed: !todo.completed})
                }
                return todo
            })    
            default:
                return state
    } 
}

function creator(state="Ben", action) {
    switch(action.type) {
        case PERSON:
            return action.person
        default:
            return state    
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos,
    creator
})

export default todoApp;
