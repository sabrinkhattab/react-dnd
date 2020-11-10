import React ,{ useEffect, useState } from 'react'
import {Grid} from "@material-ui/core"
import {DropTarget} from '..'

const Board = ()=>{

    return (
       
        <Grid container>
            <DropTarget columnName="new" >
            </DropTarget>
            <DropTarget columnName="staged" >        
            </DropTarget>
            <DropTarget columnName="won" >        
            </DropTarget>
        </Grid>
    )
}
export default Board