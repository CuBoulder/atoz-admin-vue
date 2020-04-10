<template>
  <div>
    <h2>Edit People</h2>
    <p>In this section you will review all of the people in your organization.</p>
    <div id="edit-people-container">
      <div>
        <b-form-select v-model="selected" :options="people" :select-size="10"></b-form-select>
            <b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1" value="accepted" unchecked-value="not_accepted">
            Hide people not marked 'visible'
    </b-form-checkbox>
      </div>
      <div>
        <b-form>
          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-small">Name</label>
            </b-col>
            <b-col sm="9">
              <b-form-input id="input-small" size="sm" disabled></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-small-2">Peoplesoft Title</label>
            </b-col>
            <b-col sm="9">
              <b-form-input id="input-small-2" size="sm" disabled ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-small">Unit/Working Title</label>
            </b-col>
            <b-col sm="9">
              <a href="#"> Add </a>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-small">Phone</label>
            </b-col>
            <b-col sm="9">
              <b-form-input id="input-small" size="sm" disabled></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-small">Email</label>
            </b-col>
            <b-col sm="9">
              <b-form-input id="input-small" size="sm" disabled></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-small">Campus Box</label>
            </b-col>
            <b-col sm="9">
              <b-form-input id="input-small" size="sm" disabled></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-small">Building</label>
            </b-col>
            <b-col sm="9">
                <b-form-select id="input-small" size="sm" :options="buildings" ></b-form-select>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-small">Room Number</label>
            </b-col>
            <b-col sm="9">
              <b-form-input id="input-small" size="sm" placeholder="Room number for this person"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-small">Visible</label>
            </b-col>
            <b-col sm="9">
              <b-form-checkbox id="input-small" size="sm"></b-form-checkbox>
            </b-col>
          </b-row>
          <b-button type="submit" variant="primary"> Save </b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EditPeople",
  mounted: function() {
    // fetch data here
  },
  data: function() {
    return {
      people: [
        "Joanna Bertrand",
        "Kevin Crafts",
        "Jeremy Sparks",
        "Alan Cole",
        "Brooke Stevens",
        "Mike Bolei",
        "James Fuller",
        "Cathy Snider",
        "Jesus Ortiz Tovar"
      ],
      selected: null,
      form: {
        name: null,
        peopleSoftTitle: null,
        unit: null,
        phone: null,
        email: null
      },
      visible: true,
      building: null,
      buildings: [
          "ARCE",
          "C4C",
          "VC"
      ]
    };
  }
};
</script>
<style scoped>
#edit-people-container {
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 1em;
}
</style>