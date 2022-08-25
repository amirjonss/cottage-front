<template>
  <div>
    <q-layout class="shadow-2" container style="height: 100vh" view="lHh lpr lFf">
      <header-row />
      <content-row />
    </q-layout>
    <FooterMobile />
  </div>
  <FooterDesktop />
</template>
<script>
import HeaderRow from "components/HeaderRow";
import ContentRow from "components/ContentRow";
import FooterMobile from "components/FooterMobile";
import FooterDesktop from "components/FooterDesktop";

export default {
  name: "HomePage",
  components: {
    FooterDesktop,
    FooterMobile,
    ContentRow,
    HeaderRow
  }
};
</script>

<style scoped>

</style>
