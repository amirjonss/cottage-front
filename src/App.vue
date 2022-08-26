<template>
  <div>
    <q-layout class="shadow-2" container style="height: 100vh" view="lHh lpr lFf">
      <header-row />

      <router-view />

      <FooterDesktop />
    </q-layout>
    <FooterMobile />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import HeaderRow from "components/HeaderRow";
import FooterDesktop from "components/FooterDesktop";
import FooterMobile from "components/FooterMobile";

export default defineComponent({
  name: 'App',
  components: { FooterMobile, FooterDesktop, HeaderRow }
})
</script>
