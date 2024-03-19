import Repo from "./Repo";

const Repos = ({ repos }) => {
	return (
        <div className="main-page">
            <ol className="repo-bullet-point">
                {repos.map((repo) => (
                    <Repo key={repo.id} repo={repo} />
                ))}
                {repos.length === 0 && <p>No repos found</p>}
            </ol>
        </div>
    );
};

export default Repos