<template>
 <button @click="transitionMain">Main</button>
 <button @click="transitionList">List</button>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  
  function transitionList() {
    router.push('/list')
  }

  function transitionMain() {
    router.push('/main')
  }
</script>