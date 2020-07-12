<template>
    <div>
        <div
            class="bg-black opacity-25 absolute right-0 left-0 top-0 bottom-0 z-10"
            v-if="focus" @click="focus = false"></div>
        <div class="relative z-10">
            <div class="absolute">
                <svg viewBox="0 0 24 24" class="w-5 h-5 mt-2 ml-2">
                    <path fill-rule="evenodd"
                          d="M20.2 18.1l-1.4 1.3-5.5-5.2 1.4-1.3 5.5 5.2zM7.5 12c-2.7 0-4.9-2.1-4.9-4.6s2.2-4.6 4.9-4.6 4.9 2.1 4.9 4.6S10.2 12 7.5 12zM7.5.8C3.7.8.7 3.7.7 7.3s3.1 6.5 6.8 6.5c3.8 0 6.8-2.9 6.8-6.5S11.3.8 7.5.8z"
                          clip-rule="evenodd"/>
                </svg>
            </div>
            <input
                class="w-64 mr-6 bg-gray-200 border focus:outline-none focus:border-blue-500 focus:shadow focus:bg-gray-200 border-gray-400 pl-8 pr-3 py-1 rounded-full text-sm "
                @input="search"
                @focus="focus = true"
                type="text" placeholder="search..." id="searchTerm" v-model="searchTerm">

            <div v-if="focus"
                 class="absolute bg-blue-900 text-white rounded-lg p-4 w-96 right-0 mr-6 mt-2 shadow z-20">

                <div v-if="results == 0">NO results for '{{ searchTerm}}'</div>
                <div v-else>
                    <div v-for="result in results" @click="focus = false">
                        <router-link
                            class="flex border-b p-4 border-gray-400 items-center hover:bg-gray-100"
                            :to="result.links.self">
                            <UserCircle :name="results.data.name"/>
                            <div class="pl-3">
                                <p class="text=blue-400 font-bold">{{ contact.data.name }}</p>
                                <p class="text=gray-600">{{ contact.data.company }}</p>
                            </div>
                        </router-link>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';
    import UserCircle from "./UserCircle";

    export default {


        name: "SearchBar",

        components: {
            UserCircle
        },


        data: () => {
            return {
                searchTerm: '',
                focus: false,
                results: null,
            }
        },


        methods: {
            search: _.debounce(function (e) {
                if (this.searchTerm.length < 3) {
                    return;
                }


                axios.post('api/search', {searchTerm: this.searchTerm})
                    .then(r => {
                        this.results = r.data.data;
                    })
                    .catch(er => {
                        console.log(er);

                    });
            }, 300)


        }
    }
</script>

<style scoped>

</style>
