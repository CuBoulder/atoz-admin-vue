<template>
    <div class="step-two-wrapper">
        <h2> Edit Organization Information</h2>
        <p class="description">
            In this section you can organize people within your department, add subunits, and change information associated
            with your department and subunits. Use the following parts to organize your unit. Changes are saved automatically
            as you make them. Once you have finished with your changes for a unit, just go back up to the organization tree to
            select the next unit on your list.
        </p>
        <div id="form-wrapper">
            <div class="grid-child">
                <p @click="handleFormStep($event, 1)" class="part-selection active"> A: Organization Tree </p>
                <p @click="handleFormStep($event, 2)" class="part-selection"> B: Unit Description</p>
                <p @click="handleFormStep($event, 3)" class="part-selection"> C: Unit Members</p>
                <p @click="handleFormStep($event, 4)" class="part-selection"> D: Unit Phone Numbers</p>
                <p @click="handleFormStep($event, 5)" class="part-selection"> E: Unit URLs</p>
                <p @click="handleFormStep($event, 6)" class="part-selection"> F: Unit Location</p>
            </div>
            <div class="grid-child">
                <div v-if="activeForm === 1">
                    <PartA/>
                </div>
                <div v-else-if="activeForm === 2">
                    <PartB/>
                </div>
                <div v-else-if="activeForm === 3">
                    <PartC/>
                </div>
                <div v-else-if="activeForm === 4">
                    <PartD/>
                </div>
                <div v-else-if="activeForm === 5">
                    <PartE/>
                </div>
                <div v-else>
                    <PartF/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PartA from './StepTwoForms/PartA'
import PartB from './StepTwoForms/PartB'
import PartC from './StepTwoForms/PartC'
import PartD from './StepTwoForms/PartD'
import PartE from './StepTwoForms/PartE'
import PartF from './StepTwoForms/PartF'
export default {
    name: 'EditOrgsForm',
    mounted: function(){},
    data: function(){
        return{
            activeForm: 1,
        }
    },
    methods:{
        handleFormStep(e, step){
            this.activeForm = step;
            let options = document.getElementsByClassName('part-selection');
            for(let i=0; i< options.length; i++){
                if(options[i].classList.length > 1){
                    // remove the current active class
                    options[i].classList.remove('active');
                }
            }
            // add the active class to the element
            e.srcElement.classList.add('active');
        }
    },
    components:{
        PartA, PartB, PartC, PartD, PartE, PartF
    }
}
</script>
<style scoped>
.step-two-wrapper{
    margin-bottom: 1em;
}
#form-wrapper{
    display: grid;
    grid-template-columns: 20% 80%;
    border: 1px solid grey;
    border-radius: 4px;
    min-height: 500px;
}
.grid-child:first-child{
    border-right: 1px solid grey;
}
.grid-child:last-child{
    padding: 1em;
}
p{
    border-bottom: 1px solid grey;
    margin:0;
    padding-top: .5em;
    padding-bottom: .5em;
    padding-left: .5em;
}

p:hover{
    cursor: pointer;
}
p.active{
    border-left: 4px solid #007BFF;
    background-color: lightgray;
}
.description{
    border-bottom: none;
}
</style>