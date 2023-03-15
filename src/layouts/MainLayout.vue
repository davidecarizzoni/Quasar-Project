<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
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
      <q-item to="users" active-class="router-link-active" exact-active-class="router-link-exact-active">
        <q-item-section avatar>
          <q-icon name="person" size="md" />
        </q-item-section>

        <q-item-section>
          {{ $t('common.userList') }}
        </q-item-section>
      </q-item>
      <q-item to="/" active-class="router-link-active" exact-active-class="router-link-exact-active">
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
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.router-link-active, .router-link-exact-active, .set-as-active {
  font-weight: bold;
}
</style>
