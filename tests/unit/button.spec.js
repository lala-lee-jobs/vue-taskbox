import { shallowMount } from "@vue/test-utils";
import Button from '@/stories/Button.vue';

describe("Button.vue", () => {

  const factory = (propsData, label = 'Button') => {
    return shallowMount(Button, {
      propsData: {
        label,
        ...propsData
      }
    })
  }

  it("Renders button text using a label prop", () => {
    const label = "Test Button";
    const wrapper = shallowMount(Button, {
      propsData: { label }
    });
    expect(wrapper.text()).toBe('Test Button');
  });

  it("Renders the button in the primary state", () => {
    const wrapper = factory({primary: true});
    expect(wrapper.classes('storybook-button--primary')).toBe(true)
  });

  it("Renders the button in the secondary state", () => {
    const wrapper = factory({primary: false});
    expect(wrapper.classes('storybook-button--secondary')).toBe(true)
  });

});