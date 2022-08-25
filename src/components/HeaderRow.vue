<template>
  <q-header reveal elevated class="bg-grey-9 q-py-xs" >
    <q-toolbar>
      <q-btn icon="cottage" label="dacha" flat size="20px" no-caps />

      <q-tabs v-model="tab" shrink stretch class="gt-xs absolute-center">
        <q-tab name="search" label="search" class="q-pa-sm" @click="$emit('isVisibleSearch')"/>
        <q-tab name="tab1" label="Tab 1" class="q-pa-sm"/>
        <q-tab name="tab3" label="Tab 3" class="q-pa-sm"/>
        <q-tab name="tab3" label="Sign In" class="q-pa-sm lt-md"/>
      </q-tabs>

      <div class="absolute-right">
        <q-btn label="Sign In" icon="contacts" flat no-caps class="gt-sm q-my-sm" />
        <q-btn label="Add Home" outline no-caps class="gt-xs q-my-sm q-mx-sm"  />
        <q-btn icon="search" flat size="20px" class="lt-sm" no-caps @click="$emit('isVisibleSearch')" />
      </div>

    </q-toolbar>
<!--    <search-row v-if="isVisibleSearch" />-->
  </q-header>
</template>

<script>

// import SearchRow from "components/SearchRow";

export default {
  name: "HeaderRow",
  components: {
    // SearchRow
  },
};
</script>

<style scoped>

</style>
