import React from 'react'
import {Grid , Card} from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete';
import './Card.css'
import {CardForm} from './components'
import {useDrag} from 'react-dnd'
import {ItemsTypes} from '../../utils/items'

const DragCard =(props)=>{
    const [{isDragging} , drag] = useDrag({
        item :{
            type:ItemsTypes.CARD,
            id : props._id
           
        },
        collect : monitor=>({
            isDragging : !!monitor.isDragging()
        })
    })
    return(
            <Card className="card-wrapper" ref={drag}>
                <Grid item>
            <Grid container direction="column">
                <Grid item>
                    <div className="card-heading">
                        <Grid container justify="space-between">
                            <Grid item>
                                <span className="heading-name">Name</span>
                            </Grid>
                            <Grid item>
                                <Grid container justify="center" alignItems="center" spacing={1}>
                                    <Grid item>
                                      <span className="heading-number">8946</span>
                                    </Grid>
                                    <Grid item>
                                      <DeleteIcon className="delete-icon"/>
                                    </Grid>
                                </Grid>
                                
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item>
                    <CardForm />
                </Grid>
            </Grid>
            </Grid>
            </Card>
    )
}

export default DragCard;