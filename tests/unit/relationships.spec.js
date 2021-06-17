import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Relationships from "@/views/Relationships.vue";

describe("Relationships.vue", () => {
  it("displays its title", () => {
    const wrapper = shallowMount(Relationships);
    expect(wrapper.text()).to.include("Relationships");
  });
});
