<template>
  <div>
    <BoxContainer class="boxContainer">
      <span class="title" slot="title">Restful</span>
    </BoxContainer>
    <RestfulProducts></RestfulProducts>
  </div>
</template>

<script>
import BoxContainer from "@/components/BoxContainer.vue";
import RestfulProducts from "@/components/RestfulProducts.vue";
export default {
  components: { BoxContainer, RestfulProducts }
};
</script>

<style lang="scss" scoped></style>
