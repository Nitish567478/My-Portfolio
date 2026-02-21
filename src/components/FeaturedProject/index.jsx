import React from "react";
import images from "../images/images.jsx";
import {
  FeaturedSection,
  FeaturedTitle,
  FeaturedProjectWrapper,
  FeaturedImage,
  FeaturedContent,
  FeaturedProjectTitle,
  FeaturedDescription,
  FeaturedLinks,
  ProjectLink,
  ProjectTech,
  TechTag
} from "./StyleComponents";

const FeaturedProject = () => {
  return (
    <FeaturedSection>
      <FeaturedTitle>Featured Project</FeaturedTitle>

      <FeaturedProjectWrapper>
        <FeaturedImage>
          <img
            src={images.barber}
            alt="Barber Shop Website"
          />
        </FeaturedImage>

        <FeaturedContent>
          <FeaturedProjectTitle>
            Barber Shop Website
          </FeaturedProjectTitle>

          <FeaturedDescription>
            Modern barber shop website featuring real-time booking system,
            dynamic service listings, team profiles, and fully responsive
            UI/UX design across all devices.
          </FeaturedDescription>

          <FeaturedLinks>
            <ProjectLink
              href="https://your-barber-site.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo ↗
            </ProjectLink>

            <ProjectLink
              href="https://github.com/nitishyadav47/barber-shop-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code ↗
            </ProjectLink>
          </FeaturedLinks>

          <ProjectTech>
            <TechTag>React</TechTag>
            <TechTag>Tailwind CSS</TechTag>
            <TechTag>Node.js</TechTag>
            <TechTag>MongoDB</TechTag>
          </ProjectTech>
        </FeaturedContent>
      </FeaturedProjectWrapper>
    </FeaturedSection>
  );
};

export default FeaturedProject;