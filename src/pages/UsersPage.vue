<template>
  <q-page class="flex">
    <div class="q-pa-md row full-width">
      <q-table
        class="col-12"
        flat
        :title="$t('common.userList')"
        :rows="rows"
        :columns="columns"
        row-key="_id"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { api } from "boot/axios";

export default defineComponent({
  name: 'UsersPage',
  data () {
    return {
      rows: [],
      columns: [
        {
          name: 'name',
          label: this.$t('common.name'),
          align: 'left',
          field: row => row?.name || ' - ',
        },
        {
          name: 'surname',
          label: this.$t('common.surname'),
          align: 'left',
          field: row => row?.surname || ' - ',
        },
        {
          name: 'email',
          label: this.$t('common.email'),
          align: 'left',
          field: row => row?.email || ' - ',
        },
        {
          name: 'role',
          label: this.$t('common.role'),
          align: 'left',
          field: row => row?.role || ' - ',
        },
      ]
    }
  },
  methods: {
    async getUsers () {
      try {
        const { data } = await api.get('users', {
          params: {
            limit: 10
          }
        })
        this.rows = data
      } catch (e) {
        console.error({e})
      }
    }
  },
  async created () {
    await this.getUsers()
  }
})
</script>
