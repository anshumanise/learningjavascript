const divEle = document.querySelector('.card-container');


// function getDetails(id){
    
// const requeqst = new XMLHttpRequest();
// requeqst.open("GET", `https://dummyjson.com/users/${id}`);
// requeqst.send();
// requeqst.addEventListener("load", function () {
//     // console.log(requeqst.responseText);//string type data
//     const data = JSON.parse(this.responseText);
//     console.log(data);//object type data

//     displayUser(data,'beforeend');

// const requeqst2 = new XMLHttpRequest();
// requeqst2.open("GET", `https://dummyjson.com/users/${id-1}`);
// requeqst2.send();

// requeqst2.addEventListener("load", function () {
//     if(requeqst2.status===404) return;
//     // console.log(requeqst2.responseText);//string type data
//     const data = JSON.parse(this.responseText);
//     console.log(data);//object type data

//     displayUser(data, 'afterbegin','other');
// });

    
// });

// }
//itney lambe ko short async / await use karke kiya baad mein samajhne ke baad

async function getDetails(id) {
    try {
        // Yahan /users/ add kiya gaya hai
        const response = await fetch(`https://dummyjson.com{id}`);
        if (!response.ok) throw new Error("User nahi mila");
        
        const userdata = await response.json();
        displayUser(userdata, 'beforeend');

        if (id > 1) {
            // Yahan bhi /users/ add kiya gaya hai
            const response2 = await fetch(`https://dummyjson.com{id - 1}`);
            const userdata2 = await response2.json();
            displayUser(userdata2, 'afterbegin', 'other');
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
}

function displayUser(data, pos, className = '') {
    const card = `
    <div class="user-card ${className}">
        <img src="${data.image}" alt="Profile Image""")/>>
        <h3>${data.firstName}</h3>
        <h3>${data.lastName}</h3>
        <p class="email">${data.email}</p>
        <button class="btn">View Profile</button>
    </div>`;
    
    divEle.insertAdjacentHTML(pos, card);
}
//

getDetails(2);



