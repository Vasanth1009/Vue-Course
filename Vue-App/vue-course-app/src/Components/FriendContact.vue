<template>
  <li>
    <h2>{{ friend.name }} {{ favorite }}</h2>
    <button @click="showAndHideDetails">{{ details ? "Hide" : "Show" }} Details</button>
    <button @click="">{{ favorite ? "Hide" : "Show" }}Favorite</button>
    <ul v-if="details">
      <li><strong>Phone: </strong>{{ friend.phone }}</li>
      <li><strong>Email: </strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      details: false,
    };
  },
  methods: {
    showAndHideDetails() {
      this.details = !this.details;
    },
  },
};
</script>
