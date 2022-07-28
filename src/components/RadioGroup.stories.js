import { userEvent, within } from "@storybook/testing-library"
import { expect } from "@storybook/jest"

import { ref } from "vue"
import RadioGroup from "./RadioGroup.vue"
import Radio from "./Radio.vue"

export default {
  component: RadioGroup
}

const Template = (args) => ({
  components: {
    RadioGroup,
    Radio
  },
  setup(){
    const value = ref("")

    return {
      value,
      args
    }
  },
  template: `
    <div data-testid="value">current value: {{ value }}</div>
    <RadioGroup v-model="value" v-bind="args">
      <Radio value="one" id="one" label="one"/>
      <Radio value="two" id="two" label="two"/>
      <Radio value="three" id="three" label="three"/>
      <Radio value="four" id="four" label="four"/>
      <Radio value="five" id="five" label="five"/>
    </RadioGroup>
  `
})

export const Default = Template.bind({})
Default.args = {
  name: "numbers"
}

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  const radios = canvas.getAllByRole("radio")

  expect(radios.length).toBe(5)

  const text = canvas.getByTestId("value")

  expect(text.innerText).toEqual("current value:")

  await userEvent.click(radios[0])

  expect(text.innerText).toEqual("current value: one")

  await userEvent.click(radios[4])

  expect(text.innerText).toEqual("current value: five")
}