<template>
    <v-sheet rounded="lg">
        <v-list rounded="lg">
            <v-list-item
                link
                density="compact"
            >
                <v-list-item-title>
                    <slot />
                </v-list-item-title>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item 
                v-for="n in 9"
                :key="n"
                density="compact"
                link
            >
                <v-list-item-title>
                List Item {{ n }}
                </v-list-item-title>

            </v-list-item>
        </v-list>
    </v-sheet>
</template>

