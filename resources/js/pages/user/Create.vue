<template>
    <Nav></Nav>

    <br>
    <br>

    <div class="container mt-5">
        <div class="card-content">
            <div class="card ">
                <div class="card-body">
                    <h1 class="card-title text-danger">Add User </h1>
        <div class="alert alert-success" role="alert" v-if="success">
           {{successMessage}}
        </div>
        <div class="alert alert-danger" role="alert" v-if="failed">
            {{failedMessage}}
        </div>
        <form @submit.prevent="submitForm">
            <div class="mb-3">
                <label for="name" class="form-label">Name:</label>
                <input class="form-control" type="text" id="name" v-model="name"
                       :class="{
                      'is-invalid': v$.name.$error,
                      'is-valid': !v$.name.$invalid,
                    }"/>
                <div v-if="v$.name.$error" class="invalid-feedback mb-2">
                      <span>
                        {{  v$.name.$errors[0].$message}}
                      </span>
                </div>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" class="form-control" id="email" v-model="email"   :class="{
                      'is-invalid': v$.email.$error,
                      'is-valid': !v$.email.$invalid,
                    }">
                <div v-if="v$.email.$error" class="invalid-feedback mb-2">
                      <span>
                        {{  v$.email.$errors[0].$message}}
                      </span>
                </div>
            </div>
            <div class="mb-3">
                <label for="birthday" class="form-label">BirthDay:</label>
                <input class="form-control" type="date" id="birthday" v-model="birthday"   :class="{
                      'is-invalid': v$.birthday.$error,
                      'is-valid': !v$.birthday.$invalid,
                    }"/>
                <div v-if="v$.birthday.$error" class="invalid-feedback mb-2">
                      <span>
                        {{ v$.birthday.$errors[0].$message }}
                      </span>
                </div>
            </div>
            <div class="mb-3">
                <label for="birthday" class="form-label">Password:</label>
                <input class="form-control" type="password" id="birthday" v-model="password"   :class="{
                      'is-invalid': v$.password.$error,
                      'is-valid': !v$.password.$invalid,
                    }"/>
                <div v-if="v$.password.$error" class="invalid-feedback mb-2">
                      <span>
                        {{ v$.password.$errors[0].$message }}
                      </span>
                </div>
            </div>
            <button type="submit"  class="btn btn-success">save </button>
            <router-link :to="{name:'list-user'}" class="btn btn-outline-danger m-1">Back</router-link>
        </form>

    </div>
            </div>
        </div>
    </div>
</template>

<script>
import Form from 'vform'
import {email, required,minLength} from "@vuelidate/validators";
import useValidate from "@vuelidate/core";
import Nav from "../../components/Nav.vue";
export default {
    components: {Nav},
    data() {
        return {
         v$: useValidate(),
         name: '',
         email: '',
         birthday:'',
         password:'',
         form: null,
         success: false,
         failed: false,
         successMessage: "User Added Successfully",
         failedMessage: "Failed To  Add User ",

        }
    },
    validations: {
        name: { required ,minLength:minLength(8)},
        email: { required, email },
        password: { required, minLength:minLength(8)},
        birthday: { required }
    },

    methods: {
        resetForm() {
            this.name = ''
            this.email = ''
            this.birthday = ''
            this.password = ''
            this.v$.$reset()
        },
        collectData() {
            this.form = new Form({
                name: this.name,
                email: this.email,
                birthday: this.birthday,
                password: this.password,
            })
        },
        submitForm() {
            this.v$.$validate()
            if (!this.v$.$error) {
                this.collectData()
                this.save()
            }
        },
        async save() {
            try{
                const response = await this.form.post('/api/users')
                this.success = true
                this.resetForm()
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
        }
    },


}
</script>
