import * as Types from '../action-types/userInfo';
//actionCreator  一个函数
export function update(data) {
    return{
        type:Types.UPDATE_CITY,
        data
    }
}