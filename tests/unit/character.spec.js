import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Character from "@/components/Character.vue";

describe("Character.vue", () => {
  it("displays its title", () => {
    const wrapper = shallowMount(Character);
    expect(wrapper.text()).to.include("Character");
  });
});
