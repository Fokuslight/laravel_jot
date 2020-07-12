<template>
    <div>
        <ContactsList  endpoint="/api/birthdays"/>
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
