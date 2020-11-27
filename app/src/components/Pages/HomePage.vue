<template>
    <div class='container-fluid vue-homepage'>
        <h1 class='title text-center'>Patrick Emery</h1>
        <div class="container text-center">
            <div>
                <h4>
                    <i class="fas fa-phone mr-3"></i>
                    <a href="tel:+15204772587">
                        +1 (520) 477-2587
                    </a>
                </h4>
            </div>
            <div>
                <h4>
                    <i class="fas fa-envelope mr-3"></i>
                    <a href="mailto:info@pemery.co">
                        info@pemery.co
                    </a>
                </h4>
            </div>
            <div>
                <div class="d-inline-flex">
                    <a href='https://github.com/ssblur/' title='Github'>
                        <h2>
                            <i class="fab fa-github mx-2"></i>
                        </h2>
                    </a>
                </div>
                <div class="d-inline-flex">
                    <a href='https://twitter.com/SSBlur' title='Twitter'>
                        <h2>
                            <i class="fab fa-twitter mx-2"></i>
                        </h2>
                    </a>
                </div>
            </div>
        </div>
        <div class="container text-center mt-5">
            <div class='mt-1' hidden> <!-- Once this is done it will be re-added. -->
                <router-link to='/contract' class='btn border-light'><h4>Contracts</h4></router-link>
            </div>
            <div class='mt-1'>
                <router-link to='/resume' class='btn border-light'><h4>Resume</h4></router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
    a {
        color: inherit;
        cursor: pointer;
    }
    .vue-homepage {
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