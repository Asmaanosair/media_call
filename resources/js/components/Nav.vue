<script setup>

</script>

<template>

<!--    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top opacity-0">-->
<!--        <div class="container-fluid">-->
<!--            <a class="navbar-brand" href="#">-->
<!--                <img src="	https://4d.sa/wp-content/uploads/2023/06/Asset-39.png" alt=""  class="d-inline-block align-text-top logo">-->
<!--            </a>-->
<!--            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">-->
<!--                <span class="navbar-toggler-icon"></span>-->
<!--            </button>-->
<!--            <div class="collapse navbar-collapse d-flex" id="navbarSupportedContent">-->
<!--            </div>-->
<!--            <div class="collapse navbar-collapse d-flex" id="navbarSupportedContent">-->
<!--                <ul class="navbar-nav me-auto mb-2 mb-lg-0  ">-->
<!--                    <li class="nav-item">-->
<!--                        <router-link :to="{name:'home'}" class="nav-link active" aria-current="page">Home</router-link>-->
<!--                    </li>-->
<!--                    <li class="nav-item">-->
<!--                    <router-link :to="{name:'list-user'}" class="nav-link" > Users</router-link>-->
<!--                    </li>-->
<!--&lt;!&ndash;                    <li class="nav-item dropdown">&ndash;&gt;-->
<!--&lt;!&ndash;                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">&ndash;&gt;-->
<!--&lt;!&ndash;                            Dropdown&ndash;&gt;-->
<!--&lt;!&ndash;                        </a>&ndash;&gt;-->
<!--&lt;!&ndash;                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">&ndash;&gt;-->
<!--&lt;!&ndash;                            <li><a class="dropdown-item" href="#">Action</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;                            <li><a class="dropdown-item" href="#">Another action</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;                            <li><hr class="dropdown-divider"></li>&ndash;&gt;-->
<!--&lt;!&ndash;                            <li><a class="dropdown-item" href="#">Something else here</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;                        </ul>&ndash;&gt;-->
<!--&lt;!&ndash;                    </li>&ndash;&gt;-->
<!--&lt;!&ndash;                    <li class="nav-item">&ndash;&gt;-->
<!--&lt;!&ndash;                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>&ndash;&gt;-->
<!--&lt;!&ndash;                    </li>&ndash;&gt;-->
<!--                </ul>-->
<!--&lt;!&ndash;                <form class="d-flex">&ndash;&gt;-->
<!--&lt;!&ndash;                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">&ndash;&gt;-->
<!--&lt;!&ndash;                    <button class="btn btn-outline-success" type="submit">Search</button>&ndash;&gt;-->
<!--&lt;!&ndash;                </form>&ndash;&gt;-->
<!--            </div>-->
<!--        </div>-->
<!--    </nav>-->

    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top opacity-0">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="https://4d.sa/wp-content/uploads/2023/06/Asset-39.png" alt="" class="d-inline-block align-text-top logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link :to="{name:'home'}" class="nav-link active" aria-current="page">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'list-user'}" class="nav-link">Users</router-link>
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
