import React from 'react'

const FavoriteContext = React.createContext({
    favoriteCountry:[],
    updateFavoriteCountry: (id) => null
})


export const FavoriteProvider = FavoriteContext.Provider

export default FavoriteContext