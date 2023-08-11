<template>
    <v-card>
      <v-container>
            <v-card
                elevation="4"
            >
                <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
                    cover
                    max-width="200"
                >
                    <v-card-title class="text-h5">
                        Some Article title
                    </v-card-title>
                    <v-card-text>
                            Some Article content
                    </v-card-text>
                    <v-card-actions class="d-flex justify-center">
                        <v-btn 
                            icon="mdi-thumb-up-outline" 
                            size="small"
                            class="mx-5" 
                            color="surface-variant">

                        </v-btn>
                        <v-btn 
                            icon="mdi-eye-outline" 
                            size="small" 
                            class="mx-5" 
                            color="surface-variant">
                        </v-btn>
                    </v-card-actions>
                </v-img>
            </v-card>

      </v-container>
    </v-card>
</template>

  <script setup>

</script>