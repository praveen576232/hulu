import React from 'react'
import './Header.css'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FlashOnIcon from '@material-ui/icons/FlashOn';
function Header() {
    return (
        <div className="header">

            <div className="header_icon">
                <div className="icon_and_name header_name_show_click">
                    <HomeIcon></HomeIcon>
                    <p>Home</p>
                </div>
                <div className="icon_and_name">
                    <FlashOnIcon></FlashOnIcon>
                    <p>Tranding</p>
                </div>
                <div className="icon_and_name">
                    <VideoLibraryIcon></VideoLibraryIcon>
                    <p>Collections</p>
                </div>
                <div className="icon_and_name">
                    <SearchIcon></SearchIcon>
                    <p>serach</p>
                </div>
                <div className="icon_and_name">
                    <LiveTvIcon></LiveTvIcon>
                    <p>verified</p>
                </div>
                <div className="icon_and_name">
                    <PersonOutlineIcon></PersonOutlineIcon>
                    <p>Account</p>
                </div>
            </div>
            <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" alt="hulu_logo"></img>

        </div>
    )
}

export default Header
