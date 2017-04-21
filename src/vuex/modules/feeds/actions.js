import axios from 'axios'

import { FETCH_FEEDS } from './mutation-types'

export function fetchFeeds ({ commit }) {
    console.log("actions.js");
    return axios.get('http://localhost:3000/feeds')
        .then((response) => {    
            
            console.log("axios done");    
            commit(FETCH_FEEDS, response.data)
        } )
}