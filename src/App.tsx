import { Suspense, useEffect } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import { initSmoothScroll } from "./lib/smoothScroll";

function App() {
  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = initSmoothScroll();

    return () => {
      // Clean up if needed
      lenis.destroy();
    };
  }, []);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
