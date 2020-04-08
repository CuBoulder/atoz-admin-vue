<template>
  <div>
    <h1>Edit Organization</h1>
    <!-- form progress bar -->
    <!-- https://codepen.io/himanshu/pen/syLAh -->
    <div class="form-progress">
      <div id="circle-step-1" class="circle active">
        <span class="label">1</span>
        <span class="title">Step 1</span>
      </div>
      <span class="bar"></span>
      <div id="circle-step-2" class="circle">
        <span class="label">2</span>
        <span class="title">Step 2</span>
      </div>
      <span class="bar"></span>
      <div id="circle-step-3" class="circle">
        <span class="label">3</span>
        <span class="title">Step 3</span>
      </div>
    </div>
    <!-- multistep form -->
    <div id="step-1" v-if="step === 1">
      <EditPeople/>
      <b-button variant="outline-primary" @click="nextStep(2)">Next Step</b-button>
    </div>
    <div id="step-2" v-else-if="step === 2">
      <EditOrgsForm/>
      <b-button variant="outline-primary" @click="nextStep(1)">Previous Step</b-button>
      <b-button variant="outline-primary" @click="nextStep(3)">Next Step</b-button>
    </div>
    <div id="step-3" v-else>
      <ReviewListing/>
      <b-button variant="outline-primary" @click="nextStep(2)">Previous Step</b-button>
    </div>
  </div>
</template>

<script>
import EditPeople from '../components/EditPeople';
import EditOrgsForm from '../components/EditOrgsForm';
import ReviewListing from '../components/ReviewListing';
export default {
  name: "EditOrgs",
  data: function() {
    return {
      step: 1
    };
  },
  methods: {
    nextStep: function(step) {
      this.step = step;
      // control the progress bar
      switch(step){
          case 1:
            document.getElementById("circle-step-1").classList.remove('done');
            document.getElementById("circle-step-1").classList.add('active');
            document.getElementById("circle-step-2").classList.remove('active');
            break;
          case 2:
            document.getElementById("circle-step-2").classList.remove('done');
            document.getElementById("circle-step-1").classList.replace('active','done');
            document.getElementById("circle-step-2").classList.add('active');
            document.getElementById("circle-step-3").classList.remove('active');
            break;
          case 3:
            document.getElementById("circle-step-2").classList.replace('active','done');
            document.getElementById("circle-step-3").classList.add('active');
            break;
      }
    }
  },
  components:{
      EditPeople, EditOrgsForm, ReviewListing
  }
};
</script>

<style scoped>
.form-progress {
  width: 1000px;
  margin: 20px auto;
  text-align: center;
}
.form-progress .circle,
.form-progress .bar {
  display: inline-block;
  width: 40px; 
  height: 40px;
  border-radius: 40px;
  border: 1px solid #d5d5da;
}
.form-progress .bar {
  position: relative;
  width: 150px;
  height: 6px;
  top: -33px;
  margin-left: -5px;
  margin-right: -5px;
  border-left: none;
  border-right: none;
  border-radius: 0;
}
.form-progress .circle .label {
  display: inline-block;
  width: 32px;
  height: 32px;
  line-height: 32px;
  border-radius: 32px;
  margin-top: 3px;
  color: #b5b5ba;
  font-size: 17px;
}
.form-progress .circle .title {
  color: #b5b5ba;
  font-size: 13px;
  line-height: 30px;
  margin-left: -5px;
}

/* Done / Active */
.form-progress .bar.done,
.form-progress .circle.done {
  background: #eee;
}
.form-progress .bar.active {
  background: linear-gradient(to right, #EEE 40%, #FFF 60%);
}
.form-progress .circle.done .label {
  color: #FFF;
  background: #8bc435;
  box-shadow: inset 0 0 2px rgba(0,0,0,.2);
}
.form-progress .circle.done .title {
  color: #444;
}
.form-progress .circle.active .label {
  color: #FFF;
  background: #0c95be;
  box-shadow: inset 0 0 2px rgba(0,0,0,.2);
}
.form-progress .circle.active .title {
  color: #0c95be;
}
.form-progress .circle.done .title {
  color: #8bc435;
}
</style>
