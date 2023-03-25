<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          class="text-weight-bold"
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-item :to="{ name: 'users' }" :class="{'text-weight-bold': ['users', 'usersDetail'].includes(route.name)}">
        <q-item-section avatar>
          <q-icon name="person" size="md" />
        </q-item-section>

        <q-item-section>
          {{ $t('common.userList') }}
        </q-item-section>
      </q-item>
      <q-item :to="{ name: 'Entry' }" :class="{'text-weight-bold': ['Entry'].includes(route.name)}">
        <q-item-section avatar>
          <q-icon name="home" size="md" />
        </q-item-section>

        <q-item-section>
          {{ $t('common.index') }}
        </q-item-section>
      </q-item>
      <q-item clickable @click="logout">
        <q-item-section avatar>
          <q-icon name="fas fa-sign-out" size="md" />
        </q-item-section>

        <q-item-section>
          {{ $t('common.logout') }}
        </q-item-section>
      </q-item>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {useStore} from "vuex";

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const leftDrawerOpen = ref(false)
    const store = useStore()
    const router = useRouter()

    const logout = () => {
      store.dispatch('user/logout')
      router.push('onboarding/login')
    }

    const toggleLeftDrawer = () => leftDrawerOpen.value = !leftDrawerOpen.value

    return {
      leftDrawerOpen,
      route: useRoute(),
      router,
      logout,
      toggleLeftDrawer
    }
  }
})
</script>
