import ProjectCard from "./components/ProjectCard";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const props = {};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        index
        element={
          <ProjectCard
            projectName="some project"
            technologies={["react"]}
            githubLink="www.github.com"
            description="just some project"
            status={true}
            imgSrc="lol.png"
          />
        }
      />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
