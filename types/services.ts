import { IProject } from "./project";
import { Service } from "./serviceCard";

export interface IServices {
    slug: string,
    title: string,
    description: string,
    projects: Array<IProject>,
    services: Array<Service>
}