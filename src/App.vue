<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useMeta } from 'quasar'
import metaStore from 'src/store/meta'

export default defineComponent({
  name: 'App',
  setup() {
    const { title } = metaStore()
    useMeta({ title })
  },
})
</script>
