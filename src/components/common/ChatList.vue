<template>
  ChatList
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import {ref} from "vue";

export default {
  name: 'ChatList',
  setup () {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const chats = ref([])

    const getChats = async () => {
      await store.dispatch('getMyChats')
    }

    getChats()

    return {
      store,
      router,
      route
    }
  }
}
</script>

<style scoped lang="scss">

</style>
