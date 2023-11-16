
<template>
    <Nav></Nav>

    <div class="container mt-5">
        <div class="card-content">
            <div class="card ">
                <div class="card-body">
                    <h1 class="card-title  text-center header-user">Users</h1>
                    <router-link :to="{ name: 'create-user' }" class="p-2 col border header-user btn btn-sm btn-warning "> <i class="fa fa-plus"></i> Add User</router-link>
                    <div class="alert alert-success mt-5" role="alert" v-if="success">
                        {{successMessage}}
                    </div>
                    <div class="alert alert-danger" role="alert" v-if="failed">
                        {{failedMessage}}
                    </div>
                    <div class="table-responsive">
                    <table class="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Birthday</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(user, index) in users.data" :key="user.id">
                            <td>{{ index+1 }}</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.birthday }}</td>
                            <td>
                                <div class="row gap-3 me-2">
                                    <router-link :to="{name:'show-user',params:{id:user.id}}" class=" col  btn btn-sm btn-outline-info"> <i class="fa fa-eye"> </i></router-link>
                                    <router-link :to="{name:'edit-user',params:{id:user.id}}" class=" col  btn btn-sm btn-outline-success"><i class="fa fa-pencil"> </i></router-link>
                                    <button @click="deleteUser(user.id)" type="button" class=" col  btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i> </button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div class="text-center d-flex justify-content-center align-items-center">
                    <pagination  v-model="page"  :records="total" :per-page="10" @paginate="paginate"/>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>
<script>
import axios from 'axios';
import Nav from "../../components/Nav.vue";
export default {
    components: {Nav},
    data() {
        return {
            users: [],
            success: false,
            total: 10,
            successMessage: "User Deleted Successfully",
            failed: false,
            page: 1,
            failedMessage: "Failed To  Delete User ",
        }
    },

     mounted() {
        this.getData()
    },
    methods: {
        async deleteUser(id) {
                await axios.delete(`/api/users/${id}`);
                this.getData()
                this.success = true
                setTimeout(() => {
                    this.success = false
                }, 2000)

        },
        paginate(page) {
            this.getData(page)
        },
        async getData(page = 1) {
            const response = await axios.get(`/api/users?page=${page}`);
            this.users = response.data.data;
            this.total=this.users.total

        },
    }
}
</script>
<style scoped>
.pagination { display: flex; justify-content: center; align-items: center; }
</style>
