<template>
    <div class='collapsible-category' :class='{"active" : active}'>
        <div class='collapsible-category-title' @click='setActive'>{{ active ? '-' : '+' }}{{ title }}</div>
        <div class="container">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
    .collapsible-category {
        height: 50px;
        transition: height .33s;
        overflow: hidden;
    }

    .collapsible-category.active {
        height: auto;
    }

    .collapsible-category-title {
        font-size: 36px;
        height: 50px;
        cursor: pointer;
    }
</style>

<script>
    export default {
        data: () => ({
            active: true,
        }),
        props: {
            title: String,
        },
        methods: {
            setActive() {
                this.active = !this.active;
            }
        }
    }
</script>