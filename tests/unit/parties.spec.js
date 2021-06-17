import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Parties from "@/views/Parties.vue";

describe("Parties.vue", () => {
  it("displays its title", () => {
    const wrapper = shallowMount(Parties);
    expect(wrapper.text()).to.include("Parties");
  });
});
