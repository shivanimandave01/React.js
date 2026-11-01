import React,{useEffect} from "react";

function Github() {
    const [followers, setFollowers] = React.useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/shivanimandave01')
            .then(response => response.json())
            .then(data => {
                // Handle the fetched data
                console.log(data);
                setFollowers(data);
            });
    }, []);

    return (
        <div className="flex flex-col items-center justify-center bg-slate-400">
            Github followers: {followers.followers}
            <img src={followers.avatar_url} alt="GitHub Avatar" className="w-32 h-32 rounded-full mt-4" />
        </div>
    );
}

export default Github;