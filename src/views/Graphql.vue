<template>
  <div>
    <BoxContainer class="boxContainer">
      <span class="title" slot="title">GraphQL</span>
    </BoxContainer>
    <GraphQlProducts></GraphQlProducts>
  </div>
</template>

<script>
import BoxContainer from "@/components/BoxContainer.vue";
import GraphQlProducts from "@/components/GraphQlProducts.vue";
export default {
  components: { BoxContainer, GraphQlProducts },
  data() {
    return {
      something: "All Products"
    };
  }
};
</script>

<style lang="scss" scoped>
.boxContainer {
  h1 {
    color: #167df3;
  }
}
</style>
