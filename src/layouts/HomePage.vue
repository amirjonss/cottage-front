<template>
  <div>
    <q-layout class="shadow-2" container style="height: 100vh" view="lHh lpr lFf">
      <header-row />
      <content-row />
    </q-layout>
    <footer-row />
  </div>
</template>
<script>
import HeaderRow from "components/HeaderRow";
import ContentRow from "components/ContentRow";
import FooterRow from "components/FooterRow";

export default {
  name: "HomePage",
  components: {
    FooterRow,
    ContentRow,
    HeaderRow
  }
};
</script>

<style scoped>

</style>
