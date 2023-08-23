<template>
  <li>
    {{ id }}
    {{ title }}
  </li>
</template>

<script setup>
import {defineProps} from 'vue'

defineProps({
  id: {
      type: Number,
      required: true
    },
  title: {
      type: String,
      required: true
    }
  })
</script>