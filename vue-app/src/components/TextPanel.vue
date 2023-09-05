<template>
  <v-card flat class="pa-12">
    <div class="text-subtitle-1 text-medium-emphasis">Account</div>

    <v-text-field density="compact" placeholder="Account" prepend-inner-icon="mdi-account"
      variant="outlined"></v-text-field>

    <div class="text-subtitle-1 text-medium-emphasis align-center justify-space-between">
      Password
      <!-- 链接到重置密码页面 -->
      <a 
        v-show='(props.use == "Log in")' 
        class="text-caption text-decoration-none text-blue" 
        href="#"
        rel="noopener noreferrer" 
        target="_blank"
      >Forgot login password?</a>
    </div>

    <v-text-field 
      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" 
      :type="visible ? 'text' : 'password'"
      density="compact" 
      placeholder="Enter your password" 
      prepend-inner-icon="mdi-lock-outline" 
      variant="outlined"
      @click:append-inner="visible = !visible"
    ></v-text-field>

    <v-btn block class="my-8" color="blue" size="large" variant="tonal">
      {{ props.use }}
    </v-btn>

    <v-card-text class="text-center" v-show='(props.use == "Log in")'>
      <a 
        class="text-blue text-decoration-none" 
        href="#" 
        rel="noopener noreferrer" 
        target="_blank"
      >Sign up now 
        <v-icon icon="mdi-chevron-right"></v-icon>
      </a>
    </v-card-text>

  </v-card>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref('')

const props = defineProps({
  use: String
})
</script>