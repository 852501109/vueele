/**
 * Create By Ding on  2018/6/28
 */

import {
    ADD_ITEMNUM
} from './mutation-types'

const mutations = {
    [ADD_ITEMNUM](state,num){
        state.itemNum += num;
    }
};

export default mutations;
