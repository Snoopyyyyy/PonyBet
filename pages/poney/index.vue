<template>
    <div>
        <h1>Poney List</h1>

        <ul>
            <PonyListItem v-for="pony of ponies" :key="pony.id" :pony="pony"/>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'PonyPage',
    async asyncData({ $serviceManager }) {
        return {
            ponies: await $serviceManager.ponyService.getAll()
        }
    }
})
</script>
  