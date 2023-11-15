<template>
<!--    <div class="container">-->
<!--        <header>-->
<!--            <div class="px-3 py-2 bg-dark text-white">-->
<!--                <div class="container">-->
<!--                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">-->
<!--                        <router-link to="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">-->
<!--                            <img src="https://cdn.laraveltuts.com/wp-content/uploads/2022/06/logo-dark.webp" style="height:60px;"/>-->
<!--                        </router-link>-->
<!--                        <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">-->
<!--                            <li>-->
<!--                                <router-link :to="{name:'home'}"  class="nav-link text-white" style="text-decoration: none; color: white;">Home</router-link>-->
<!--                            </li>-->
<!--                            <li>-->

<!--                                <router-link :to="{name:'list-user'}" class="nav-link text-white" style="text-decoration: none; color: white;">-->
<!--                                   Users-->
<!--                                </router-link>-->
<!--                            </li>-->
<!--                        </ul>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </header>-->

<!--        <div class="card">-->
<!--            <div class="card-body">-->

                    <router-view></router-view>

<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

<!--    </div>-->

</template>

<script>
export default {
    name: 'App'

}
</script>
