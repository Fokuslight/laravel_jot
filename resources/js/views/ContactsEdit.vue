<template>
    <div>
        <div class="flex justify-between">
            <a href="#" class="text-blue-400" @click="$router.back()">
                < Back
            </a>
        </div>
        <form @submit.prevent="submitForm">
            <InputField :errors="errors" @update:field="form.name = $event"
                        :data="form.name" name="name" label="Contact Name" placeholder="Contact Name"/>
            <InputField :errors="errors" @update:field="form.email = $event"
                        :data="form.email" name="email" label="Contact Email"
                        placeholder="Contact Email"/>
            <InputField :errors="errors" @update:field="form.company = $event"
                        :data="form.company" name="company" label="Company" placeholder="Company"/>
            <InputField :errors="errors" @update:field="form.birthday = $event"
                        :data="form.birthday" name="birthday" label="Contact Birthday"
                        placeholder="MM/DD/YYYY"/>

            <div class="flex justify-end">
                <button
                    class="text-red-700 border hover:border-red-700 mr-4 py-2 px-4 rounded ">Cancel
                </button>
                <button
                    class="hover:bg-blue-400 bg-blue-500 py-2 rounded text-white px-4">Save changes
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    import InputField from "../components/InputField";

    export default {
        name: "ContactsCreate",

        components: {
            InputField,
        },

        mounted() {
            axios.get('/api/contacts/' + this.$route.params.id)
                .then(res => {
                    this.form = res.data.data;

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
                form: {
                    'name': '',
                    'email': '',
                    'company': '',
                    'birthday': '',
                },

                errors: null,
            }
        },

        methods: {
            submitForm() {
                axios.patch('/api/contacts/' + this.$route.params.id, this.form)
                    .then(res => {
                        //console.log(res.data.links.self);
                        this.$router.push(res.data.links.self);
                    })
                    .catch(e => {
                        this.errors = e.response.data.errors;

                    });
            }
        }
    }
</script>

<style scoped>

</style>
