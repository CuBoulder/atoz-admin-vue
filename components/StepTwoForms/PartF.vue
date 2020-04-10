<template>
  <div>
    <b-form>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-small">Building</label>
        </b-col>
        <b-col sm="8">
          <b-form-select id="input-small" size="sm" :options="buildings"></b-form-select>
        </b-col>
      </b-row>
        <b-row class="my-1">
        <b-col sm="2">
            <label for="input-small-1">Room Number</label>
        </b-col>
        <b-col sm="8">
            <b-form-input id="input-small-1" size="sm"></b-form-input>
        </b-col>
        </b-row>
          <b-row class="my-1">
            <b-col sm="2">
              <label for="input-small-2">Campus Box</label>
            </b-col>
            <b-col sm="8">
                <b-form-input id="input-small-2" size="sm" ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="2">
              <label for="input-small-3">Street Address</label>
            </b-col>
            <b-col sm="8">
                <b-form-input id="input-small-3" size="sm"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="2">
              <label for="input-small-4">City</label>
            </b-col>
            <b-col sm="8">
                <b-form-input id="input-small-4" size="sm"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="2">
              <label for="input-small-5">State</label>
            </b-col>
            <b-col sm="8">
                <b-form-input id="input-small" size="sm" ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="2">
              <label for="input-small-5">Zipcode</label>
            </b-col>
            <b-col sm="8">
                <b-form-input id="input-small" size="sm" ></b-form-input>
            </b-col>
          </b-row>
    </b-form>
  </div>
</template>
<script>
export default {
  name: "PartF",
  data: function(){
      return{
          buildings: ['a', 'asdf', 'asdff']
      }
  }
};
</script>
<style scoped>
</style>