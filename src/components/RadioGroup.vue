<script setup lang="ts">
import { provide } from "vue"

type Props = {
  name: string,
  modelValue: string
}

const props = defineProps<Props>()
const emit = defineEmits(["update:modelValue"])

provide("radio", {
  cb: (value: string) => {
    emit("update:modelValue", value)
  },
  name: props.name 
})

</script>

<template>  
    <slot/>
</template>