<template>
    <div>
        <div v-if="loading">Loading</div>
        <div v-else>
            <div v-if="contacts.length === 0">
                <p>No contacts yet.
                    <router-link to="/contacts/create"> Get Started</router-link>
                </p>
            </div>
            <div v-else>
                <div v-for="contact in contacts">
                    <router-link
                        class="flex border-b p-4 border-gray-400 items-center hover:bg-gray-100"
                        :to="'/contacts/' + contact.data.contact_id">
                        <UserCircle :name="contact.data.name"/>
                        <div class="pl-4">
                            <p class="text=blue-400 font-bold">{{ contact.data.name }}</p>
                            <p class="text=gray-600">{{ contact.data.company }}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import UserCircle from "./UserCircle";
    export default {
        name: "ContactsList",


        components: {
            UserCircle
        },

        props: [
          'endpoint'
        ],


        data: () => {
            return {
                loading: true,
                contacts: null,
            }
        },

        mounted() {
            axios.get(this.endpoint)
                .then(r => {
                    this.contacts = r.data.data;
                    this.loading = false;
                })
                .catch(e => {
                    this.loading = false;
                    aler('unable to fetch');
                });
        },
    }
</script>

<style scoped>

</style>
