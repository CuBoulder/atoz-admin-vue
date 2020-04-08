<template>
  <div>
    <h1>FAQs</h1>
    <h4>Dont use the back button. Use the Menu to navigate</h4>
    <b-tabs pills>
      <br/>
      <b-tab title="Editing Org/Dept Listings" active>
        <!-- begin faqs -->
        <div class="faq-div" v-b-toggle.collapse-1>
            <img src="/expand.png" alt="see answer" width="15px" />
            <p>How do I edit my deparment's information?</p>
        </div>
        <br/>
        <b-collapse id="collapse-1">
            <b-card>
                Select the department you'd like to edit from the drop-down menu in the gray box on the right hand side of the "Start" tab. Then click on the tab labeled "Step 2: Edit Organization."
                Once you are on the "Step 2" tab, click on the gray bar marked "Step A: Organization Tree" to expand that section. Highlight the name of your department. Then use the sections beneath the other gray bars (Details, Members, Phone Numbers, Location) to change information like phone numbers, addresses, and more.
            </b-card>
        </b-collapse>
        <!-- new q/a -->
        <div class="faq-div" v-b-toggle.collapse-2>
            <img src="/expand.png" alt="see answer" width="15px" />
            <p>How do I add a new unit and the appropriate people under that unit?</p>
        </div>
        <br/>
        <b-collapse id="collapse-2">
            <b-card>
                To add a new unit, go to the "Step 2" tab. Use the Organization Tree to find and click on the unit that the new unit will be nested beneath. For example, if you wanted to add a research lab to the Center for Advanced Weaving Apparatus in the Department of Underwater Basket Weaving, you would highlight the name of the center in the Organization Tree. Then click the "Add subunit" button at the bottom of the page. A box will pop up in which you can type the information for the new unit.
                To assign members to the new unit, you may either go back to Step 1 to create a new affiliation for each person you need to add to the unit, or you may add them from the gray bar on the Step 2 tab marked "Step C: Unit Members."
                To add members under the Members bar, first highlight the new unit in the Organization Tree. Then type any part of their name into the "Search" box. A list of probable matches will appear. Click on the name of the person for whom you are searching. Then click "Add Member." The person's name should now appear in the Ordered Alphabetically box.
            </b-card>
        </b-collapse>
        <!-- new q/a -->
        <div class="faq-div" v-b-toggle.collapse-3>
            <img src="/expand.png" alt="see answer" width="15px" />
            <p>How do I delete a unit?</p>
        </div>
        <br/>
        <b-collapse id="collapse-3">
            <b-card>
                Please double-check yourself when you delete a unit, as this action cannot be undone. If you delete the wrong unit, you will have to re-enter all of the information associated with that unit.
                To delete a unit, highlight in the Organization Tree on the Step 2 tab. Then click on the "Delete Subunit" button at the bottom of the page.
            </b-card>
        </b-collapse>
        <!-- new q/a -->
        <div class="faq-div" v-b-toggle.collapse-4>
            <img src="/expand.png" alt="see answer" width="15px" />
            <p>What do I do if I can find a subunit using the online A to Z search, but I don't see it in my organizational tree?</p>
        </div>
        <br/>
        <b-collapse id="collapse-4">
            <b-card>
                During the transition to the online updating, some units may have been organized incorrectly. Please contact us if this is the case for one of your units and you cannot fix the problem in the admin panel.
            </b-card>
        </b-collapse>
        <!-- new q/a -->
        <div class="faq-div" v-b-toggle.collapse-5>
            <img src="/expand.png" alt="see answer" width="15px" />
            <p>What if my unit has multiple phone numbers?</p>
        </div>
        <br/>
        <b-collapse id="collapse-5">
            <b-card>
                To add phone numbers to a unit, go to the "Step 2" tab. Use the Organization Tree to find and click on the unit. Then click on the gray bar marked "Phone Numbers." Click on the "Add Number" button. Type a description of the number in the "Description" field (e.g. Information, Fax, TTY) and type the phone number in the "Number" field. If you need to add another phone number, simply click the "Add Number" button again and repeat the process.
            </b-card>
        </b-collapse>
        <!-- new q/a -->
        <div class="faq-div" v-b-toggle.collapse-6>
            <img src="/expand.png" alt="see answer" width="15px" />
            <p>How do I organize the people under a unit?</p>
        </div>
        <br/>
        <b-collapse id="collapse-6">
            <b-card>
                To add phone numbers to a unit, go to the "Step 2" tab. Use the Organization Tree to find and click on the unit. Then click on the gray bar marked "Phone Numbers." Click on the "Add Number" button. Type a description of the number in the "Description" field (e.g. Information, Fax, TTY) and type the phone number in the "Number" field. If you need to add another phone number, simply click the "Add Number" button again and repeat the process.
            </b-card>
        </b-collapse>
        <!-- new q/a -->
        <div class="faq-div" v-b-toggle.collapse-7>
            <img src="/expand.png" alt="see answer" width="15px" />
            <p>How do I include people in my department listing that are associated with, not employed, my department?</p>
        </div>
        <br/>
        <b-collapse id="collapse-7">
            <b-card></b-card>
        </b-collapse>
        <!-- new q/a -->
        <div class="faq-div" v-b-toggle.collapse-8>
            <img src="/expand.png" alt="see answer" width="15px" />
            <p>How do I rename a subunit in my department?</p>
        </div>
        <br/>
        <b-collapse id="collapse-8">
            <b-card></b-card>
        </b-collapse>
        <!-- new q/a -->
        <div class="faq-div" v-b-toggle.collapse-9>
            <img src="/expand.png" alt="see answer" width="15px" />
            <p>I accidentally deleted a subunit from my organizational tree, how do I get it back?</p>
        </div>
        <br/>
        <b-collapse id="collapse-9">
            <b-card></b-card>
        </b-collapse>
        <!-- new q/a -->
        <div class="faq-div" v-b-toggle.collapse-10>
            <img src="/expand.png" alt="see answer" width="15px" />
            <p>How do I list labs by location or people by specialty (e.g. library bibliographers)?</p>
        </div>
        <br/>
        <b-collapse id="collapse-10">
            <b-card></b-card>
        </b-collapse>
      </b-tab>
      <!-- New tab -->
      <b-tab title="Editing People">
        <!-- new q/a -->
        <div class="faq-div" v-b-toggle.collapse-11>
            <img src="/expand.png" alt="see answer" width="15px" />
            <p>How do I edit an individual's phone number or other information?</p>
        </div>
        <br/>
        <b-collapse id="collapse-11">
            <b-card>
            </b-card>
        </b-collapse>
        <!-- new q/a -->
        <div class="faq-div" v-b-toggle.collapse-12>
            <img src="/expand.png" alt="see answer" width="15px" />
            <p>How do I check my listing after I made my changes?</p>
        </div>
        <br/>
        <b-collapse id="collapse-12">
            <b-card>
            </b-card>
        </b-collapse>
        <!-- new q/a -->
        <div class="faq-div" v-b-toggle.collapse-13>
            <img src="/expand.png" alt="see answer" width="15px" />
            <p>What if I made my changes and realized I forgot something or made a mistake?</p>
        </div>
        <br/>
        <b-collapse id="collapse-13">
            <b-card>
            </b-card>
        </b-collapse>
        <!-- new q/a -->
        <div class="faq-div" v-b-toggle.collapse-14>
            <img src="/expand.png" alt="see answer" width="15px" />
            <p>Why are some of the fields shaded gray and won't let me edit them?</p>
        </div>
        <br/>
        <b-collapse id="collapse-14">
            <b-card>
            </b-card>
        </b-collapse>
        <!-- new q/a -->
        <div class="faq-div" v-b-toggle.collapse-15>
            <img src="/expand.png" alt="see answer" width="15px" />
            <p>I have a person who has multiple Unit/Working Titles, how do I add these?</p>
        </div>
        <br/>
        <b-collapse id="collapse-15">
            <b-card>
            </b-card>
        </b-collapse>
        <!-- new q/a -->
        <div class="faq-div" v-b-toggle.collapse-16>
            <img src="/expand.png" alt="see answer" width="16px" />
            <p>How do I give someone employed by my department a Unit/Working Title for a unit in another department (e.g. A history professor who also teaches for the Department of Sociology)?</p>
        </div>
        <br/>
        <b-collapse id="collapse-16">
            <b-card>
                Each department has control of how their directory listing appears, so you will not be able to add a Unit/Working Title for someone in your department and have it appear in another department's listing. You should contact the other department if you are concerned about this.
            </b-card>
        </b-collapse>
        <!-- new q/a -->
        <div class="faq-div" v-b-toggle.collapse-17>
            <img src="/expand.png" alt="see answer" width="15px" />
            <p>What do I do if someone is missing from my listing or I need to add a new person?</p>
        </div>
        <br/>
        <b-collapse id="collapse-17">
            <b-card>
                All university employees should have a PeopleSoft record. If you cannot find a person in your list of people on the tab labeled "Step 1," first ask your PeopleSoft liaison to make sure that there is a PeopleSoft record for this person. It will take about 24 hours for new records to appear in the admin panel. If the person's name still doesn't show up in your list after 24 hours, or they are not university employees, please contact us.
            </b-card>
        </b-collapse>
        <!-- new q/a -->
        <div class="faq-div" v-b-toggle.collapse-18>
            <img src="/expand.png" alt="see answer" width="15px" />
            <p>My director does not want her direct phone number listed under her name, how do I reassign her phone number so that the number listed is actually her assistants phone number?</p>
        </div>
        <br/>
        <b-collapse id="collapse-18">
            <b-card>
                You will have to go to the director's record in PeopleSoft and input her assistant's phone number there.
            </b-card>
        </b-collapse>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  name: "FAQPage"
};
</script>

<style scoped>
.faq-div {
  border-bottom: 1px solid black;
  padding-bottom: 1em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 0.5em;
}
p {
  margin: 0px;
  margin-left: 1em;
}
.faq-div:hover {
  cursor: pointer;
}
.collapse.show {
  margin-bottom: 0.5em;
}
</style>
