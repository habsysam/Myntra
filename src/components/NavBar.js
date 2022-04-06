import { AppBar, Button, Grid, Paper, TextField, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import React, { useState } from 'react'
import logo from '../asset/logo.jpeg'
import LoginHover from './LoginHover'
import { useDispatch, useSelector } from 'react-redux';
import { changeLoginHover } from '../redux/allSlice';
import { withRouter } from 'react-router-dom';

const NavBar = (props) => {
    const [profileModal, setProfileModal] = useState(false)
    const profileBtn = (t) => {
        setProfileModal(t)   
    }
    const recivedData=useSelector(state=>state)
    const dispatch=useDispatch()
// console.log(recivedData);
const data=recivedData.allData.login

const updateData=(data)=>{
    setTimeout(()=>{
        dispatch(changeLoginHover(data))
    },50)
    
}
const menBtn=()=>{
    props.history.push('/men')
}
const womenBtn=()=>{
    props.history.push('/women')
}
const homelivingBtn=()=>{
    props.history.push('/homeliving')
}
    return (
        <div>
            <Box sx={{position:'relative'}}>
                <AppBar position="sticky" sx={{ backgroundColor: 'white' }}>
                    <Toolbar>

                        <img src={logo} alt='logo' style={{ width: '4rem',cursor:'pointer' }}onClick={()=>{props.history.push('/')}} />
                        <Button onClick={()=>{menBtn()}} sx={{ color: 'black', fontWeight: 'bold', padding: '1.5rem' }} >Men</Button>
                        <Button onClick={()=>{womenBtn()}} sx={{ color: 'black', fontWeight: 'bold', padding: '1.5rem' }}>Female</Button>
                        <Button  sx={{ color: 'black', fontWeight: 'bold', padding: '1.5rem' }} >Kids</Button>
                        <Button onClick={()=>{homelivingBtn()}} sx={{ color: 'black', fontWeight: 'bold', padding: '1.5rem' }} >Home & living</Button>
                        <Button sx={{ color: 'black', fontWeight: 'bold', padding: '1.5rem' }} >Beuity</Button>
                        <Button sx={{ color: 'black', fontWeight: 'bold', padding: '1.5rem' }} >Studio</Button>
                        <div className='search' >
                            <TextField size='small'
                                placeholder='  Search for Produtcs, brands and more'
                                sx={{ width: '160%' }}
                            />
                            <div className='searchButton'>
                                <SearchIcon sx={{ color: 'black' }} />
                            </div>
                        </div>
                        {/* align='center' justify='center' direction='row' */}
                        <Box sx={{ width: '13rem', marginLeft: '12rem' }}>
                            <Grid container>
                                <Grid item xs={4}>
                                    <PersonOutlineIcon sx={{ color: 'black' }} />
                                    <Typography onMouseOut ={() => {updateData(false)}} onMouseOver={() => {dispatch(changeLoginHover(true)) }} sx={{ color: 'black', marginTop: '-3%', marginLeft: '-13%', cursor: 'pointer' }}>Profile</Typography>


                                </Grid>
                                <Grid item xs={4}>
                                    <FavoriteBorderIcon sx={{ color: 'black' }} />
                                    <Typography sx={{ color: 'black', marginTop: '-3%', marginLeft: '-17%', cursor: 'pointer' }}>Wishlist</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <WorkOutlineIcon sx={{ color: 'black' }} />
                                    <Typography sx={{ color: 'black', marginTop: '-3%', marginLeft: '-2%', cursor: 'pointer' }}>Bag</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Toolbar>
                </AppBar>
                {data && <LoginHover />}

            </Box>
        </div>
    )
}

export default withRouter(NavBar)