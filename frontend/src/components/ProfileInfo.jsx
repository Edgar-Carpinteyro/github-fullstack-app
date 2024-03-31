import {formatMemberSince} from "../utils/functions";
import LikeProfile from "./LikeProfile"

const ProfileInfo = ({ userProfile }) => {

    const memberSince = formatMemberSince(userProfile?.created_at);

	return (
		<div className="main-page">
			<div>
				<div>
                    {/* User Avatar */}
                    <a href={userProfile?.html_url} target='_blank' rel='noreferrer'>
                        <img src={userProfile?.avatar_url} alt='' />
                    </a>

                    {/* View on Github */}
                    <div>
                        <LikeProfile userProfile={userProfile} />
                        <a
                            href={userProfile?.html_url}
                            target='_blank'
                            rel='noreferrer'
                        >
                            View on Github
                        </a>
                    </div>
                    
				</div>
                {/* User Bio */}
                {userProfile?.bio ? (
                    <div>
                        <p>{userProfile?.bio.substring(0, 60)}...</p>
                    </div>
                ) : null}

                	{/* Location */}
                {userProfile?.location ? (
                    <div>
                                {userProfile?.location}
                    </div>
                ) : null}

\                {/* Twitter Username */}
                {userProfile?.twitter_username ? (
                    <a
                        href={`https://twitter.com/${userProfile.twitter_username}`}
                        target='_blank'
                        rel='noreferrer'
                    >
                        {userProfile?.twitter_username}
                    </a>
                ) : null}

                {/* Member Since Date */}
                <div>
                    <p>Member since</p>
                    <p>{memberSince}</p>
                </div>

                {/* Email Address */}
                {userProfile?.email && (
                    <div>
                        <p>Email address</p>
                        <p>{userProfile.email}</p>
                    </div>
                )}

                {/* Full Name */}
                {userProfile?.name && (
                    <div>
                        <p>Full name</p>
                        <p>{userProfile?.name}</p>
                    </div>
                )}

\                {/* Username */}
                <div>
                    <p>Username</p>
                    <p>{userProfile?.login}</p>
                </div>

			</div>
			
			<div>
                {/* Followers Count */}
                <div>
                    <p>Followers: {userProfile?.followers}</p>
                </div>

                {/* Following count */}
                <div>
                    <p>Following: {userProfile?.following}</p>
                </div>

                {/* Number of public repos */}
                <div>
                    <p>Public repos: {userProfile?.public_repos}</p>
                </div>

                {/* Number of public gists */}
                <div>
                    <p>Public gists: {userProfile?.public_gists}</p>
                </div>
			</div>
		</div>
	);
};
export default ProfileInfo;

