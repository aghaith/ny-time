import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layout from "./Layout";
describe("Layout", () => {
  test("renders without crashing", () => {
    const { container } = render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });
});
