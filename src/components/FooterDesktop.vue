<template>
  <div class="footer row bg-grey-9 justify-center gt-xs">
    <div class="col">

      <div class="row">
        <div class="col-12 col-md-6 text-left q-pl-lg items-center">
            <q-icon class="cottage" name="cottage" size="35px" color="blue"/>
            <div class="homeId inline-block">homeId</div>
        </div>
        <div class="col-12 col-md-6 text-right q-pr-lg">
          <q-icon class="icon" name="facebook" size="30px" color="blue"/>
          <q-icon class="icon" name="facebook" size="30px" color="blue"/>
          <q-icon class="icon" name="facebook" size="30px" color="blue"/>
          <q-icon class="icon" name="facebook" size="30px" color="blue"/>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-md-9 q-pl-lg text-left">
          <div class="inline-block">TERMS OF USE</div>
          <div class="inline-block list">PRIVACY POLICY</div>
          <div class="inline-block list">CONTACT SUPPORT</div>
          <div class="inline-block list">CAREERS</div>
          <div class="inline-block list">FAQS</div>
        </div>

        <div class="col-12 col-md-3 reserved-txt text-right q-pr-lg">
          © 2021 homeID. All Rights Reserved
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "FooterDesktop"
};
</script>

<style scoped>

.footer {
  width: 100%;
  font-family: 'Poppins', sans-serif;
}

.inline-block {
  font-size: 16px;
  color: white;
  font-weight: 500;
  cursor: pointer;
}

.list {
  margin-left: 45px;
}

.homeId {
  font-size: 35px;
  margin-top: 8px;
  font-weight: 800;
}

.reserved-txt {
  font-size: 14px;
  color: white;
}

.col-md-6, .col-md-9, .col-md-3 {
  margin-top: 45px;
}

.col-md-3 {
  padding-bottom: 45px;
}

.icon {
  padding: 20px;
}

.cottage {
  margin-top: -18px;
}

@media only screen and (max-width: 1024px) {
  .col-md-6, .col-md-9, .col-md-3 {
    text-align: center !important;
  }
  .col-md-3 {
    margin-bottom: 45px;
  }
  .list {
    margin-left: 2% !important;
  }
  .col-md-9 {
    padding: 0 !important;
  }
  .q-pr-lg {
    padding: 0 !important;
  }
}



</style>