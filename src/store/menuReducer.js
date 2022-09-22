import {ADD_MENU} from "./action_values"
import burger from '../assets/burger.svg'
import Pizza from '../assets/pizza.svg'
import glass from '../assets/glass.svg'

const initialState = [
    {
        title : "Pizza",
        description : "The best pizza you can get, straight outta compton",
        selectImage : Pizza,
        variations : [
            { title : "Margherita Pizza", price : 10},
            { title : "Meaty treat", price : 15},
            { title : "Jumbo", price : 23}
        ]
    },
    {
        title : "Sex on beach",
        description : "The best sex you can get on beach ",
        selectImage : glass,
        variations : [
            { title : "Change this shit", price : 15},
            { title : "Chilled", price : 10},
            { title : "With ice", price : 23}
        ] 
    },{
        title : "Burger",
        description : "The best Meaty Burger you can get",
        selectImage : burger,
        variations : [
            { title : "Chicken Burger", price : 15},
            { title : "Beaf treat", price : 10},
            { title : "Vegies", price : 7}
        ]
    }
]

const reducer = function(state = initialState, action){
        switch(action.type){
            case ADD_MENU : 
            // we want to add to menu state
            return state.concat(action.value)
            break;
            default :
            return state;
        }
}

export default reducer;