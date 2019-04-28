<template>
  <div>
    <div class="box">
      <div class="boxHeader">
        <div class="titleName">
          <h1>
            <slot name="title"></slot>
          </h1>
          <h1 class="subtitle is-6 has-text-grey">{{ selectText }}</h1>
        </div>
        <div class="buttonsContainer">
          <b-dropdown
            v-model="dropDownSelector"
            has-link
            class="dropDown"
            aria-role="list"
            :mobile-modal="false"
          >
            <button class="button" slot="trigger">
              <span>Queries (Get Data)</span>
              <b-icon icon="menu-down"></b-icon>
            </button>

            <b-dropdown-item value="allProducts" aria-role="listitem"
              >All Products</b-dropdown-item
            >
            <b-dropdown-item value="findById" aria-role="listitem"
              >Find by ID</b-dropdown-item
            >
            <b-dropdown-item value="findByName" aria-role="listitem"
              >Find by Name</b-dropdown-item
            >
          </b-dropdown>
          <b-dropdown class="dropDown" aria-role="list" :mobile-modal="false">
            <button class="button" slot="trigger">
              <span>Mutations (Change Data)</span>
              <b-icon icon="menu-down"></b-icon>
            </button>

            <b-dropdown-item aria-role="listitem"
              >Update Product</b-dropdown-item
            >
            <b-dropdown-item aria-role="listitem"
              >Delete Product</b-dropdown-item
            >
            <b-dropdown-item aria-role="listitem"
              >Create Product</b-dropdown-item
            >
          </b-dropdown>
        </div>
      </div>
      <div v-if="dropDownSelector === 'findById'" class="findByIdContainer">
        <b-field label="Product Id">
          <b-input v-model="name"></b-input>
        </b-field>
        <a href="#" class="button">Search</a>
      </div>
      <div v-if="dropDownSelector === 'findByName'" class="findByNameContainer">
        <b-field label="Product Name">
          <b-input v-model="name"></b-input>
        </b-field>
        <a href="#" class="button">Search</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropDownSelector: "allProducts",
      id: null,
      name: null
    };
  },
  computed: {
    selectText() {
      if (this.dropDownSelector === "findById") {
        return "Find By ID";
      }
      if (this.dropDownSelector === "findByName") {
        return "Find by Name";
      }
      return "All Products";
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  margin-bottom: 50px;
  .boxHeader {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    margin-bottom: 10px;
  }
}
</style>
