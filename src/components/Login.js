import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
const Login = () => {
    return (<div className='login-main'>
        {/* <div className='LOGIN-NAV d-flex'>
            <div className='login-nav-button'>
                <button>MEN</button>
                <button>WOMEN</button>
                <button>KIDS</button>
                <button>HOME LIVING</button>
                <button>STUDIO</button>
            </div>
            <div claassName='nav-input d-flex' style={{border:'2px solid blue',width:'30rem',display:'flex'}}>
                <SearchIcon style={{
                    border: '1px solid #f5f5f6',
                    height: '2.7rem',
                    width: '2rem',
                    backgroundColor: '#f5f5f6'
                }} /><input style={{
                    width: '23rem', border: '1px solid #f5f5f6',
                    padding: '8px 10px 10px 10px', caretColor: '#ff2459',
                    backgroundColor: '#f5f5f6'
                }} type='search' placeholder='Search for products, brands and more' />
                <div>
                    <FavoriteBorderIcon />
                    <br/>
                    Wishlist
                </div>
                <div>
                    <ShoppingBagOutlinedIcon />
                    <br/>
                    Bag
                </div>
            </div>
        </div> */}



        <div className='card shadow' style={{ width: '27rem', backgroundColor: 'white', marginLeft: '29rem' }}>
            <img alt='anil' style={{ width: '26.9rem' }} src='https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/1/14/d63fc446-4087-4e07-b2dd-1d060368d2661642184399341-Banner_Login-page-400.png' />
            <div style={{ marginLeft: '2rem', width: '22rem' }}>
                <br />
                <h3>Login <span className='span-head-login '>or</span> Signup</h3>
                <br />
                <input style={{ width: '22rem', height: '2.5rem' }} type='search' className='form-control' placeholder='+91 | Mobile Number*' />
                <br />
                <p className='p-login-main'>By continuing, I agree to the <span className='span-login-main'>
                    Terms of Use</span> & <span className='span-login-main'>Privacy <br /> Policy</span></p>
                <br />
                <button className='button-login-main'>CONTINUE</button>
                <br />
                <br />
                <p className='p-login-main'>Have trouble in logging in? <span className='span-login-main'>
                    Get help</span></p>
                <br />
            </div>
        </div>

        {/* <Grid
            container
            align='center'
            justify='center'
            direction='column'>
            <Grid item >
                <Paper component={Box} elevation={20} square sx={{ width: '27rem', marginTop: '2rem' }}>
                    <img alt='anil' style={{ width: '27rem' }} src='https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/1/14/d63fc446-4087-4e07-b2dd-1d060368d2661642184399341-Banner_Login-page-400.png' />
                    <div>

                        <Typography align='left'>Login or Signup</Typography>
                    </div>
                </Paper>
            </Grid>
        </Grid> */}
    </div>
    )
}

export default Login