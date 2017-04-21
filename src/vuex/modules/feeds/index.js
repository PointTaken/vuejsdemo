import * as getters from './getters';
import * as actions from './actions';

import { FETCH_FEEDS } from './mutation-types';

// initial state
const initialState = {  
    all: [ ]
}

// mutations
const mutations = {
  [FETCH_FEEDS] (state, feeds) {
    state.all = feeds
  },
}

export default {
  state: { ...initialState },
  getters,
  actions,
  mutations
}