<template>
    <div>
        <ContactsList  endpoint="/api/contacts"/>
    </div>
</template>

<script>

    import ContactsList from "../components/ContactsList";

    export default {
        name: "ContactIndex",


        components: {
            ContactsList
        }

    }

</script>

<style scoped>

</style>
