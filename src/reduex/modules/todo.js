// src/modules/counter.js
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";
const GET_DETAIL = "GET_DETAIL";
// Action Creator
// Todo를 추가하는 action creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

// Todo를 지우는 action creator
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

// Todo를 isDone를 변경하는 action creator
export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
  };
};
export const get_detail = (payload) => {
  return {
    type: GET_DETAIL,
    payload,
  };
};

// 초기 상태값
const initialState = {
  todo: [
    { id: "0", title: "Test1", content: "Test", working: true },
    { id: "1", title: "Test2", content: "Test", working: true },
  ],
};

// 리듀서 : 변화를 일으키는 함수
const todo = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
        message: "In Add",
      };
    case DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter((list) => list.id !== action.payload),
        message: "end",
      };
    case TOGGLE_STATUS_TODO:
      return {
        message: "status",
        ...state,
        todo: state.todo.map((todo, index) => {
          if (action.payload === index) {
            return { ...todo, working: !todo.working };
          } else return { ...todo, id: index };
        }),
      };

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todo;
