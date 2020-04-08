<template>
    <div class="step-two-wrapper">
        <h2> Edit Organization Information</h2>
        <div id="form-wrapper">
            <div class="grid-child">
                <p> A: Organization Tree </p>
                <p> B: Unit Description</p>
                <p> C: Unit Members</p>
                <p> D: Unit Phone Numbers</p>
                <p> E: Unit URLs</p>
                <p> F: Unit Location</p>
            </div>
            <div class="grid-child">
                Im the actual form!! use switch statement to control which form is displayed!
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'EditOrgsForm'
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
p{
    border-bottom: 1px solid grey;
    margin:0;
    padding-top: .5em;
    padding-bottom: .5em;
    padding-left: .5em;
}
</style>