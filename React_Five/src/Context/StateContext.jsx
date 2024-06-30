import React, { createContext, useState } from 'react'

export const StateContext = createContext()

export const StateContextProvider = ({children}) => {
   
        const movieArray = [
            {id:1,name:"Doctor Strange",price:'50',img:"https://lumiere-a.akamaihd.net/v1/images/p_drstrangeinthemultiverseofmadness_245_476cabb1.jpeg"},
            {id:2,name:"Avenger EndGame",price:'90',img:"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"},
            {id:3,name:"Avenger InfinityWar",price:'40',img:"https://cdn.vox-cdn.com/thumbor/TAzotU1RnNkUJ7RwFtu7Rn1Ntcw=/0x0:1688x2500/1200x0/filters:focal(0x0:1688x2500):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11614195/InfinityWar5aabd55fed5fa.jpg"},
            {id:4,name:"Black Panther",price:'30',img:"https://lumiere-a.akamaihd.net/v1/images/p_blackpanther_19754_4ac13f07.jpeg?region=0%2C0%2C540%2C810"},
            {id:5,name:"Spider Home Coming",price:'60',img:"https://musicart.xboxlive.com/7/7abf5000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"},
            {id:6,name:"Iron-man vs Captain-America",price:'50',img:"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_.jpg"},
        ];
        const [movieList,setMovieList] = useState(movieArray);

        const name = "su su"
        const data = {movieList,setMovieList}
    
        return(
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}
