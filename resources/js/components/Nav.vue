<script setup>

</script>

<template>
<!--    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top opacity-0">-->
<!--        <div class="container-fluid">-->
<!--            <a class="navbar-brand" href="#">-->
<!--                <img src="https://4d.sa/wp-content/uploads/2023/06/Asset-39.png" alt="" class="d-inline-block align-text-top logo">-->
<!--            </a>-->
<!--            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">-->
<!--                <span class="navbar-toggler-icon"></span>-->
<!--            </button>-->
<!--            <div class="collapse navbar-collapse" id="navbarSupportedContent">-->
<!--                <ul class="navbar-nav ml-auto">-->
<!--                    <li class="nav-item">-->
<!--                        <router-link :to="{name:'home'}" class="nav-link active" aria-current="page">Home</router-link>-->
<!--                    </li>-->
<!--                    <li class="nav-item">-->
<!--                        <router-link :to="{name:'list-user'}" class="nav-link">Users</router-link>-->
<!--                    </li>-->
<!--                </ul>-->
<!--            </div>-->
<!--        </div>-->
<!--    </nav>-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div class="container">
            <a class="navbar-brand" href="#"> <img src="https://4d.sa/wp-content/uploads/2023/06/Asset-39.png" alt="" style="width:200px"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main" aria-controls="main" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa-solid fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="main">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :to="{name:'home'}" class="nav-link p-2 p-lg-3" >Home</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link p-2 p-lg-3" href="#services">Services</a>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'list-user'}" class="nav-link p-2 p-lg-3" >Users</router-link>
                    </li>


                </ul>
            </div>
        </div>
    </nav>





</template>
<script>
export default {
    name: 'Nav'

}
</script>
<style>
.logo{
    width: 60% !important;
}
</style>
