import {api} from "boot/axios";

export async function getMyChats ({ commit }) {
  const { data } = await api.get('chats', {
    params: {
      sort: '-updatedAt'
    }
  })
  commit('setChats', data)
}
