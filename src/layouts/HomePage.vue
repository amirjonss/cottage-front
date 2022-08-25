<template>
  <q-layout class="shadow-2" container style="height: 100vh" view="lHh lpr lFf">
    <header-row @isVisibleSearch="isVisibleSearch = !isVisibleSearch" />
    <search-row v-if="isVisibleSearch"/>
    <content-row />
    <footer-row />
  </q-layout>
</template>

<script>
import HeaderRow from "components/HeaderRow";
import ContentRow from "components/ContentRow";
import FooterRow from "components/FooterRow";
import SearchRow from "components/SearchRow";

export default {
  name: "HomePage",
  components: {
    SearchRow,
    FooterRow,
    ContentRow,
    HeaderRow
  },
  data() {
    return {
      isVisibleSearch: false
    };
  },
};
</script>

<style scoped>

</style>
