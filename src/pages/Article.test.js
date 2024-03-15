import { render } from "@testing-library/react";
import Article from "./Article";

describe("Article", () => {
  test("renders without crashing", () => {
    const { container } = render(<Article />);
    expect(container).toBeInTheDocument();
  });
});
