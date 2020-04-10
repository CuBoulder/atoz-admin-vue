<template>
    <div>
        <p> Verify the description matches the name of the unit and verify the type is correct. If you want to 
            rename a subinit, you can do this in the description field. You most like won't have to make any 
            changes to the type.
        </p>
        <b-row class="my-1">
        <b-col sm="2">
          <label for="input-small">Description</label>
        </b-col>
        <b-col sm="5">
          <b-form-input id="input-small" size="sm" placeholder="enter the unit description"></b-form-input>
        </b-col>
        </b-row>
        <b-row class="my-1">
        <b-col sm="2">
          <label for="input-small">Cross-reference</label>
        </b-col>
        <b-col sm="5">
            add | help
        </b-col>
        </b-row>
        <b-row class="my-1">
        <b-col sm="2">
          <label for="input-small">Type</label>
        </b-col>
        <b-col sm="10">
            <div class="checkbox-group">
                <div class="checkbox-child">
                    <b-form-checkbox v-model="selected" value="Academic Department">Academic Department</b-form-checkbox>
                    <b-form-checkbox v-model="selected" value="College"> College</b-form-checkbox>
                    <b-form-checkbox v-model="selected" value="Museum"> Museum</b-form-checkbox>
                    <b-form-checkbox v-model="selected" value="Research Center">Research Center</b-form-checkbox>
                </div>
                <div class="checkbox-child">
                    <b-form-checkbox v-model="selected" value="Academic Enrichment Program">Academic Enrichment Program</b-form-checkbox>
                    <b-form-checkbox v-model="selected" value="Department">Department</b-form-checkbox>
                    <b-form-checkbox v-model="selected" value="Organization">Organization</b-form-checkbox>
                    <b-form-checkbox v-model="selected" value="Research Institute">Research Institute</b-form-checkbox>
                </div>
                <div class="checkbox-child">
                    <b-form-checkbox v-model="selected" value="Academic Program">Academic Program</b-form-checkbox>
                    <b-form-checkbox v-model="selected" value="Internal Unit">Internal Unit</b-form-checkbox>
                    <b-form-checkbox v-model="selected" value="Performance">Performance</b-form-checkbox>
                    <b-form-checkbox v-model="selected" value="Research Labratory">Research Labratory</b-form-checkbox>
                </div>
                <div class="checkbox-child">
                    <b-form-checkbox v-model="selected" value="Certificate Program">Certificate Program</b-form-checkbox>
                    <b-form-checkbox v-model="selected" value="Library">Library</b-form-checkbox>
                    <b-form-checkbox v-model="selected" value="Publication">Publication</b-form-checkbox>
                    <b-form-checkbox v-model="selected" value="Student Organization">Student Organization</b-form-checkbox>
                </div>
            </div>
        </b-col>
        </b-row>
        <h2> selected: {{selected}}</h2>
    </div>
</template>
<script>
export default {
    name: 'PartB',
    data: function(){
        return{
            selected: 'College'
        }
    }
}
</script>
<style scoped>
.checkbox-group{
    display: flex;
    justify-content: flex-start;
}
.checkbox-child{
    margin-right: 6px;
}
</style>