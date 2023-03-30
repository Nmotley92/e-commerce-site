import { render } from "@testing-library/react";
import HomePageComponent from "./HomePageComponent";

describe("HomePageComponent", () => {
  it("renders without error", () => {
    const categories = [
      {
        id: 1,
        name: "Category 1",
        imageUrl: "https://example.com/image1.jpg",
      },
      {
        id: 2,
        name: "Category 2",
        imageUrl: "https://example.com/image2.jpg",
      },
    ];

    const { getByText } = render(<HomePageComponent categories={categories} />);

    // Check that the CarouselComponent is rendered
    expect(getByText("CarouselComponent")).toBeInTheDocument();

    // Check that the HomeIntro is rendered
    expect(getByText("HomeIntro")).toBeInTheDocument();

    // Check that each category is rendered
    categories.forEach((category) => {
      expect(getByText(category.name)).toBeInTheDocument();
      expect(getByText(`Category ${category.id}`)).toBeInTheDocument();
    });
  });
});