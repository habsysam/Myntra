import { Grid, ImageList, ImageListItem, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import men1 from '../asset/men1.png'
import second from '../asset/second.png'
import third from '../asset/third.png'
import four from '../asset/four.png'
import five from '../asset/five.png'
import six from '../asset/six.png'
import button1 from '../asset/button1.png'
import button2 from '../asset/button2.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LoginHover from './LoginHover'

const Men = () => {
    const itemData = [
        {
            img: 'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/9ad28c6f-bb56-4d92-8d93-d81d698d1df41646716024394-stylishhandbags.jpg',
            title: 'Breakfast',
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/23985261-f875-4e4a-9835-113395f7030a1646908185973-unnamed--70-.jpg',
            title: 'Burger',
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/4/40c5c1d9-8f3d-42fc-9c52-0fefaf5fa56f1646397602527-Lotus-_Biotique.jpg',
            title: 'Camera',
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/01cfaa6a-ae61-4cf2-ab20-0d9c86493b991646716024362-comfyinneaerwear.jpg',
            title: 'Coffee',
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/23985261-f875-4e4a-9835-113395f7030a1646908185973-unnamed--70-.jpg',
            title: 'Hats',
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/4/40c5c1d9-8f3d-42fc-9c52-0fefaf5fa56f1646397602527-Lotus-_Biotique.jpg',
            title: 'Honey',
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/70a0268c-af3e-460a-8ee6-e33e937e44771646907588966-unnamed--68-.jpg',
            title: 'Basketball',
        },


    ];
    const itemData1 = [
        {
            img: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/146e1519-1e51-458e-ac86-0bcf2a960ed81646747314118-Kurtas-_-Kurta-Sets-Men.jpg',
            title: 'Basketball',
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/ee94691e-c0f7-480e-8a35-8e9e4eaef5e81646747314141-Loungewear--Men.jpg',
            title: 'Basketball',
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/98f1f5d8-4dea-4aa2-baa2-68776efd33cc1646747314195-Sandals.jpg',
            title: 'Basketball',
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/dc3440ce-29c4-4b73-8b63-7abc2719e1911646747314329-T-Shirts--Men-.jpg',
            title: 'Basketball',
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/dd45eb4a-5939-4a82-b6c5-6c8f383770591646747314042-Jeans--Men-.jpg',
            title: 'Basketball',
        },
    ]
    const itemData2 = [
        {
            img: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/e55f307f-08eb-4c9c-8ceb-f44650e7806f1646747314133-Lipsticks.jpg',
            title: 'Basketball',
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/3e707144-97c7-43b0-9015-185eecf8eeb91646747314294-Trackpants-Men.jpg',
            title: 'Basketball',
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/9313ef41-6ced-4a75-a351-6420610ff6c51646747313913-Benies-_-Caps.jpg',
            title: 'Basketball',
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/94927952-8221-4c49-b99d-d214d5b786701646747314180-Outdoor-Masks-_-Face-shields.jpg',
            title: 'Basketball',
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/d5cae251-6b94-4d88-ba2a-e4ce4e8540d61646747314211-Scarves-_-Mufflers.jpg',
            title: 'Basketball',
        },
    ]
    const itemData3 = [
        {
            img: 'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/7/52c6568a-a429-444b-816e-9a0f48a568a21646656013389-Vero_Moda.jpg',
            title: 'Basketball',
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/7/a32dfebc-612e-4d8f-a63a-854e034285a31646656013011-ONLY.jpg',
            title: 'Basketball',
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/7/1b6a6dc5-bc7f-4e5d-af07-6511673f7ed81646657033472-AND.jpg',
            title: 'Basketball',
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/c8c9b567-a82f-469f-8240-9a7bb37cec221646916169322-1.jpg',
            title: 'Basketball',
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/7/95a16446-83e7-48c5-94af-7d4896e165641646656012880-M-S_1.jpg',
            title: 'Basketball',
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/7/ce0edb68-fe42-4c88-b826-346dbd6a00e51646657033479-Biba.jpg',
            title: 'Basketball',
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/7/86957f62-7eba-47c0-9774-bb45df6642611646656013085-Puma_kids.jpg',
            title: 'Basketball',
        },
    ]
    const itemData4 = [
        {
            img: 'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/7/f3439b22-2810-4ea2-895b-00291ea9cf191646663284762-Red_Tape.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/7/cc0c3f56-5df6-4810-8295-612fbfac71ab1646663284203-Bata.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/7/47c1eed0-2d8f-4f59-8c86-de272a0067b71646663284243-Campus.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/7/c8b4922d-b478-4d7d-8706-95d198e90e8a1646663284772-Reebok_.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/7/5f7f5ec6-f3cc-4d89-92e2-d15abd593b4b1646663284665-noise.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/7/537fba63-3c73-4a9b-9a03-88ca2d1bd2f01646663284822-Safari.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/7/873e7ab0-b56d-4a43-a881-3f9ac4ffc3141646663284377-Fire-boltt_.jpg',
            title: 'Basketball'
        },
    ]
    const itemData5 = [
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/3270a211-a2c4-4f9c-9aaa-c71547e5c4011646854113994-Spring-refresh_DK_02.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/12ffc289-194c-4868-8b85-e37d4fe5dc511646854114003-Spring-refresh_DK_03.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/f8fafd54-ca51-4ff4-8973-47efec8196411646854114009-Spring-refresh_DK_04.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/c81ac082-fdb4-46f5-a3f7-c8e392c038b41646854114015-Spring-refresh_DK_05.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/173a20e6-4bc0-4b4e-9130-fdbdce236bac1646854114022-Spring-refresh_DK_06.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/a9c14d25-d2f9-438d-a666-fdcd5cc9d0c81646854114029-Spring-refresh_DK_07.jpg',
            title: 'Basketball'
        },
    ]
    const itemData6 = [
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/01a3004a-ab53-4d90-b988-21f5461420da1646854114036-Spring-refresh_DK_08.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/6595f460-77d6-4189-85a5-6e899e4e25bf1646854114042-Spring-refresh_DK_09.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/c95616d7-d623-46f2-ae03-71716cbc3f1a1646854114049-Spring-refresh_DK_10.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/028f9e3c-1350-4ff4-b2fe-6cb68edc9fde1646854114056-Spring-refresh_DK_11.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/a7e68e11-3b9b-4e3e-801e-c59a995967431646854114064-Spring-refresh_DK_12.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/c2581042-9b1b-4338-8bdf-1b5f70c772031646854114071-Spring-refresh_DK_13.jpg',
            title: 'Basketball'
        },
    ]
    const itemData7 = [
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/afd8d149-a6ff-431c-9e83-c994ebcd39481646854114077-Spring-refresh_DK_14.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/0239518d-918c-4f6f-8d33-3f054b574a1c1646854114083-Spring-refresh_DK_15.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/9e523f97-43cf-4c18-9527-15b83982745c1646854114091-Spring-refresh_DK_16.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/958d1c59-d92d-4639-9fc9-3c4827d885bc1646854114099-Spring-refresh_DK_17.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/f7dba8a6-bf2d-4795-8fb9-4c4a25f4cf631646854114106-Spring-refresh_DK_18.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/fe70bf3d-5786-41ba-bd18-c368db266b761646854114113-Spring-refresh_DK_19.jpg',
            title: 'Basketball'
        },
    ]
    const itemData8 = [
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/32bc6378-95aa-407c-a105-c4c57e23a6b01646854114121-Spring-refresh_DK_20.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/34b0c6f8-e9ab-4073-aa90-234ae362884f1646854114129-Spring-refresh_DK_21.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/35d81184-7d83-4593-a265-b9d3558f4aaa1646854114136-Spring-refresh_DK_22.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/8020d76e-fea7-40fe-a4cb-8f3adf7a67b21646854114143-Spring-refresh_DK_23.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/56560e34-2221-442b-a914-9b0eb13faf171646854114151-Spring-refresh_DK_24.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/f6bc600a-6fe7-446c-9ad4-30aba0db83611646854114158-Spring-refresh_DK_25.jpg',
            title: 'Basketball'
        },
    ]
    const itemData9 = [
        //   {
        //     img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/f6bc600a-6fe7-446c-9ad4-30aba0db83611646854114158-Spring-refresh_DK_25.jpg',
        //     title: 'Basketball'  
        //   },
        //   {
        //     img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/1f51dda2-8928-4b4c-a2ff-b7fb781e100c1646854114171-Spring-refresh_DK_27.jpg',
        //     title: 'Basketball'  
        //   },
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/afd8d149-a6ff-431c-9e83-c994ebcd39481646854114077-Spring-refresh_DK_14.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/0239518d-918c-4f6f-8d33-3f054b574a1c1646854114083-Spring-refresh_DK_15.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/f533cd9c-4547-48c1-916a-b8109c8699f31646854114179-Spring-refresh_DK_28.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/fb7851d1-8986-4eec-b492-457c8d15be9c1646854114186-Spring-refresh_DK_29.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/102bd85d-0e19-4fa9-acab-543a3681184d1646854114195-Spring-refresh_DK_30.jpg',
            title: 'Basketball'
        },
        {
            img: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/70c1bddc-7613-4950-bfe4-964901a65bb11646854114202-Spring-refresh_DK_31.jpg',
            title: 'Basketball'
        },
    ]
    const itemData10 = [
        {
            img: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/10/29da8e65-7cdc-4c76-b487-041a8712a32b1646854114210-Spring-refresh_DK_32.jpg',
            title: 'Basketball'
        },
    ]
    return (
        <div>
            <Box sx={{ position: 'relative' }}>
                {/* <LoginHover/> */}
                <Grid container>
                    <Grid item xs={4}>
                        <Toolbar>
                            <img src={men1} alt='logo' style={{ cursor: 'pointer' }} />
                            <p class="FreeShippingBanner-sidebar-content">FLAT ₹400 OFF</p>
                        </Toolbar>
                        <Toolbar>

                            <img src={second} alt='logo' style={{ cursor: 'pointer', width: '82rem' }} />
                        </Toolbar>
                        <ImageList sx={{ width: '84rem', height: '16rem' }} cols={7} rowHeight={164}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                        style={{ cursor: 'pointer' }}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                        <img src={third} alt='logo' style={{ cursor: 'pointer', width: '82rem' }} />
                        <ImageList sx={{ width: '84rem', height: '20rem' }} cols={5} >
                            {itemData1.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                        style={{ cursor: 'pointer' }}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                        <ImageList sx={{ width: '84rem', height: '20rem' }} cols={5} >
                            {itemData2.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                        style={{ cursor: 'pointer' }}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                        <img src={four} alt='logo' style={{ cursor: 'pointer', width: '82rem' }} />
                        <ImageList sx={{ width: '84rem', height: '20rem' }} cols={7} >
                            {itemData3.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                        style={{ cursor: 'pointer' }}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>



                        <img src={five} alt='logo' style={{ cursor: 'pointer', width: '82rem' }} />
                        <ImageList sx={{ width: '84rem', height: '20rem' }} cols={7} >
                            {itemData4.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                        style={{ cursor: 'pointer' }}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                        <img src={six} alt='logo' style={{ cursor: 'pointer', width: '82rem' }} />

                        <ImageList sx={{ width: '84rem', height: '20rem' }} cols={6} >
                            {itemData5.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                        style={{ cursor: 'pointer' }}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                        <ImageList sx={{ width: '84rem', height: '20rem' }} cols={6} >
                            {itemData6.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                        style={{ cursor: 'pointer' }}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                        <ImageList sx={{ width: '84rem', height: '20rem' }} cols={6} >
                            {itemData7.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                        style={{ cursor: 'pointer' }}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                        <ImageList sx={{ width: '84rem', height: '20rem' }} cols={6} >
                            {itemData8.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                        style={{ cursor: 'pointer' }}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                        <ImageList sx={{ width: '84rem', height: '20rem' }} cols={6} >
                            {itemData9.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                        style={{ cursor: 'pointer' }}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                        <ImageList sx={{ width: '84rem', height: '20rem' }} cols={1} >
                            {itemData10.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                        style={{ cursor: 'pointer' }}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                        <Box sx={{ width: '84rem', backgroundColor: '#FAFBFC' }} p={2}>
                            <Box sx={{ width: '60rem', marginLeft: '10rem' }}>
                                <Grid container>
                                    <Grid item xs={2}>

                                        <Typography variant='subtitle2' sx={{ fontSize: '0.8rem', cursor: 'pointer' }}>ONLINE SHOPPING</Typography>
                                        <br />
                                        <Typography variant='subtitle2' sx={{ fontSize: '0.9rem', color: '#696b79', cursor: 'pointer' }} p={0.1}>Men</Typography>
                                        <Typography variant='subtitle2' sx={{ fontSize: '0.9rem', color: '#696b79', cursor: 'pointer' }} p={0.1}>Women</Typography>
                                        <Typography variant='subtitle2' sx={{ fontSize: '0.9rem', color: '#696b79', cursor: 'pointer' }} p={0.1}>Kids</Typography>
                                        <Typography variant='subtitle2' sx={{ fontSize: '0.9rem', color: '#696b79', cursor: 'pointer' }} p={0.1}>Home & Living</Typography>
                                        <Typography variant='subtitle2' sx={{ fontSize: '0.9rem', color: '#696b79', cursor: 'pointer' }} p={0.1}>Beauty</Typography>
                                        <Typography variant='subtitle2' sx={{ fontSize: '0.9rem', color: '#696b79', cursor: 'pointer' }} p={0.1}>Gift Cards</Typography>
                                        <Typography variant='subtitle2' sx={{ fontSize: '0.9rem', color: '#696b79', cursor: 'pointer' }} p={0.1}>Myntra Insider</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant='subtitle2' sx={{ fontSize: '0.8rem', cursor: 'pointer' }}>USEFUL LINKS</Typography>
                                        <br />
                                        <Typography variant='subtitle2' sx={{ fontSize: '0.9rem', color: '#696b79', cursor: 'pointer' }} p={0.1}>Contact Us</Typography>
                                        <Typography variant='subtitle2' sx={{ fontSize: '0.9rem', color: '#696b79', cursor: 'pointer' }} p={0.1}>FAQ</Typography>
                                        <Typography variant='subtitle2' sx={{ fontSize: '0.9rem', color: '#696b79', cursor: 'pointer' }} p={0.1}>T&C</Typography>
                                        <Typography variant='subtitle2' sx={{ fontSize: '0.9rem', color: '#696b79', cursor: 'pointer' }} p={0.1}>Terms Of Use</Typography>
                                        <Typography variant='subtitle2' sx={{ fontSize: '0.9rem', color: '#696b79', cursor: 'pointer' }} p={0.1}>Track Order</Typography>
                                        <Typography variant='subtitle2' sx={{ fontSize: '0.9rem', color: '#696b79', cursor: 'pointer' }} p={0.1}>Shipping</Typography>
                                        <Typography variant='subtitle2' sx={{ fontSize: '0.9rem', color: '#696b79', cursor: 'pointer' }} p={0.1}>Cancellation</Typography>
                                        <Typography variant='subtitle2' sx={{ fontSize: '0.9rem', color: '#696b79', cursor: 'pointer' }} p={0.1}>Returns</Typography>
                                        <Typography variant='subtitle2' sx={{ fontSize: '0.9rem', color: '#696b79', cursor: 'pointer' }} p={0.1}>Whitehat</Typography>
                                        <Typography variant='subtitle2' sx={{ fontSize: '0.9rem', color: '#696b79', cursor: 'pointer' }} p={0.1}>Blog</Typography>
                                        <Typography variant='subtitle2' sx={{ fontSize: '0.9rem', color: '#696b79', cursor: 'pointer' }} p={0.1}>Careers</Typography>
                                        <Typography variant='subtitle2' sx={{ fontSize: '0.9rem', color: '#696b79', cursor: 'pointer' }} p={0.1}>Privacy Policy</Typography>
                                        <Typography variant='subtitle2' sx={{ fontSize: '0.9rem', color: '#696b79', cursor: 'pointer' }} p={0.1}>Site Map</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant='subtitle2' sx={{ fontSize: '0.8rem', cursor: 'pointer' }}> EXPERIENCE MYNTRA APP ON MOBILE </Typography>
                                        <br />
                                        <img src={button1} alt='logo' style={{ cursor: 'pointer', width: '8rem' }} /><img src={button2} alt='logo' style={{ cursor: 'pointer', width: '8rem' }} />
                                        <br />
                                        <br />
                                        <Typography variant='subtitle2' sx={{ fontSize: '0.8rem', cursor: 'pointer' }}>  KEEP IN TOUCH </Typography>
                                        <FacebookIcon sx={{ color: '#696b79' }} /><TwitterIcon sx={{ color: '#696b79' }} /><YouTubeIcon sx={{ color: '#696b79' }} /><InstagramIcon sx={{ color: '#696b79' }} />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className='d-flex'>
                                            <div >
                                                <img style={{ width: '3.5rem', marginTop: '0.2rem' }} alt='anil' src='https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png' />
                                            </div>
                                            <div style={{ marginLeft: '0.7rem' }}>
                                                <Typography variant='h6' sx={{ fontSize: '1rem', cursor: 'pointer' }}>100% ORIGINAL <span className='span-footer-home'>guarantee</span></Typography>
                                                <span className='span-footer-home'>for all products at myntra.com</span>
                                            </div>
                                        </div>
                                        <br />

                                        <div className='d-flex'>
                                            <div>
                                                <img style={{ width: '3.5rem', marginTop: '0.2rem' }} alt='anil' src='https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png' />
                                            </div>

                                            <div style={{ marginLeft: '0.7rem' }}>
                                                <Typography variant='h6' sx={{ fontSize: '1rem', cursor: 'pointer' }}>Return within 30days  <span className='span-footer-home'>of</span></Typography>
                                                <span className='span-footer-home'>receiving your order</span>
                                            </div>
                                        </div>
                                    </Grid>

                                </Grid>
                            </Box>
                        </Box>


                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Men