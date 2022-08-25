<template>
  <div class="row">
    <div class="col-12 q-pt-sm q-px-sm q-pb-lg">
      <q-input
        bg-color="grey-3"
        v-model="search"
        debounce="500"
        filled
        placeholder="Dacha Name"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
    <div class="col-12 col-sm-6 col-xs-6">
      <div class="q-pa-sm">
        <div class="q-gutter-md row">
          <q-select
            bg-color="grey-3"
            filled
            v-model="model"
            use-input
            input-debounce="0"
            label="Simple filter"
            :options="options"
            @filter="filterFn"
            style="width: 100%"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  No results
                </q-item-section>
              </q-item>
            </template>
          </q-select>

        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-xs-6">
      <div class="q-pa-sm">
        <div class="q-gutter-md row">
          <q-select
            bg-color="grey-3"
            filled
            v-model="model"
            use-input
            input-debounce="0"
            label="Simple filter"
            :options="options"
            @filter="filterFn"
            style="width: 100%"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  No results
                </q-item-section>
              </q-item>
            </template>
          </q-select>

        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-xs-6">
      <div class="q-pa-sm">
        <div class="q-gutter-md row">
          <q-select
            bg-color="grey-3"
            filled
            v-model="model"
            use-input
            input-debounce="0"
            label="Simple filter"
            :options="options"
            @filter="filterFn"
            style="width: 100%"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  No results
                </q-item-section>
              </q-item>
            </template>
          </q-select>

        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-xs-6">
      <div class="q-pa-sm">
        <div class="q-gutter-md row">
          <q-select
            bg-color="grey-3"
            filled
            v-model="model"
            use-input
            input-debounce="0"
            label="Simple filter"
            :options="options"
            @filter="filterFn"
            style="width: 100%"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  No results
                </q-item-section>
              </q-item>
            </template>
          </q-select>

        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-xs-6">
      <div class="q-pa-sm">
        <div class="q-gutter-md row">
          <q-select
            bg-color="grey-3"
            filled
            v-model="model"
            use-input
            input-debounce="0"
            label="Simple filter"
            :options="options"
            @filter="filterFn"
            style="width: 100%"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  No results
                </q-item-section>
              </q-item>
            </template>
          </q-select>

        </div>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-xs-6 q-pt-lg ">
      <div class="q-pa-md">
        <q-range
          v-model="label"
          :min="0"
          :max="100"
          inner-track-color="grey-8"
          label-text-color="black"
          color="grey-3"
          label-always
        />
      </div>
    </div>

    <div class="col-8 col-sm-6 q-mx-auto">
      <q-toggle
        v-model="isAlcoholDrink"
        color="indigo-10"
        icon="liquor"
        style="font-family: Roboto, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: bold;"
        :label="'alkagol ' + isAlcohol"
        size="80px"
        :style="{color: isAlcoholDrink ? color : 'white'}"
      />
    </div>

    <div class="col-12 col-sm-6 col-xs-6 q-pt-lg q-pa-sm">
      <q-btn
        label="search"
        color="indigo-10"
        class="full-width" size="20px"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchRow",
  computed: {
    isAlcohol() {
      if (this.isAlcoholDrink) {
        return "mumkin";
      }
      return "mumkin emas";
    }
  },
  data() {
    return {
      label: {
        min: 0,
        max: 100
      },
      isAlcoholDrink: false,
      color: "#1A237e",
      guest: {
        family: true,
        men: false,
        women: false
      }
    };
  },
  methods: {}
};
</script>

<style scoped>

</style>
