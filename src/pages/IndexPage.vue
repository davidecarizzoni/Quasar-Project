<template>
  <q-page class="flex flex-center">
    <div class="row full-width justify-center">
      {{$t('welcome')}}
    </div>
    <div class="row full-width justify-center">
      {{$t('welcomeWithUsername', { username: 'Davide'})}}
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { api } from "boot/axios";

export default defineComponent({
  name: 'IndexPage',
  data () {
    return {
      list: []
    }
  },
  methods: {
    async getUsers () {
      const { data } = await api.get('users', {
        params: {
          limit: 10
        }
      })
      console.debug({data})
    }
  },
  created () {
    this.getUsers()
  }
})
</script>
