<template>
    <div>
        <div v-if="loading">
            Loading...
        </div>
        <div v-else>

            <div class="flex justify-between">
                <a href="#" class="text-blue-400" @click="$router.back()">
                    < Back
                </a>
                <div class="relative">
                    <router-link
                        class="px-4 py-2 mr-2 rounded text-sm text-green-500 border border-green-600 text-sm font-bold"
                        :to="'/contacts/' + contact.contact_id + '/edit'">Edit
                    </router-link>
                    <a href="#"
                       @click="modal = ! modal"
                       class="px-4 py-2 border border-red-500 rounded text-sm font-bold text-red-500">Delete</a>
                    <div class="p-8 w-64 right-0 mt-2 mr- absolute bg-blue-900 text-white rounded-lg z-20" v-if="modal">
                        <p>Are you sure you want to delete</p>
                        <div class="flex items-center mt-6 justify-end">
                            <button class="text-white pr-4" @click="modal = ! modal">Cancel</button>
                            <button @click="destroy" class="px-4 py-2 bg-red-500 text-sm font-bold text-white">Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div @click="modal = ! modal" v-if="modal" class="bg-black opacity-25 absolute
right-0 top-0 left-0 bottom-0 z-10"></div>

            <div class="flex items-center pt-6">
                <UserCircle :name="contact.name"/>
                <p class="pl-5 text-xl">{{ contact.name }}</p>

            </div>
            <p class="pt-6 text-gray-600 font-bold uppercase text-sm">Contact</p>
            <p class="pt-2 text-blue-400">{{ contact.email }}</p>
            <p class="pt-6 text-gray-600 font-bold uppercase text-sm">company</p>
            <p class="pt-2 text-blue-400">{{ contact.company }}</p>
            <p class="pt-6 text-gray-600 font-bold uppercase text-sm">Birthday</p>
            <p class="pt-2 text-blue-400">{{ contact.birthday }}</p>
        </div>
    </div>
</template>

<script>

    import UserCircle from "../components/UserCircle";

    export default {
        name: "ContactsShow",

        mounted() {
            axios.get('/api/contacts/' + this.$route.params.id)
                .then(res => {
                    this.contact = res.data.data;

                    this.loading = false;
                })
                .catch(e => {
                    this.loading = false;
                    if (e.response.status === 404) {
                        this.$router.push('/contacts');
                    }
                })
        },


        data: () => {
            return {
                contact: null,
                loading: true,
                modal: false,
            }
        },

        components: {
            UserCircle,
        },

        methods: {
            destroy() {
                axios.delete('/api/contacts/' + this.$route.params.id)
                    .then(r => {
                        this.$router.push('/contacts');
                    })
                    .catch(e => {
                        alert('unable to delete')
                    })
            }
        }
    }
</script>

<style scoped>

</style>
