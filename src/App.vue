<script setup lang="ts">
import RadioGroup from "./components/RadioGroup.vue"
import Radio from "./components/Radio.vue"
import { ref } from "vue";

const selected = ref("")
</script>

<template>
  <div>selected value: {{selected}}</div>
  <RadioGroup v-model="selected" name="numbers">
    <Radio value="one" id="one" label="one"/>
    <Radio value="two" id="two" label="two"/>
    <Radio value="three" id="three" label="three"/>
    <Radio value="four" id="four" label="four"/>
    <Radio value="five" id="five" label="five"/>
  </RadioGroup>
</template>

