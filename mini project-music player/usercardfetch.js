//const divelement= document.querySelector('.card-container');
function getDetails(id){
fetch(`https://dummyjson.com/users/${id}`)
    .then((response) => {
        if(!response.ok){
            throw new Error('ID mismatched any user');
        }
        return response.json();
    })
    .then((user) => console.log(user))
    .catch((err)=> console.error(err));

}

getDetails(1);