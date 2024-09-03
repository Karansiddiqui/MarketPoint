import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

export const ProductReviewCard = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                    <Box>
                        <Avatar className='text-white' sx={{width:56, height:56, bgcolor:"#9155fd"}}>
                            R
                        </Avatar>
                    </Box>
            </Grid>

            <Grid item xs={9}>
                    <div>
                        <p className='font-semibold text-lg'>Raam</p>
                        <p className='opacity-70'>April 5, 2024</p>
                    </div>
                <Rating value={4.5} name='hlf-rating' readOnly precision={0.5}/>
                <p>nice product, i love this shirt</p>
            </Grid>


        </Grid>
    </div>
  )
}
