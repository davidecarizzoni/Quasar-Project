import {authApi} from "boot/axios";

export async function login (state, payload) {
  console.log({state})
  const { email, password } = payload
  const { data } = await authApi.post('auth', undefined, {
    headers: {
      Authorization: 'Basic ' + btoa(email + ':' + password)
    }
  })
  console.log({data})
  //TODO: mutations to set state
  state.commit('setToken', data.token)
  state.commit('setDetail', data.user)
}
