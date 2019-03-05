import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        { title: 'ASTROTHUNDER', duration: '2:22' },
        { title: 'Faucet Failure', duration: '2:25' },
        { title: 'COFFEE BEAN', duration: '3:29' },
        { title: 'a lot', duration: '4:48' }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})