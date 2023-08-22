<template>
<button @click="fetchPostes"> Посты </button>
<Loader v-if="isPostloading" />
<ul v-if="!isPostloading && !error">
  <li v-for="post in posts" :key="post.id">
    {{ post.id }}
    {{ post.title }}
  </li>
</ul>
<div v-if="error">Ошибка при загрузке данных</div>
</template>

<script setup> 
  import {ref} from 'vue'
  import Loader from '@/components/Loader.vue'

  const isPostloading = ref(false)
  const posts = ref([])
  const error = ref(false)

  async function fetchPostes () {
      isPostloading.value = true
      error.value = false

      await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data=> {
          posts.value = data
        })
        .catch(error =>{
          console.error('Error:', error)
          error.value = true
        })
        .finally(
          isPostloading.value = false
        )
  }
</script>