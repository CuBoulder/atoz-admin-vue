<template>
    <div id="review-listing-container">
        <h2> Review Listing</h2>
        <p> Printable Version </p>
        <div>
            <h3> {{$store.state.currentDepartment}} </h3>
            <p> Address Line 1</p>
            <p> Address Line 2</p>
            <p> Fax </p>
            <p> Information </p>
            <h3> Staff Directory </h3>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ReviewListing'
}
</script>
<style scoped>
#review-listing-container{
    min-height: 500px;
}
</style>