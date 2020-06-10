<template>
    <div>
        <b-sidebar id="sidebar-1" title="Filters" no-close-on-esc no-header-close visible shadow>
            <div class="px-3 py-2">
                <div>
                    <b-input-group prepend="0" append="100" class="mt-3">
                        <b-form-input type="range" min="0" max="100"></b-form-input>
                    </b-input-group>
                </div>
            </div>
            <div class="px-3 py-2">
                <template>
                    <b-form-input list="my-list-id"></b-form-input>

                    <datalist id="my-list-id">
                        <option v-for="(state, index) in states" :key="index">{{ state }}</option>
                    </datalist>
                </template>
            </div>
            <div class="px-3 py-2">
                <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
                    <b-dropdown-item>First Action</b-dropdown-item>
                    <b-dropdown-item>Second Action</b-dropdown-item>
                    <b-dropdown-item>Third Action</b-dropdown-item>
                </b-dropdown>
            </div>
            <div class="px-3 py-2">
                <b-form-group label="Inline switch style checkboxes">
                    <b-form-checkbox-group
                            :options="options"
                            switches
                    ></b-form-checkbox-group>
                </b-form-group>
            </div>
        </b-sidebar>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
        data() {
            return {
                states: ['New South Wales', 'Victoria', 'Queensland', 'Western Australia'],
                options: [
                    { text: 'Red', value: 'red' },
                    { text: 'Green', value: 'green' },
                    { text: 'Yellow (disabled)', value: 'yellow', disabled: true },
                    { text: 'Blue', value: 'blue' }
                ]
            }
        },
        mounted() {
            this.$root.$on('bv::dropdown::show', bvEvent => {
                console.log('Dropdown is about to be shown', bvEvent)
            })
        }
    }
</script>

<style scoped>

</style>