<template>
    <div class="relative pb-4">
        <label
            class="absolute pt-2 text-blue-500 uppercase text-xs font-bold"
            :for="name">{{ label }}</label>
        <input
            @input="updateField()"
            v-model="value"
            type="text" :id="name" :placeholder="placeholder"
            :class="errorClassObject()"
            class="text-gray-900 pt-8 w-full focus:outline-none focus:border-blue-400 border-b pb-2">
        <p class="text-red-600 text-sm" v-text="errorMessage()">Error Here</p>
    </div>
</template>

<script>
    export default {
        name: "InputField",

        props: [
            'name',
            'label',
            'placeholder',
            'errors',
            'data',
        ],

        data: () => {
            return {
                value: '',
            }
        },

        computed: {
            hasError() {
                return this.errors && this.errors[this.name] && this.errors[this.name].length > 0;
            }
        },

        methods: {
            updateField() {

                this.clearErrors();
                this.$emit('update:field', this.value)
            },

            errorMessage() {
                if (this.hasError) {
                    return this.errors[this.name][0];
                }
            },

            clearErrors() {
                if (this.hasError) {
                    this.errors[this.name] = null;
                }
            },

            errorClassObject() {
                return {
                    'error-field': this.hasError,
                }
            }
        },


        watch: {
            data: function (val) {
                this.value = val;
            }
        }
    }
</script>

<style scoped>
    .error-field {
        @apply .border-red-500 .border-b-2;

    }
</style>
