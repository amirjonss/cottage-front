<template>
  <div>
    <q-layout view="lHh lpr lFf" container style="height: 100vh" class="shadow-2">
      <q-header reveal elevated class="bg-grey-9 q-py-xs">
        <q-toolbar>
          <q-toolbar-title>
            <q-btn icon="cottage" label="dacha" flat size="20px" no-caps />
            <q-btn icon="search" class="absolute-right" flat size="20px" no-caps @click="isVisibleSearch = !isVisibleSearch"/>
          </q-toolbar-title>
        </q-toolbar>
        <search-row v-if="isVisibleSearch"/>
      </q-header>

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

            <q-page-container>
              <q-page class="q-pa-md">
                <p v-for="n in 15" :key="n">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
                </p><p v-for="n in 15" :key="n">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
                </p><p v-for="n in 15" :key="n">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
                </p>
              </q-page>
            </q-page-container>
    </q-layout>
  </div>
</template>

<script>

import SearchRow from "components/SearchRow";

export default {
  name: "HeaderRow",
  components: { SearchRow },
  data() {
    return {
      tab: "salom",
      isVisibleSearch: false
    };
  }
};
</script>

<style scoped>

</style>
