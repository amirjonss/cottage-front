<template>

  <q-header elevated reveal>
    <q-toolbar>
      <q-btn class="q-mr-sm" dense flat icon="menu" round />
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
      </q-avatar>

      <q-toolbar-title>Quasar Framework</q-toolbar-title>

      <q-btn dense flat icon="whatshot" round />
    </q-toolbar>
  </q-header>

  <q-footer elevated reveal>
    <q-toolbar>
      <q-toolbar-title>Footer</q-toolbar-title>
    </q-toolbar>
  </q-footer>

  <q-page-container>
    <q-page class="q-pa-md">
      <p v-for="n in 15" :key="n">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore
        vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi
        perferendis voluptate?
      </p>
    </q-page>
  </q-page-container>
</template>

<script>
export default {
  name: "TestPages"
};
</script>

<style scoped>
q-header {
  position: absolute !important;
  right: 0 !important;
  bottom: 0 !important;
  left: 0 !important;
  z-index: 9999 !important;
}
</style>
