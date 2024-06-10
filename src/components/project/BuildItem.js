import { dateFormatter } from '../../helpers/dateFormatter'

export const BuildItem = ({ build }) => (
    <>
        <span>Build id: {build.id}, date: {dateFormatter(build.start)}</span>
        {build.steps.map((step, index) => (<div key={index}><span>{`${index + 1}: ${step.name}`}</span></div>))}
        <hr />
    </>
);
