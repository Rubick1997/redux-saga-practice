import { call, put, takeEvery } from "@redux-saga/core/effects";
import { select } from "redux-saga/effects";


export const getMap = (state) => state.users.fetchMap;

const getApi = (map) => {
  return fetch(`https://jsonplaceholder.typicode.com/${map}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
};

function* fetchUsers(action) {
  try {
    const map = yield select(getMap);
    const users = yield call(getApi, map);
    yield put({ type: "GET_USERS_SUCCESS", users: users });
  } catch (error) {
    yield put({ type: "GET_USERS_FAILED", message: error.message });
  }
}

function* userSaga() {
  yield takeEvery("GET_USERS_REQUESTED", fetchUsers);
}

export default userSaga;
