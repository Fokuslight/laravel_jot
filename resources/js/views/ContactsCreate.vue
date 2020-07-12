<template>
    <div>
        <form @submit.prevent="submitForm">
            <InputField :errors="errors" @update:field="form.name = $event" name="name" label="Contact Name" placeholder="Contact Name"/>
            <InputField :errors="errors" @update:field="form.email = $event" name="email" label="Contact Email"
                        placeholder="Contact Email"/>
            <InputField :errors="errors" @update:field="form.company = $event" name="company" label="Company" placeholder="Company"/>
            <InputField :errors="errors" @update:field="form.birthday = $event" name="birthday" label="Contact Birthday"
                        placeholder="MM/DD/YYYY"/>

            <div class="flex justify-end">
                <button
                    class="text-red-700 border hover:border-red-700 mr-4 py-2 px-4 rounded ">Cancel
                </button>
                <button
                    class="hover:bg-blue-400 bg-blue-500 py-2 rounded text-white px-4">Add New Content
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
                axios.post('/api/contacts', this.form)
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
