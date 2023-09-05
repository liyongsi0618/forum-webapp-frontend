<template>
  <v-dialog transition="dialog-top-transition" max-width="440px">
    <!-- dialog的触发，预留插槽方便其它触发方式复用 -->
    <template v-slot:activator="{ props }">
      <div v-bind="props">
        <slot></slot>
      </div>
    </template>


    <template v-slot:default="{ isActive }">
      <v-card>
        <!-- 通过props设置dialog框标题栏内容 -->
        <v-toolbar 
          color="#4169e1" 
          :title="props.dialogTitle"
        ></v-toolbar>

        <!-- dialog内嵌入文本输入区域 -->
        <TextPanel 
          :use="props.dialogTitle"
        ></TextPanel>

        <!-- 关闭dialog按钮 -->
        <v-card-actions class="justify-end">
          <v-btn 
            variant="text" 
            @click="isActive.value = false"
          >Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>


<script setup>
import TextPanel from './TextPanel.vue';


const props = defineProps({
  dialogTitle: String
})

</script>
