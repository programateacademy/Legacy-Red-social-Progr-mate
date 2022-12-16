import HomePage from "../pages/HomePage";
import { shallow } from "enzyme";

describe("Tests para el home de la aplicación", () => {
  it("Deberia renderizarse sin Error", () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toHaveLength(1);
  });
});
