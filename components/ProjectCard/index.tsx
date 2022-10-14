import React from "react";
import Image from "next/image";
import { IProject } from "../../types/project";
import { Card, CardDescription, CardImage, CardText, CardTitle } from "./styles";


const ProjectCard = ({ name, description, image }: IProject) => {
  return (
    <Card>
      <CardImage>
        <Image alt={`project ${name}`} src={image} layout={"fill"} />
      </CardImage>
      <CardText>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardText>
    </Card>
  );
};

export default ProjectCard;
