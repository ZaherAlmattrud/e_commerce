<template>
  <div class="drawer">
    <v-navigation-drawer location="right" temporary v-model="drawer">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
        ducimus, ab cumque totam quas ipsam tempore alias quasi! Facere quam
        perferendis quos, fuga omnis totam voluptatibus quas possimus nulla ea?
      </p>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  inject: ["emitter"],
  data: () => ({
    drawer: false,
  }),
  mounted() {
    this.emitter.on("openDrawer", () => {
      this.drawer = !this.drawer;
    });
  },
};
</script>
<style scoped>

</style>
