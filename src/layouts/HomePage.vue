<template>
  <q-layout view="lHh lpr lFf" container style="height: 100vh" class="shadow-2">
    <header-row />
    <content-row />
    <footer-row />
  </q-layout>
</template>

<script>
import HeaderRow from "components/HeaderRow";
import ContentRow from "components/ContentRow";
import FooterRow from "components/FooterRow";

export default {
  name: "HomePage",
  components: { FooterRow, ContentRow, HeaderRow }
};
</script>

<style scoped>

</style>
