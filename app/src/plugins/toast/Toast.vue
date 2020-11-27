<template>
    <div class='container toast-container'>
        <div v-for='message in messages' :key='message.id' :class='"card vue-toast " + message.style'>
            <div class='card-body'>
                <div class='card-title'>
                    <h4><i v-if='message.icon' :class="'fas fa-' + message.icon"></i> {{ message.title }}</h4>
                </div>
                <div class='cart-text'>{{ message.content }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    @keyframes vue-toast-slide-up {
        from { transform: translate(0, 100%); }
        to { transform: translate(0, 0%); }
    }

    .vue-toast {
        display: inline-block;
        width: calc(50% - 15px);
        animation: vue-toast-slide-up 1s;
    }
    
    .toast-container {
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
    }
</style>

<script>
    export default {
        data() {
            return {
                messages: this.$toast.messages(),
            }
        }
    }
</script>