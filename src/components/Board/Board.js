import React ,{ useEffect, useState } from 'react'
import {Grid} from "@material-ui/core"
import {DropTarget, Card} from '..'
import {useSelector, useDispatch } from "react-redux";
import {getCardsAction} from '../../Redux/actions'

const Board = ()=>{
    const dispatch = useDispatch();
    const cardsList = useSelector((state) => state.cardsInfo);
    const [cardsInfo, setCardsInfo] = useState([]);
    useEffect(() => {
        setCardsInfo(cardsList);
      }, [cardsList]);

      console.log('cardsInfo' ,cardsInfo)
    return (
       
        <Grid container>
            <DropTarget columnName="New">
                {
                    cardsList.newCards.map(card=>{
                        return <Card _id={card.id}/>
                    })
                }
            </DropTarget>
            <DropTarget columnName="Stage">
                {
                    cardsList.stagedCards.map(card=>{
                        return <Card _id={card.id}/>
                    })
                }            
            </DropTarget>
            <DropTarget columnName="Won">
            {
                    cardsList.wonCards.map(card=>{
                        return <Card _id={card.id}/>
                    })
            }            
            </DropTarget>
        </Grid>
    )
}
export default Board