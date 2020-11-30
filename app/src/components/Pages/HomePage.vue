<template>
    <div class='container-fluid vue-homepage mt-5'>
        <div class="container p-3 wave-bg">
            <div class="row">
                <div class="col-md-6 col-12">
                    <h1 class='title title-grad-1 d-md-block d-none'>Patrick Emery</h1>
                    <h1 class='title title-grad-2 d-md-block d-none'>Patrick Emery</h1>
                    <h1 class='title title-grad-3 d-md-block d-none'>Patrick Emery</h1>
                    <h1 class='title title-grad-3 d-md-none d-block text-center'>Patrick Emery</h1>
                </div>
                <div class='col-md-6 col-12'>
                    <img src='icon.png' class='icon-img'>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-12 mt-4">
                    <div class='btn-group float-left'>
                        <a href='https://github.com/ssblur/' title='Github' class='btn border-light go-btn' style='vertical-align: baseline;'>
                            <i class="fab fa-github mx-2"></i>
                        </a>
                        <a href='https://twitter.com/SSBlur' title='Twitter' class='btn border-light go-btn' style='vertical-align: baseline;'>
                            <i class="fab fa-twitter mx-2"></i>
                        </a> 
                        <a @click='copyDiscord' title='Discord' class='btn border-light go-btn' style='vertical-align: baseline;'>
                            <i class="fab fa-discord mx-2"></i>
                        </a> 
                    </div>
                    <div class='btn-group float-right float-md-left ml-5'>
                        <router-link to='/contract' class='btn border-light' hidden>
                            Contracts
                        </router-link>
                        <router-link to='/resume' class='btn border-light go-btn'>
                            Resume
                        </router-link>
                    </div>
                </div>
                <div class="col-md-6 col-12 text-right mt-4">
                    <div class="w-100 mr-2">
                        <div class='m-0 p-0 float-left float-md-none'>
                            <a href="mailto:info@pemery.co" class='btn border-light'>
                                info@pemery.co
                                <i class="fas fa-envelope ml-2"></i>
                            </a>
                        </div>
                        <div class='m-0 p-0 float-right float-md-none'>
                            <a href="tel:+15204772587" class='btn border-light'>
                                +1 (520) 477-2587
                                <i class="fas fa-phone ml-2"></i>
                            </a>
                        </div>
                    </div>
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

    .icon-img {
        width: 100%;
    }

    .vue-homepage * .btn {
        border-radius: 0;
    }

    .title-grad-1 {
        text-transform: uppercase;
        opacity: 25%;
    }
    .title-grad-2 {
        text-transform: uppercase;
        opacity: 50%;
    }
    .title-grad-3 {
        text-transform: uppercase;
    }

    .go-btn:hover {
        color: var(--dark);
    }
    .go-btn:before {
        content: "";
        position: absolute;
        background: var(--light);
        bottom: 0;
        right: 0;
        left: 0;
        top: 100%;
        z-index: -1;
        transition: top 0.09s ease-in;
    }
    .go-btn:hover:before {
        top: 0;
    }

    @media (min-width: 768px){
        .icon-img {
            width: 25%;
            float: right;
        }

        .wave-bg {
            position: relative;
            overflow: hidden;
        }
        @keyframes wave-bg {
            0% {
                border-radius: 0% 0%;
                top: 50%;
            }
            50% {
                border-radius: 20% 20%;
                top: 40%;
            }
            100% {
                border-radius: 0% 0%;
                top: 50%;
            }
        }
        .wave-bg:before {
            content: "";
            display: block;
            border-radius: 100% 50%;
            width: 100%;
            height: 100%;
            position: absolute;
            left: -33%;
            top: 50%;
            background-color: var(--primary);
            z-index: -100;
            animation-name: wave-bg;
            animation-iteration-count: infinite;
            animation-duration: 7s;
        }

        .wave-bg:after {
            content: "";
            display: block;
            border-radius: 100% 50%;
            width: 100%;
            height: 100%;
            position: absolute;
            right: -33%;
            top: 50%;
            background-color: var(--primary);
            z-index: -100;
            animation-name: wave-bg;
            animation-iteration-count: infinite;
            animation-duration: 8s;
        }
    }
</style>

<script>
    export default {
        methods: {
            copyDiscord() {
                const copyField = document.createElement('textarea');
                copyField.value = "patrick emery#1224";
                document.body.appendChild(copyField);
                copyField.select();
                document.execCommand('copy');
                document.body.removeChild(copyField);

                this.$toast.success('Copied "patrick emery#1224" to the clipboard! Feel free to add me on Discord with any job requests or inqueries.');
            }
        }
    }
</script>