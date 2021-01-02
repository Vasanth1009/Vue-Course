<template>
    <the-header title="Resource List"></the-header>
    <the-resource></the-resource>
</template>

<script>

import TheHeader from './components/Layouts/TheHeader';
import TheResource from './components/Resources/TheResource';

export default {
  components: {  TheHeader, TheResource },
  data() {
    return {
      
    };
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Poppins', sans-serif;
}

body {
  margin: 0;
}   
</style>
