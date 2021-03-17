import React from 'react'
import './Nav.css'
import request from './request'
function Nav({setselectedaaoption}) {
    return (
        <div className="nav">
            <h2 onClick={()=>setselectedaaoption(request.fetchTrending)}>Treanding</h2>
            <h2 onClick={()=>setselectedaaoption(request.feachTopRated)}>Top Rated</h2>
            <h2 onClick={()=>setselectedaaoption(request.feachActionMovies)}>Action</h2>
            <h2 onClick={()=>setselectedaaoption(request.feachComedyMovies)}>Comedy</h2>
            <h2 onClick={()=>setselectedaaoption(request.feachHororMovie)}>Horror</h2>
            <h2 onClick={()=>setselectedaaoption(request.feachMistery)}>Mystery</h2>
            <h2 onClick={()=>setselectedaaoption(request.feachRomanceMovie)}>Romance</h2>         
            <h2 onClick={()=>setselectedaaoption(request.feachScifi)}>Sci-fi</h2>
            <h2 onClick={()=>setselectedaaoption(request.feachWestern)}>Western</h2>
            <h2 onClick={()=>setselectedaaoption(request.feachAnimation)}>Animation</h2>
            <h2 onClick={()=>setselectedaaoption(request.feachTv)}>Tv Movie</h2>

        </div>
    )
}

export default Nav
