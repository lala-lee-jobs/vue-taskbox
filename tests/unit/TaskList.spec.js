//tests/unit/TaskList.spec.js
import Vue from 'vue';
import PureTaskList from '@/components/PureTaskList.vue';
import { withPinnedTasksData } from '@/components/PureTaskList.stories';
import { mount } from "@vue/test-utils";

describe("PureTaskList.vue", () => {
  it('Renders pinned tasks at the start of the list', () => {
    const wrapper = mount(PureTaskList, {
      propsData: { tasks: withPinnedTasksData }
    });
    const firstTaskPinned = wrapper.find('.list-item:nth-child(1).TASK_PINNED');
    expect(firstTaskPinned.exists()).toBe(true)
  });
});