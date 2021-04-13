import counterReducer from '../features/CounterRedux/counterSlice';
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
    count: counterReducer,
    /* tên count có thể đặt thay đổi tùy ý n là state khi chưa gửi action lên và n sẽ thay đổi khi action nào đó thay đổi nó
     để khi sử dụng useSelector ta lấy state.name(vd count ở trên) sẽ cho ra state */
};
console.log(counterReducer);

const store = configureStore({
    reducer: rootReducer,
});

export default store;