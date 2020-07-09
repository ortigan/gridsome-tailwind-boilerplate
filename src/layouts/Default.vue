  <template>
    <div>
      <vs-button>
        Active
      </vs-button>
    <button class="bg-blue-500 rounded">
      Button
    </button>
     <vs-button
        icon
        :active="active == 0"
        @click="active = 0"
      >
        <i class='bx bx-home-alt'></i>
      </vs-button>
    </div>
  </template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
