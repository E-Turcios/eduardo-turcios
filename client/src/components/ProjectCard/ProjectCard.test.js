import { screen, render } from "@testing-library/react";
import ProjectCard from "./ProjectCard";

describe("ProjectCard", () => {
  const props = {
    projectName: "Ed's App",
    technologies: ["react", "express", "postgress"],
    githubLink: "https://www.github.com",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque molestias fugiat ullam. Dolor, eveniet aliquid rem illo cumque tenetur autem fugiat asperiores dolores voluptatem porro pariatur! Expedita cupiditate neque dicta!",
    imgSrc: "",
  };
  beforeEach(() => {
    render(<ProjectCard {...props} />);
  });
  it("Check to see if text from props has rendered", () => {
    expect(screen.getByText(props.projectName)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
  });

  it("check if technologies array have rendered", () => {
    props.technologies.map((t) => {
      expect(screen.getByText(t)).toBeInTheDocument();
    });
  });

  it("check if github button links to correct github page", () => {
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      props.githubLink
    );
  });
});
