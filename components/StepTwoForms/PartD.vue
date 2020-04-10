<template>
  <div>
    <p>
      Verify the phone number listed and add any additional numbers for a unit, including fax numbers and TTY numbers. For any
      numbers that you might need add add, this is the part to do it.
    </p>
    <template v-for=" (i, index) in numbers">
      <b-row class="my-1" :key="`url-${index}`">
        <b-col sm="3">
          <b-form-input id="input-small" v-model="i.desc" size="sm" placeholder="Description"></b-form-input>
        </b-col>
        <b-col sm="8">
          <b-form-input id="input-small" v-model="i.number" size="sm" placeholder="Phone number"></b-form-input>
        </b-col>
      </b-row>
    </template>
    <b-button variant="primary" size="sm" @click="handleClick">Add Number</b-button>
  </div>
</template>
<script>
export default {
  name: "PartD",
  data: function(){
      return{
          numbers: [
            {
                desc: "main office",
                number: "303-555-1234"
            }
          ]
      }
  },
  methods:{
      handleClick: function(){
          this.numbers.push({
              desc: null,
              number: null
          });
      }
  }
};
</script>
<style scoped>
</style>