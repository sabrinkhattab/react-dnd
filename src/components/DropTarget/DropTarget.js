import React from 'react'
import {Grid} from "@material-ui/core"
import "./DropTarget.css"
import DeleteIcon from '@material-ui/icons/Delete';
import {useDrop} from 'react-dnd'
import {ItemsTypes} from '../../utils/items'

const DropTarget =(props)=>{
    const [{isOver} , drop] = useDrop({
        accept : ItemsTypes.CARD,
        drop : (item , monitor)=> console.log('hello',props.columnName),
        collect :monitor =>({
            isOver : !!monitor.isOver()
        })

    })
    return (
        <Grid item lg={3}>
        <div className="column-wrapper">
            <Grid container direction="column">
                <Grid item>
                    <div className="column-header">
                        <Grid container justify="space-between">
                            <Grid item  style={{color :'#019cdf'}}>
                               <DeleteIcon /><span className="column-name">{props.columnName}</span>
                            </Grid>
                            <Grid item>
                                <span style={{fontWeight:'bold' , color : '#04954e'}}>990</span>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item>
                    <div className="column-body" ref={drop}>
                        <Grid container justify="center" >
                        {props.children}
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
        
    </Grid>
    )
}
export default DropTarget