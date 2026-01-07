
let user = {
    rahul: { 
        later: "R",
        paisa: 1000,
        password: 7272
    },
    vikash: {
        later: "V",
        paisa: 1000,
        password: 1212
    },
    geet: {
        later: "G",
        paisa: 1000,
        password: 1313
    },
    admin: {
        later: "D",
        paisa: 1000000000000000000000000,
        password: 4545
    }
}



function reload() {
    document.querySelector(".show-price-admin").innerHTML = user.admin.paisa.toLocaleString("en-IN");
    document.querySelector(".show-price-geet").innerHTML = user.geet.paisa.toLocaleString("en-IN");
    document.querySelector(".show-price-rahul").innerHTML = user.rahul.paisa.toLocaleString("en-IN");
    document.querySelector(".show-price-vikash").innerHTML = user.vikash.paisa.toLocaleString("en-IN");
}

function password(name, input, un) {
    document.querySelector(".userji").innerHTML = user[name].later ;
    document.querySelector(".bk-pass").style.display = "flex";
    let pass = document.querySelector(".user-password");
    
    document.querySelector(".add").addEventListener("click", () => {

        if (user[name].password == pass.value) {

            user[input].paisa = Number(user[input].paisa) + Number(un);
            user[name].paisa = Number(user[name].paisa) - Number(un);

            document.querySelector(".bk-pass").style.display = "none";

            reload()

            document.querySelector(".price-name-" + name).value = "";
            document.querySelector(".price-" + name).value = "";
        }
        else {
            alert("place enter your crrort password")
        }
    }, { once: true });
}



function main(name) {

    let input = document.querySelector(".price-name-" + name).value;
    let un = document.querySelector(".price-" + name).value;

    if (input == "" || un == "") {
        alert("plase fill ")
    }
    else {
        if (input in user) {
            if (user[name].paisa >= un) {

                password(name, input, un);

            }
            else {
                alert("your bance is " + user[name].paisa + " place enter low cost")
            }
        }
        else {
            alert("this user is not define")
        }


    }



    reload();

}

reload();