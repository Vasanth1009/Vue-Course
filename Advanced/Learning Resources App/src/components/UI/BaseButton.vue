<template>
    <button :type="type" :class="mode"><slot></slot></button>
</template>

<script>
export default {
    props: ['type', 'mode'],
}
</script>

<style scoped>
button {
  padding: 0.25rem 1rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  border-radius: 5%;
  font-weight: 400;
  color: white;
  cursor: pointer;
  outline: none;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>