<template>
  <div class="start-page-container">
    <div>
      <h1>Guide to Updating Your Directory Listing</h1>
      <h2>Working in the Admin Panel</h2>
      <p>This admin panel gives you the tools to edit and format your department's listings for the print and online directories. There are instructions and help buttons to guide you through the process.</p>
      <p>You should be aware that changes you make in the admin panel directly affect the database and will appear in the online directory within 24 hours. We encourage you to pause before deleting anything to make sure that you are deleting the right thing. If you unintentionally delete something, you will not be able to recover the item and will have to re-enter the information.</p>
      <h5>IMPORTANT NOTICE: Browser Compatibility</h5>
      <p>The admin panel works best in Firefox 3 on PC and Mac computers, Safari 3 on the Mac, and Internet Explorer 7 on the PC. Some of the features do not work well in IE 6 nor Safari 1 and 2, so we do not recommend using these browsers for this application.</p>
      <p>Regardless of the browser you use, don’t use the back button. It will take you out of the admin panel. Instead, use the tabs along the top of the page to navigate.</p>
      <h2>The Process: An Overview</h2>
      <h4>Step 1: Edit People</h4>
      <p>In this section you will review information for each individual in your organization. Some of this information is being pulled from the PeopleSoft database, so you may have to work with your human resources/PeopleSoft liaison to update this information. The fields are marked so it will be easy for you to see which information you can edit here and which information you will need to edit in PeopleSoft.</p>
      <h4>Step 2: Edit Organizations</h4>
      <p>In this section you can organize people within your department, add subunits to your department, and change information associated with your department and subunits. The changes you make in this step will have the most impact on how your listing appears online and in the print directory.</p>
      <h4>Step 3: Review Your Listings</h4>
      <p>Once you have made all your changes you can review your listing to catch any errors or changes you forgot to make. If you find you need to make more changes, no problem, just go back to the appropriate section, make your change, and review your listing again.</p>
    </div>
    <div>
      <div class="department-form">
        <h3> Start here by Selecting your organization then click to Submit</h3>
        <b-form @submit="handleSubmit">
          <b-form-group id="input-group" label="Departments" label-for="input-3">
            <b-form-select id="input" v-model="selected" :options="departments" required></b-form-select>
            <b-button class="submit-button" type="submit" variant="primary"> Edit this Department </b-button>
          </b-form-group>
        </b-form>
        <p>If you have multiple units to edit, you may select them using the drop down menu.</p>
      </div>
      <div class="sample-listing">
        <h3> A Sample Listing </h3>
        <h4>Department of Underwater Basket Weaving</h4>
        <p>657 UCB, 85A University Pond (POND)</p>
        <p>INFORMATION...303-492-5551</p>
        <p>FAX……………...303-492-5552</p>
        <h4>Administration</h4>
        <p>Sticks, Ginny, Chair, Prof,</p>
        <p>POND 85B…..2-5553</p>
        <p>Fish, Swedish, Acct,</p>
        <p>POND 54…….2-5556</p>
        <p>Grass, Charles, Adm Asst,</p>
        <p>POND 85A…..2-5554</p>
        <h4>Staff</h4>
        <p>Afloat, Tim, Outrch Coord,</p>
         POND 12….....2-5558
   Rushes, R. Round, Bus Dir,
         POND 74…….2-5557
   Weave, Gunnar, Hd Reed Wrangler,
         POND 52…….2-5500
Faculty
   Brayding, Foel, Sr Instr,
         POND 4……...2-5550
   Over, Under, Asst Prof,
         POND 112…...2-5549
   Sticks, Ginny, Prof,
         POND 85B…..2-5553
   Tie, Knot, Assoc Prof,
         POND 26…..2-5563
American Bubbles Literary Journal
671 UCB, 34 University Pond (POND)
Information……..303-492-5545
   Smith, Word, Edtr,
         POND 34…..........2-5564
Center for Advanced Weaving Apparatus
672 UCB, 26 University Pond (POND)
Information……..303-492-5545
Student Computer Lab
35 University Pond (POND)
Underwater Weaving Outreach Program
672 UCB, 26 University Pond (POND)
Information……..303-492-5545
   Afloat, Tim, Outrch Coord,
         POND 12….....2-5558
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StartPage",
  mounted: function(){
    // fetch department names
  },
  data: function(){
    return {
      departments: ['asdf', 'asdff', 'asdfff'],
      selected: null
    }
  },
  methods:{
    handleSubmit: function(e){
      e.preventDefault();
      this.$store.commit('SET_CURR_DEPT', this.selected);
      this.$router.push('/editOrgs');
    }
  }
};
</script>

<style>
.start-page-container {
  display: grid;
  grid-template-columns: 60% 40%;
  column-gap: 1em;
}
.sample-listing{
  border: 1px solid grey;
  padding: 1em;
}
.department-form{
  border: 1px solid grey;
  padding: 1em;
  margin-bottom: 1em;
}
.submit-button{
  margin-top: 6px;
}
</style>
