<template>
  <q-footer class="bg-grey-9 q-py-xs" elevated reveal>
    <q-tabs
      v-model="tab"
      indicator-color="white"
      class="bg-grey-9 text-teal"
    >
      <q-tab class="text-white q-px-none" name="home" icon="home" no-caps />
      <q-tab class="text-white q-px-none" name="contacts" icon="contacts" no-caps />
      <q-tab class="text-white q-px-none" name="add" icon="add" no-caps />
      <q-tab class="text-white q-px-none" name="chat" icon="chat" no-caps />
      <q-tab class="text-white q-px-none" name="settings" icon="settings" no-caps />
    </q-tabs>
  </q-footer>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "FooterRow",
  setup () {
    return {
      tab: ref('contacts')
    }
  }
};
</script>

<style scoped>

</style>
