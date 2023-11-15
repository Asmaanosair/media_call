<template>
    <Nav></Nav>

    <br>
    <br>

    <div class="container mt-5">
        <div class="card-content">
            <div class="card ">
                <div class="card-body">
                    <h1 class="card-title text-danger">User Data</h1>
        <table class="table">
            <thead>
            <tr>
                <th scope="col" >User</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Name : </td>
                <td>{{ user.name }}</td>
            </tr>
            <tr>
                <td>Email : </td>
                <td>{{ user.email }}</td>
            </tr>
            <tr>
                <td>Birthday : </td>
                <td>{{ user.birthday }}</td>
            </tr>
            <tr>
                <td>Action : </td>
                <td>
                    <router-link :to="{name:'edit-user',params:{id:user.id}}" class="btn btn-success">Edit</router-link>
                    <router-link :to="{name:'list-user'}" class="btn btn-outline-danger m-1">Back</router-link>
                </td>
            </tr>
            </tbody>
        </table>
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
            user: {}
        }
    },
    async created() {
            const response = await axios.get(`/api/users/${this.$route.params.id}`);
            this.user = response.data.data;

    }
}
</script>
