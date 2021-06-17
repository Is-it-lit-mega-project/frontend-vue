import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Party from "@/components/Party.vue";

describe("Party.vue", () => {
  it("displays its title", () => {
    const wrapper = shallowMount(Party);
    expect(wrapper.text()).to.include("Party");
  });
});
