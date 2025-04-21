
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Redirect to the HTML landing page
    window.location.href = "/index.html";
  }, []);

  return null;
};

export default Index;
