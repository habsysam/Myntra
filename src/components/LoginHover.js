import { Paper, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { changeLoginHover } from '../redux/allSlice'

const LoginHover = (props) => {
    console.log('anil',props);
    const recivedData = useSelector(state => state)
    const dispatch = useDispatch()
    // console.log(recivedData);
    const data = recivedData.allData.login
    // console.log(data);
    const updateData = (data) => {
        setTimeout(() => {
            dispatch(changeLoginHover(data))
        }, 50)
    }
    const btnLog = () => {
        console.log('aa');
        props.history.push('/login')
    }

    return (
        <div>
            <Paper className='asddf' sx={{ width: '20rem', marginLeft: '60rem', marginTop: '-1rem' }} onMouseOver={() => { updateData(true) }} onMouseOut={() => { updateData(false) }}>

                <div style={{ borderBottom: '1px solid #eaeaec', padding: '1rem', height: '9rem' }}>
                    <Typography sx={{ color: 'black' }}>Welcome</Typography>
                    <span>To access account and manage orders</span>
                    <br /> <button className='btn-pap' onClick={() => { btnLog() }}>LOGIN/SIGNUP</button>
                    <br />
                    <br />
                </div>
                <div style={{ borderBottom: '1px solid #eaeaec', padding: '1rem', height: '9rem' }}>
                    <span className='sp-log'>Order</span>
                    <br />
                    <span className='sp-log'>Wishlist</span>
                    <br />
                    <span className='sp-log'>Gift Cards</span><br />
                    <span className='sp-log'>Contact Us</span><br />
                    <span className='sp-log'>Myntra Insider</span>
                </div>
                <div style={{ borderBottom: '1px solid #eaeaec', padding: '1rem', height: '9rem' }}>
                    <span className='sp-log'>   Myntra Credit</span>
                    <br />
                    <span className='sp-log'>Coupons</span>
                    <br />
                    <span className='sp-log'>Saved Cards</span><br />
                    <span className='sp-log'>Saved Adress</span>

                </div>
            </Paper>
        </div>
    )
}

export default withRouter(LoginHover)