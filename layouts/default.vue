<template>
  <div>
    <!-- the header bar -->
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <div id="logo-header">
        <img id="cu-logo" src="/cu-logo.png" height="30px" width="auto" alt="cu boulder logo" />
        <b-navbar-brand href="/">ATOZ Admin Panel</b-navbar-brand>
      </div>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <nuxt-link to="/" class="nav-link" >Start</nuxt-link>
          <nuxt-link to="/editOrgs" class="nav-link">Edit Orgs</nuxt-link>
          <nuxt-link to="/faqs" class="nav-link">FAQs</nuxt-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- nuxt body -->
    <div id="nuxt-wrapper">
      <nuxt />
    </div>
    <!-- contact info -->
    <footer id="contact-footer">
      <h5>Contact Information</h5>
      <p>
        For Content Help:
        <br />Vicki Czech
        <br />
        <strong>Phone:</strong> 303-735-1179
        <br />
        <strong>Email:</strong>
        <a href="mailto:vicki.czech@colorado.edu">Vicki Czech</a>.
      </p>
    </footer>
  </div>
</template>
<style>
#nuxt-wrapper {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 1em;
}
#logo-header {
  display: flex;
  align-content: center;
}
#cu-logo {
  margin-top: 0.3125rem;
  margin-bottom: 0.3125rem;
  margin-right: 1em;
}
#contact-footer{
  padding-left: 5%;
  padding-top: 12px;
  margin-top: 1em;
  border-top: 1px solid grey;
}
</style>
