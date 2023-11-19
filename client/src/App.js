import ProjectCard from "./components/ProjectCard";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const props = {
  projectName: "Ed's App",
  technologies: ["react", "express", "postgress"],
  githubLink: "https://www.github.com",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque molestias fugiat ullam. Dolor, eveniet aliquid rem illo cumque tenetur autem fugiat asperiores dolores voluptatem porro pariatur! Expedita cupiditate neque dicta!",
  imgSrc: "",
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<ProjectCard {...props} />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
