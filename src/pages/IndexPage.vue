<template>
  <q-page class="flex" padding>
    {{$t('welcome')}}
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { api } from "boot/axios";

export default defineComponent({
  name: 'IndexPage',
})
</script>
