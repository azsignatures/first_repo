import { useEffect, useState } from "react"
const myurl = "https://api.github.com/users"
console.log (myurl);

const Github = () => {

    const [users, setUsers]=useState([]);
    const clearList =() => {
        setUsers([]);
    };
    const reloadList = () => {
        setUsers(users);
    };
    const deleteContact = (id) => {
        const
    newuser = users.filter((info) => info.id !== id);
    setUsers(newuser);
    }
    useEffect(() => {
    const fetchUser = async () => {
                try{
                    const response = await fetch(myurl);
                    const users = await response.json();
                    setUsers(users);
                    console.log(users);
                }catch (error) {
                    console.log(error);
                }
            };
            fetchUser();
        },[]);
    
    return (
        <div className="grid">
            {users.map((user)=>{
                const {id, login, avatar_url, html_url} = user;
                return (
                    <ul key={id}>
                       <li>
                        <div className="github">
                            <div>
                              <h3>{login}</h3>
                            <img src={avatar_url} alt={login} height='96px' />
                        </div >
                           <div>
                            
                            <a href={html_url} target="_blank">take me to {login}page</a>
                                 <button onClick={() => deleteContact(id)}>Delete</button>
                           </div>
                        </div>
                        
                        </li> 
                    </ul>
                ) 
            } )}
            <button  onClick={clearList}>Clear</button>
            <button onClick={reloadList}>Reload</button>
        </div>
        
    );
};

export default Github;