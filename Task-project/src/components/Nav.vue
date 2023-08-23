<template>
 <button @click="transitionPage('main')">Main</button>
 <button @click="transitionPage('list')">List</button>
</template>

<script setup>
  import {useRouter} from 'vue-router'
  
  const router = useRouter()

  function transitionPage(page) {
    router.push(`/${page}`)
  }

</script>