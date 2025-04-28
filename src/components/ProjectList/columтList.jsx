export default function columnList(projects) {
return (
    <div className={'project-column-portfolio'}>
    {projects.map((project) =>
        <div className={'portfolio-img'} key={Math.random()}>
            <img src={project} alt={project} />
        </div>
    )}
</div>
)
};
