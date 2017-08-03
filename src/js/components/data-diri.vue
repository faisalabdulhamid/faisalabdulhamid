<template>
    <transition name="fade">
    <div class="main">
        <div class="diri">
            <span><router-link tag="a" to="/"><i class="fa fa-times"></i></router-link></span>
            <div class="row">
                <div class="col s6 kiri">
                    <h1 class="satu">Data</h1>
                    <h1 class="dua">Diri</h1>
                </div>
                <div class="col s6 kanan">
                    <ul>
                        <li> Nama : Faisal Abdul</li>
                        <li>Tempat, Tanggal Lahir : Tasikmalaya, 18 April 1994</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </transition>
</template>

<script>
    export default{

    }
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        opacity: 0
    }
</style>