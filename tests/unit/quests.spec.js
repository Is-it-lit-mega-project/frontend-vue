import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Quests from "@/views/Quests.vue";

describe("Quests.vue", () => {
  it("displays its title", () => {
    const wrapper = shallowMount(Quests);
    expect(wrapper.text()).to.include("Quests");
  });
});
