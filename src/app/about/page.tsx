"use client";

import React, { useState, useEffect } from "react";
import ModernLayout from "@/components/BookLayout";
import AboutPage from "@/components/pages/AboutPage";

export default function About() {
  const [currentSection, setCurrentSection] = useState("about");

  useEffect(() => {
    // Ensure About remains highlighted on initial load
    setCurrentSection("about");
  }, []);

  return (
    <ModernLayout currentSection={currentSection} onSectionChange={setCurrentSection}>
      <AboutPage />
    </ModernLayout>
  );
}
