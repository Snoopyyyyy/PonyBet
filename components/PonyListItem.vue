<template>
    <li>
        <a :href="'/poney/'+pony.id"> {{ pony.name }} - {{ pony.odd }}</a>
    </li>
</template>

<script lang="ts">
import { Pony } from '~/plugins/models';

export default {
    name: 'PonyListItemComponent',
    props: {
        pony: {
            type: Object, 
            default() {
                return new Pony();
            }
        }
    }
}
</script>

<style>

</style>