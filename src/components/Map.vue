<template>
    <MglMap :accessToken="accessToken" :mapStyle="mapStyle"/>
</template>

<script>
    import Mapbox from "mapbox-gl";
    import { MglMap } from "vue-mapbox";

    export default {
        name: "Map",
        components: {
            MglMap
        },
        data() {
            return {
                accessToken: "{{token}}",
                mapStyle: 'mapbox://styles/mapbox/dark-v10'
            };
        },

        created() {
            this.mapbox = Mapbox;

        }
    }
</script>

<style scoped>
    .mapboxgl-map {
        overflow: visible;
    }
</style>