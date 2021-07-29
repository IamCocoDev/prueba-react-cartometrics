import {POST_PARCELS} from './Types.js'

const fn = (state, action) => {
  const {payload,type} = action;

  switch(type){
    case POST_PARCELS:
      return {
      ...state,
      BuyData: [...state.BuyData,payload]
    }
    default:
      return state;
  }
}
export default fn