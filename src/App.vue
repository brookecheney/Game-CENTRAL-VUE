<template>
  <div class="section">
    <div class="container">
      <nav>
        <div class="brand">
          <img src="@/assets/logo.svg" alt />
          <h1 class="title is-2">Gaming Central</h1>
        </div>

        <div class="buttons">
          <router-link to="/graphql" class="button is-info"
            >GraphQl</router-link
          >
          <router-link to="/restful" class="button is-danger"
            >Restful</router-link
          >
        </div>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.section {
  .container {
    nav {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-bottom: 30px;
      .brand {
        display: flex;
        img {
          margin-right: 10px;
        }
      }
      .buttons {
        justify-self: end;
      }
    }
  }
}
</style>
