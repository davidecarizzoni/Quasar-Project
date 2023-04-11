<template>
  <q-page>
    <div class="row">
      <div class="col-4">
        <ChatList />
      </div>
      <div class="col-8">
        <ChatDetail />
      </div>
    </div>
  </q-page>
</template>

<script>
import ChatList from "components/common/ChatList";
import ChatDetail from "components/common/ChatDetail";
export default {
  name: 'ChatsPage',
  components: {ChatDetail, ChatList},
}
</script>

<style scoped lang="scss">

</style>
