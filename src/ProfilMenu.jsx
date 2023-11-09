function ProfilMenu () {

    const users = [
        {
          firstName: "Regis",
          lastName: "JOUAN",
        },
    
        {
            firstName: "Hervé",
            lastName: "DIVEVE",
        },
    
        {
            firstName: "Jonas",
            lastName: "LEGOUJA",
        },      
      ];

    return (
        <p>
           {users.map((user) => {
            return (
                <li>
                    {user.firstName} - {user.lastName} is connected
                </li>
            );
           })} 
        </p>
    );
}
export default ProfilMenu;