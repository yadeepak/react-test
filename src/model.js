import { action } from "easy-peasy";
export default {
  value: {},
  //Actions
  sendData: action((state,payload) => {
    state.value = state.payload;
  }),
};
