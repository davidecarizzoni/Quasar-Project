<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <q-input class="col-4" v-model="user.name" :label="$t('common.name')" outlined dense/>
      <q-input class="col-4" v-model="user.surname" :label="$t('common.surname')" outlined dense/>
    </div>
    <div class="row">
      <q-btn :label="$t('common.save')" @click="onSave" :loading="loading"/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { api } from "boot/axios";
import {useRouter, useRoute} from "vue-router";

export default defineComponent({
  name: 'UsersDetailPage',
  setup () {
    return {
      router: useRouter(),
      route: useRoute()
    }
  },
  data () {
    return {
      loading: false,
      user: {
        name: undefined,
        surname: undefined
      }
    }
  },
  methods: {
    async getUser () {
      try {
        const { data } = await api.get(`users/${this.route.params.id}`)
        this.user = data
      } catch (e) {
        console.error({e})
      }
    },
    async onSave () {
      try {
        this.loading = true
        await api.put(`users/${this.route.params.id}`, { ...this.user })
        this.router.back()
        this.loading = false
      } catch (e) {
        this.loading = false
        console.error({e})
      }
    }
  },
  async created () {
    await this.getUser()
  }
})
</script>
