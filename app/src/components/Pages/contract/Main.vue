<template>
    <div class='container-fluid vue-contract'>
        <h1 class='title text-center'>Contracts</h1>
        <div class="container text-center">
            <div class="d-inline-flex">
                <router-link to='/'>
                    <h2>
                        <i class="fas fa-home"></i>
                    </h2>
                </router-link>
            </div>
            <div class='container'>
                <div>
                    <h3>Rates</h3>
                    All contracts are priced based on expected hours, and depending on platform. 
                    You can always ask for pricing by reaching out to <a href='mailto:info@pemery.co'>info@pemery.co</a>, but you can get an approximation using the <router-link to='rate-calculator' append>Rate Calculator</router-link>.
                </div>
                <div class='mt-4'>
                    <router-link to='rate-calculator' class="btn border-light mx-2" append>Rate Calculator</router-link>
                    <router-link to='portfolio' class="btn border-light mx-2" append>Contract Portfolio</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    a {
        color: inherit;
        cursor: pointer;
    }
    .vue-contract {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
</style>

<script>
    export default {
        methods: {}
    }
</script>