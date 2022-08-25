<template>
  <div class="bg-grey-8 row" style="margin-top: 59px;">
    <div class="col-12 q-pt-sm q-px-sm q-pb-lg">
      <q-input
        v-model="search"
        bg-color="grey-3"
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
            v-model="model"
            :options="options"
            bg-color="grey-3"
            filled
            input-debounce="0"
            label="Simple filter"
            style="width: 100%"
            use-input
            @filter="filterFn"
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
            v-model="model"
            :options="options"
            bg-color="grey-3"
            filled
            input-debounce="0"
            label="Simple filter"
            style="width: 100%"
            use-input
            @filter="filterFn"
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
            v-model="model"
            :options="options"
            bg-color="grey-3"
            filled
            input-debounce="0"
            label="Simple filter"
            style="width: 100%"
            use-input
            @filter="filterFn"
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
            v-model="model"
            :options="options"
            bg-color="grey-3"
            filled
            input-debounce="0"
            label="Simple filter"
            style="width: 100%"
            use-input
            @filter="filterFn"
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
            v-model="model"
            :options="options"
            bg-color="grey-3"
            filled
            input-debounce="0"
            label="Simple filter"
            style="width: 100%"
            use-input
            @filter="filterFn"
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
          :max="100"
          :min="0"
          color="grey-3"
          inner-track-color="grey-8"
          label-always
          label-text-color="black"
        />
      </div>
    </div>

    <div class="col-8 col-sm-6 q-mx-auto">
      <q-toggle
        v-model="isAlcoholDrink"
        :label="'alkagol ' + isAlcohol"
        :style="{color: isAlcoholDrink ? color : 'white'}"
        color="indigo-10"
        icon="liquor"
        size="80px"
        style="font-family: Roboto, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: bold;"
      />
    </div>

    <div class="col-12 col-sm-6 col-xs-6 q-pt-lg q-pa-sm">
      <q-btn
        class="full-width"
        color="indigo-10"
        label="search" size="20px"
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
