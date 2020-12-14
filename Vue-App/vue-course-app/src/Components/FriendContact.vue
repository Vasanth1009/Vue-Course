<template>
  <li>
    <h2>{{ name }} {{ favorite === "1" ? "(Favorite)" : "" }}</h2>
    <button @click="showAndHideDetails">{{ details ? "Hide" : "Show" }} Details</button>
    <button @click="showAndHideFavorite">
      {{ favorite === "1" ? "Hide" : "Show" }} Favorite
    </button>
    <ul v-if="details">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  data() {
    return {
      details: false,
      favorite: this.isFavorite,
    };
  },
  methods: {
    showAndHideDetails() {
      this.details = !this.details;
    },
    showAndHideFavorite() {
      if (this.favorite === "1") {
        this.favorite = "0";
      } else {
        this.favorite = "1";
      }
    },
  },
};
</script>
