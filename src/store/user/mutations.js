export function setToken (state, newToken) {
  state.token = newToken
}

export function setDetail (state, newDetail) {
  state.detail = newDetail
}

export function logout (state) {
  state.token = null
  state.detail = null
}


