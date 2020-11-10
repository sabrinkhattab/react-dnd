import {DRAG_CARD } from '../actionsTypes'

  const dragCard =(card_id , new_status)=>({
    type : DRAG_CARD ,
    payload : {id:card_id , status :new_status}
})



export default dragCard;

