<template>
  <div>
      <template v-for=" (i, index) in urls">
        <b-row class="my-1" :key="`url-${index}`">
        <b-col sm="3">
            <b-form-input id="input-small" v-model="i.desc" size="sm" placeholder="Description"></b-form-input>
        </b-col>
        <b-col sm="8">
            <b-form-input id="input-small" v-model="i.url" size="sm" placeholder="URL"></b-form-input>
        </b-col>
        <b-col sm="1">
            <a :href="i.url" target="_blank"> View </a>
        </b-col>
        </b-row>
      </template>
    <b-button variant="primary" size="sm" @click="handleClick"> Add URL </b-button>
  </div>
</template>
<script>
export default {
  name: "PartE",
  data: function(){
      return{
          urls: [{
              desc: 'Styleguide',
              url: 'https://colorado.edu/styleguide'
          }]
      }
  },
  methods: {
      handleClick(){
          this.urls.push({
              desc: null,
              url: null
          })
      }
  }
};
</script>
<style scoped>
</style>