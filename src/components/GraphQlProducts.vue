<template>
  <div class="productsContainer">
    <div v-for="product in products" :key="product.id" class="productBox">
      <div class="productHeader">
        <div class="prodName">
          <h1 class="title is-6">{{ product.name }}</h1>
          <h1 class="subtitle is-7">{{ product.country }}</h1>
        </div>
        <p class="title is-5">${{ product.price }}</p>
      </div>
      <p class="prodId is-size-7 has-text-grey-light">ID: {{ product.id }}</p>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  data() {
    return {
      products: []
    };
  },
  apollo: {
    products: gql`
      query {
        products {
          id
          name
          price
          country
        }
      }
    `
  }
};
</script>

<style lang="scss" scoped>
.productsContainer {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  .productBox {
    border: solid 1px rgb(243, 243, 243);
    padding: 10px;
    border-radius: 5px;
    transition: all 0.5s ease;
    display: grid;
    .productHeader {
      display: grid;
      grid-template-columns: 1fr auto;
      grid-gap: 10px;
      margin-bottom: 10px;
      p {
        font-weight: 800;
      }
    }
    .prodId {
      align-self: flex-end;
    }
  }
  .productBox:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 32px -6px rgba(0, 0, 0, 0.19);
  }
}
</style>
