<template>
    <div>
        <h1>Pony Add</h1>

        <form @submit.prevent="handlSubmit">
            <div>
                <label for="name">Nom</label>
                <input v-model="pony.name" type="text" name="name" required />
            </div>

            <div>
                <label for="color">Couleur</label>
                <input v-model="pony.color" type="color" name="color" required />
            </div>

            <div>
                <label for="odd">Cote</label>
                <input v-model="pony.odd" type="number" name="odd" required />
            </div>

            <input type="submit" value="ajouter" />
        </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Pony } from '~/plugins/models';

export default Vue.extend({
    name: 'PonyAddPage',
    asyncData({ serviceManager }) {
        return {
            pony: new Pony(),
        }
    },
    methods: {
        handlSubmit: async function() {
            await this?.$parent?.$serviceManager.ponyService.create(this.pony);
            console.log('yaa')
        }
    }
})
</script>
  