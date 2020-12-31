<template>
  <ul>
    <resource-list
      v-for="resource in resources"
      :key="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
    ></resource-list>
  </ul>
</template>

<script>
import ResourceList from './Resource-List.vue';
export default {
  components: { ResourceList },
  props: ['resources'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
