<template>

    <div
        class="border border-gray-400 rounded-full text-white bg-blue-400 w-10 h-10 flex justify-center items-center">
        {{ userCircle }}
    </div>
</template>

<script>
    export default {
        name: "UserCircle",

        props: [
            'name',
        ],

        computed: {
            userCircle() {
                return this.name.match(/[1-9a-zA-Z]/g).slice(0, 2).join('');
            }
        }


    }
</script>

<style scoped>

</style>
