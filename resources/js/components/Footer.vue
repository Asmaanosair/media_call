<script setup>

</script>

<template>
    <div class="container-fluid footer">
        <div class="container">
        <footer class="d-flex text-white flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p class="col-md-4 text-white mb-0 ">© 2023 Company, Inc</p>

            <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
            </a>
            <ul class="nav col-md-4 text-white justify-content-end">
                <li class="nav-item ">
                    <router-link :to="{name:'home'}" class="nav-link px-2 text-white " >Home</router-link>

                </li>
                <li class="nav-item">
                    <router-link :to="{name:'list-user'}" class="nav-link px-2  text-white" >Users</router-link>
                </li>
            </ul>
        </footer>
        </div>
    </div>
</template>

<style scoped>

</style>
