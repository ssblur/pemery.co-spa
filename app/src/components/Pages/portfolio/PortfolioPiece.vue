<template>
    <div class='card portfolio-piece d-inline-flex'>
        <div class="card-body">
            <img v-if='image' class="card-img-top" :src='image'>
            <h3 class="card-title"> {{ title }}</h3>
            <p class="card-text" v-if='description'> {{ description }}</p>
            <div class='btn-group'>
                <a :href='link.url' class='btn border-light go-btn' v-for='link in links' :key='link.url'>
                    <i v-if='link.icon' :class='link.icon'></i>
                    {{ link.text }}
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
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

    .portfolio-piece {
        width: 100%;
    }

    @media (min-width: 992px){
        .portfolio-piece {
            box-sizing: border-box;
            margin: 5px;
            width: calc(25% - 12.5px);
        }
    }
</style>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true,
            },
            image: String,
            description: String,
            links: {
                type: Array,
                default: [],
            },
        }
    }
</script>