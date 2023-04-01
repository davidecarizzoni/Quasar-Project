<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card flat bordered style="border-radius: 0.5rem" class="q-pa-md">
        <div class="row justify-center">
          <div class="text-weight-bold text-h3">
            {{title}}
          </div>
          <div class="text">
            {{text}}
          </div>
        </div>
      </q-card>
      <q-card-actions align="right">
        <q-btn color="primary" label="OK" @click="onClickSave" :loading="loading" />
        <q-btn color="primary" label="Cancel" @click="onCancelClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useDialogPluginComponent } from 'quasar'
import {defineComponent, ref} from 'vue'
import {useRoute, useRouter} from "vue-router";
import {t} from "boot/i18n";
import {useStore} from "vuex";

export default defineComponent({
  name: 'LoginModal',
  props: {
    title: String,
    text: String,
    onConfirm: Function
  },
  emits: [
    ...useDialogPluginComponent.emits
  ],
  setup () {
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
    const emailRegex = /^\S+@\S+\.\S+$/
    const router = useRouter()
    const store = useStore()
    const route = useRoute()
    const loading = ref(false)
    const emailRef = ref(null)
    const passwordRef = ref(null)

    const user = ref({
      email: undefined,
      password: undefined,
    })

    const notEmpty = val => !!val || t('common.requiredField')
    const validEmail = val => emailRegex.test(val) || t('common.invalidEmail')

    const isValid = () => {
      const fieldsIsValid = []
      fieldsIsValid.push(emailRef.value.validate())
      fieldsIsValid.push(passwordRef.value.validate())

      return fieldsIsValid.every(f => f === true)
    }

    const onClickSave = async () => {
      if (!isValid()) return
      try {
        loading.value = true
        await store.dispatch('login', user.value)
        await router.push({ name: 'users' })
        onDialogOK()
        loading.value = false
      } catch (e) {
        console.error({e})
        loading.value = false
      }
    }

    return {
      dialogRef,
      onDialogHide,
      onCancelClick: onDialogCancel,
      router,
      route,
      user,
      loading,
      notEmpty,
      validEmail,
      onClickSave,
      emailRef,
      passwordRef,
    }
  },
})
</script>

<style scoped lang="scss">

</style>
