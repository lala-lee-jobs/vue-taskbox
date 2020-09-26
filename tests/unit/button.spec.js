import { shallowMount } from "@vue/test-utils";
import Button from '@/stories/Button.vue';

describe("Button.vue", () => {

  it("Renders button text using a label prop", () => {
    const label = "Test Button";
    const wrapper = shallowMount(Button, {
      propsData: { label }
    });
    expect(wrapper.text()).toBe('Test Button');
  });

});