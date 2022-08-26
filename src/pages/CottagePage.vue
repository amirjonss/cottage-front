<template>
  <div class="q-pa-md">
    <q-carousel
      class="rounded-borders"
      animated
      v-model="slide"
      v-model:fullscreen="fullscreen"
      thumbnails
      infinite
    >
      <q-carousel-slide class="bar" :name="1" img-src="https://demo1-homeid.g5plus.net/wp-content/uploads/2020/10/single-property-04.jpg" />
      <q-carousel-slide :name="2" img-src="https://demo1-homeid.g5plus.net/wp-content/uploads/2020/10/single-property-05.jpg" />
      <q-carousel-slide :name="3" img-src="https://demo1-homeid.g5plus.net/wp-content/uploads/2020/10/single-property-06.jpg" />
      <q-carousel-slide :name="4" img-src="https://demo1-homeid.g5plus.net/wp-content/uploads/2020/10/single-property-07.jpg" />

      <template v-slot:control>
        <q-carousel-control
          position="bottom-right"
          :offset="[18, 18]"
        >
          <q-btn
            push round dense color="white" text-color="primary"
            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreen = !fullscreen"
          />
        </q-carousel-control>
      </template>

    </q-carousel>
  </div>
</template>


<script setup>
import { ref } from 'vue'

const slide = ref(1)
const fullscreen = ref(false)

</script>

<style scoped>
.q-pa-md {
  margin-top: 60px;
}

.rounded-borders {
  border-radius: 10px;
}
</style>