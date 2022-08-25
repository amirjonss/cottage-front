<template>
  <q-footer reveal elevated class="bg-grey-9 q-py-xs">
    <q-tabs
      v-model="tab"
      dense
      class="bg-grey-9 text-teal"
    >
      <q-tab name="home" icon="home" class="text-white" no-caps label="Home" />
      <q-tab name="contacts" icon="contacts" class="text-white" no-caps label="Contacts" />
      <q-tab name="add" icon="add" class="text-white" no-caps label="Add" />
      <q-tab name="chat" icon="chat" class="text-white" no-caps label="Chat" />
      <q-tab name="settings" icon="settings" class="text-white" no-caps label="Settings" />
    </q-tabs>
  </q-footer>
</template>

<script>
export default {
  name: "FooterRow"
};
</script>

<style scoped>

</style>
