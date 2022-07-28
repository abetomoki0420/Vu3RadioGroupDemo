<script setup lang="ts">
import { computed, inject } from "vue"

type Props = {
  id: string,
  label: string,
  value: string
}

type Emits = {
  "change": (v: string) => void
}

defineProps<Props>()
defineEmits<Emits>()

const radio = inject("radio") as {
  cb: (value: string) => void,
  name: string
} | undefined

const changeHandler = (value: string) => {
  if(radio){
    radio.cb(value)
  }
}

const radioGroupName = computed( () => {
  return radio?.name ?? ""
})

</script>

<template>
  <span>
    <input @change="changeHandler(value)" type="radio" :id="id" :value="value" :name="radioGroupName"/>
    <label :htmlFor="id">{{ label }}</label>
  </span>
</template>