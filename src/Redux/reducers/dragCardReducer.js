import {GET_CARDS ,DRAG_CARD} from '../actionsTypes'

const initialState = {
    cardsInfo : [
        {
            id :(Math.random() * 100).toFixed(0),
            status : 'new'
        },
        {
            id :(Math.random() * 100).toFixed(0),
            status : 'new'
        },
        {
            id :(Math.random() * 100).toFixed(0),
            status : 'staged'
        },
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

        case DRAG_CARD :
           console.log('helooo' , action.payload)
            return {
                ...state ,
                cardsInfo : state.cardsInfo.map(card =>{
                    if(card.id === action.payload.id){
                        card.status = action.payload.status
                    }
                    return card;
                })
            }

        default : 
         return initialState
   }
}
export default getCardsReducer;
