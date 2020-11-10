import {GET_CARDS} from '../actionsTypes'

const initialState = {
    newCards : [
        {
            id :(Math.random() * 100).toFixed(0),
            status : 'new'
        },
        {
            id :(Math.random() * 100).toFixed(0),
            status : 'new'
        }
    ],
    stagedCards : [
        {
            id :(Math.random() * 100).toFixed(0),
            status : 'staged'
        }
    ],
    wonCards : [
        {
            id :(Math.random() * 100).toFixed(0),
            status : 'won'
        }
    ]
}

const getCardsReducer =(state = initialState , action)=>{
   switch(action.type){
       case GET_CARDS :
           return state

        default : 
         return initialState
   }
}
export default getCardsReducer;
