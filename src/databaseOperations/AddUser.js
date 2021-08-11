import {db} from '../config/firebase'

function AddUser(userName) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    db.collection("users").add({
        name: userName,
        color: randomColor
    })
        .then((docRef) => {
            console.log("User written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });


}

export default AddUser;
