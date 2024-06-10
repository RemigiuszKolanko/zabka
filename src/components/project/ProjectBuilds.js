import { BuildItem } from "./BuildItem";

export const ProjectBuilds = ({ builds }) => (
    builds.map((build) => (<div key={build.id}><BuildItem build={build} /></div>))
)
