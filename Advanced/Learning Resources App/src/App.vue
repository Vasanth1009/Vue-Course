<template>
    <the-header title="Resource List"></the-header>
    <stored-resource :resources="resources"></stored-resource>
</template>

<script>
import StoredResource from './components/Resources/StoredResource.vue';
import TheHeader from './components/Layouts/TheHeader.vue';

export default {
  components: { StoredResource, TheHeader },
  data() {
    return {
      resources: [
        {
          id: 'vue-documentation',
          title: 'Vue-Documentation',
          description: 'To get official documentation in vuejs',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'To Learn Doubts',
          link: 'https://google.com'
        }
      ]
    };
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

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
