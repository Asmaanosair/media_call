
<template>
    <Nav></Nav>

    <br>
    <br>

    <div class="container mt-5">
        <div class="card-content">
            <div class="card ">
                <div class="card-body">
                    <h1 class="card-title text-danger">Users</h1>
                    <router-link :to="{ name: 'create-user' }" class="p-2 col border btn btn-primary">Add User</router-link>
                    <div class="alert alert-success" role="alert" v-if="success">
                        {{successMessage}}
                    </div>
                    <div class="alert alert-danger" role="alert" v-if="failed">
                        {{failedMessage}}
                    </div>
                    <table class="table">
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
                        <tr v-for="user in users.data" :key="user.id">
                            <td>{{ user.id }}</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.birthday }}</td>
                            <td>
                                <div class="row gap-3">
                                    <router-link :to="{name:'show-user',params:{id:user.id}}" class=" col border btn btn-primary"> <i class="fa fa-eye"> </i>View</router-link>
                                    <router-link :to="{name:'edit-user',params:{id:user.id}}" class=" col border btn btn-success">Edit</router-link>
                                    <button @click="deleteUser(user.id)" type="button" class=" col border btn btn-danger">Delete</button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <pagination v-model="page" :records="total" :per-page="10" @paginate="paginate"/>
                </div>

            </div>
        </div>
    </div>
    <Footer></Footer>
</template>
<script>
import axios from 'axios';
import Footer from "../../components/Footer.vue";
import Main from "../../components/Main.vue";
import Header from "../../components/Header.vue";
import Nav from "../../components/Nav.vue";
export default {
    components: {Nav, Header, Main, Footer},
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
            try {
                await axios.delete(`/api/users/${id}`);
                this.users = this.users.filter(user => user.id !== id);
                this.success = true
                setTimeout(() => {
                    this.success = false
                }, 2000)
            } catch (error) {
                this.failed = true
                this.resetForm()
                setTimeout(() => {
                    this.failed = false
                }, 2000)
            }
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
