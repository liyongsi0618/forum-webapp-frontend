<template>
    <v-sheet rounded="lg">
        <v-list rounded="lg" class="py-0">
            <!-- 边栏标题栏 -->
            <v-list-item
                density="compact"
                base-color="white"
                height="50px"
                class="justify-center"
                style="background-color: royalblue;"
            >
                <v-list-item-title style="font-weight: bold;">
                    <slot />
                </v-list-item-title>
            </v-list-item>

            <v-divider></v-divider>

            <!-- 边栏内容栏 -->
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

