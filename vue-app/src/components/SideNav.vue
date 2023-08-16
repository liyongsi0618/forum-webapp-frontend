<template>
    <v-navigation-drawer
    permanent
    expand-on-hover
    rail
    location="right"
    >
        <template v-slot:prepend>
            <v-list-item
            lines="two"
            prepend-avatar="./src/assets/img/account-circle.svg"
            :title="name"
            ></v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <Dialog dialog-title="Register">
                <v-list-item prepend-icon="mdi-account-plus" title="Register" value="register"></v-list-item>
            </Dialog>
            <Dialog dialog-title="Log in">
                <v-list-item prepend-icon="mdi-login" title="Log in" value="sign in"></v-list-item>
            </Dialog>

            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-logout" title="Log out" value="log out"></v-list-item>
            <v-list-item prepend-icon="mdi-account-circle" title="My Account" value="account"></v-list-item>

        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';

import Dialog from './Dialog.vue';

const name = ref('')

</script>