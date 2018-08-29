<template>
    <div>
        <div class="toast-simple" @click='toast'>
            <slot></slot>
        </div>
        <section class="toast-container" v-if="show">
            <div class="toast" v-bind:class="[visible?'fade-in':'fade-out']">
                <span>{{message}}</span>
            </div>
        </section>
    </div>
</template>
<style lang="scss">
    @keyframes fade-in {
        0% {
            opacity: 0;
            transform: scale(0.7);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
    @keyframes fade-out {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0.7);
        }
    }
    .toast-container{
        position: absolute;
        left: 0;
        top:0;
        bottom: 0;
        right:0;
        z-index: 2000;
        display: flex;
        justify-content: center;
        align-items: center;
        .fade-in{
            animation-name: fade-in;
            animation-duration: 0.5s;
            animation-fill-mode: both;
        }
        .fade-out{
            animation-name: fade-out;
            animation-duration: 0.5s;
            animation-fill-mode: both;
        }
        .toast{
            width: 180px;
            height: 60px;
            text-align: center;
            line-height: 60px;
            background-color: black;
            color: white;
            border-radius: 13px;
        }
    }
</style>
<script>
    export default{
        data(){
            return{
                visible:true,
                show: false
            }
        },
        props: ['message'],
        methods:{
            toast(){
                this.show = true;
                var that = this;
                setTimeout(() =>{
                    that.visible = false;
                    setTimeout(()=>{
                       that.show = false;
                       that.visible = true;
                   },1000)
                },800)


            }
        }
    }
</script>
