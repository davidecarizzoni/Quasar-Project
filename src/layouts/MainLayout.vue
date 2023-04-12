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

        <div>
          <q-btn :label="$t('common.login')" @click="onClickLogin" v-if="!isLogged"/>
          <q-btn :label="$t('common.logout')" @click="onClickLogout" v-else/>
        </div>
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
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import {computed, defineComponent, ref} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import LoginDialog from "components/LoginDialog";
import {useStore} from "vuex";

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const leftDrawerOpen = ref(false)
    const store = useStore()
    const $q = useQuasar()

    const isLogged = computed(() => !!store.getters.getToken)

    const onClickLogin = () => {
      $q.dialog({
        component: LoginDialog,
      })
    }

    const onClickLogout  = () => {
      store.commit('logout')
    }

    return {
      leftDrawerOpen,
      onClickLogin,
      onClickLogout,
      route: useRoute(),
      router: useRouter(),
      isLogged,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
