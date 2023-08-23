<template>
<button @click="fetchPostes"> Посты </button>
<Loader v-if="isPostLoading" />
<ul v-if="!isPostLoading && !isError">
  <CardsItem 
    v-for="post in posts" 
    :key="post.id"
    :id="post.id"
    :title="post.title"
  />
</ul>
<div v-if="isError">Ошибка при загрузке данных</div>
</template>

<script setup> 
  import {ref} from 'vue'
  import Loader from '@/components/Loader.vue'
  import CardsItem from '@/components/CardsItem.vue'

  const isPostLoading = ref(false)
  const posts = ref([])
  const isError = ref(false)
  const POSTS = 'https://jsonplaceholder.typicode.com/todos'

  async function fetchPostes () {
      isPostLoading.value = true
      isError.value = false

      await fetch(POSTS)
        .then(response => response.json())
        .then(data=> {
          posts.value = data
        })
        .catch(error =>{
          console.error('Error:', error)
          isError.value = true
        })
        .finally(
          isPostLoading.value = false
        )
  }
</script>