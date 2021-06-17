import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Relationship from "@/components/Relationship.vue";

describe("Relationship.vue", () => {
  it("displays its title", () => {
    const wrapper = shallowMount(Relationship);
    expect(wrapper.text()).to.include("Relationship");
  });
});
