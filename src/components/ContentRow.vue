<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <div class="col">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 q-pa-sm" v-for="n in 10" :key="n">
          <q-card class="my-card">
            <router-link to="/cottage">
              <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
            </router-link>

















            <q-card-section>
              <q-btn
                fab
                color="primary"
                icon="place"
                class="absolute"
                style="top: 0; right: 12px; transform: translateY(-50%);"
              />

              <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">
                  House In Foxhall Ave, Kingston
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                  <q-icon name="place" />
                  250 ft
                </div>
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-subtitle1">
                289 Foxhall Ave, Kingston
              </div>
              <div class="text-caption text-grey">
                <q-icon name="bed" color="orange" size="20px"/> 3Br
                <q-icon name="shower" color="orange" size="20px"/> 3Br
                <q-icon name="people" color="orange" size="20px"/> 3Br
                <q-icon name="liquor" color="orange" size="20px"/> 3Br

              </div>
            </q-card-section>

            <q-separator />

            <q-card-actions class="text-bold q-ml-sm q-py-md">
              <div class="col">
                $550 / day
              </div>
              <div class="col text-right q-mr-sm">
                <q-btn outline round color="grey" icon="star"/>
              </div>
            </q-card-actions>

          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentRow"
};
</script>

<style scoped>
.items-start {
  margin-top: 40px;
  padding-bottom: 60px;
}
</style>
