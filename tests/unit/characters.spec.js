import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Characters from "@/views/Characters.vue";

describe("Characters.vue", () => {
  it("displays its title", () => {
    const wrapper = shallowMount(Characters);
    expect(wrapper.text()).to.include("Characters");
  });
});
