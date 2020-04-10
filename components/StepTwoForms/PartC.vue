<template>
    <div>
        <div id="part-c-instructions">
            <p>
                You will use this section to organize the members within a unit. There are two boxes titled "Ordered Manually" and "Ordered Alphabetically." The Alphabetical box will have a list of people drawn from the Unit/Working Titles you created in Step 1. By default, these people will be listed in alphabetical order in the directory.
                However, for some units it makes more sense to put people like the dean or director at the top of the list and allow the rest of the people to appear alphabetically below. You will use the Ordered box to do this.
            </p>
            <p>
                However, for some units it makes more sense to put people like the dean or director at the top of the list and allow the rest of the people to appear alphabetically below. You will use the Ordered box to do this.
            </p>
            <ol>
                <li>In the Alphabetical box, highlight the name of the person you want to move to the top of the list.</li>
                <li>Click on the blue "Order Manually" button to move the person into the Ordered box. Add all the people you would like to order to the Ordered box.</li>
                <li>Once you've added all the people to the Ordered box. Use the arrow buttons to move people up and down in the ordered list.</li>
                <li>To remove a person from the ordered list and reinsert them into the alphabetical list, highlight their name in the Ordered box and click the blue "Order Alphabetically" button.</li>
            </ol>
            <h4> Adding a Member </h4>
            <p>
                Some faculty members have appointments with more than one department. If this is the case in your department, you will need to add their name to your
                list of people to be associated. To add a person, type any part of their name into the "Search" box. A list of probable matches will appear. Click on the name 
                of the person for whom you are searching. Then click "Add Member." The person's name should now appear in the Alpha box. Highlight a person's name and click the "Edit Member" button to change their role in the unit or to remove them from the unit.    
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PartC'
}
</script>
<style scoped>
#part-c-instructions{
    height: 150px;
    overflow: scroll;
    border: 1px solid grey;
    padding: 6px;
    border-radius: 4px;
}
</style>