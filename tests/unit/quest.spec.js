import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Quest from "@/components/Quest.vue";

describe("Quest.vue", () => {
  it("displays its title", () => {
    const wrapper = shallowMount(Quest);
    expect(wrapper.text()).to.include("Quest");
  });
});
