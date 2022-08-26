<template>
  <div>
      <content-row />
  </div>
</template>
<script>
import HeaderRow from "components/HeaderRow";
import ContentRow from "components/ContentRow";
import FooterMobile from "components/FooterMobile";
import FooterDesktop from "components/FooterDesktop";

export default {
  name: "HomePage",
  components: {
    ContentRow,
  }
};
</script>

<style scoped>
</style>
