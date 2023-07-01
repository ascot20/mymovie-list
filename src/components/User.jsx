const User = ({ icon, username, likes, selectUser,user }) => {
    return (
        <div className="flex items-center mb-2 cursor-pointer hover:bg-slate-300" onClick={()=>selectUser(user)}>
            <img src={icon()} alt={username} className="w-8 h-8 mr-2" />
            <p className="font-semibold mr-auto">{username}</p>
            <p className="ml-auto">❤️{likes}</p>

        </div>
    )
}
export default User