<script setup>

</script>

<template>

<div class="header d-flex align-items-center justify-content-center">

    <div class="text-center text-white">
      <h1>Click Here To show Welcome Message </h1>
        <p>Some representative placeholder content for the first slide.</p>
        <button form="" class="btn  btn-lg rounded-pill px-5 btn-welcome text-white" @click="showAlert" >Click Here</button>
    </div>



</div>

</template>

<script>
export default {
    name: 'Header',
    methods: {
        showAlert() {
            // Use sweetalert2
            const Toast =  this.$swal.mixin({
                position: "center",
                color:"#1F4391",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter =  this.$swal.stopTimer;
                    toast.onmouseleave =  this.$swal.resumeTimer;
                }
            });
            Toast.fire({
                title: " &#127881;  Welcome   &#127881; ",
                text: 'Thank you for visiting our website.',
            });
        },
    },
}
</script>
<style scoped>
.btn-welcome{
    background-color: #1F4391;
}
</style>
