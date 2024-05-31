let section2 = document.querySelector(".section2");

let fname = document.querySelector(".fname");
let lname = document.querySelector(".lname");
let pcountry = document.querySelector(".country");
let pscore = document.querySelector(".number");
let button = document.querySelector("button");

let data = [
    {
        firstName: "sharukk",
        lastName: "shan",
        country: "USA",
        score: 200
    },
    {
        firstName: "kabil",
        lastName: "rajan",
        country: "USA",
        score: 100
    },
    {
        firstName: "Gokul",
        lastName: "krishnan",
        country: "Australia",
        score: 150
    }
];

button.addEventListener('click', function (e) {
    e.preventDefault();
    if (pcountry.value === "" || fname.value === "" || lname.value === "" || pscore.value === "") {
        alert("Please fill all the fields");
    } else {
        let playerObj = {
            firstName: fname.value,
            lastName: lname.value,
            country: pcountry.value,
            score: parseInt(pscore.value)
        };

        data.push(playerObj);
        updateData();
        fname.value = "";
        lname.value = "";
        pcountry.value = "";
        pscore.value = "";
    }
});

function updateData() {
    data.sort(function (p1, p2) {
        return p2.score - p1.score;
    });
    let showData = "";
    data.forEach(function (item, index) {
        let rank = index + 1;
        let rankDisplay;
        if (rank === 1) {
            rankDisplay = "🏆 1st";
        } else if (rank === 2) {
            rankDisplay = "🥈 2nd";
        } else if (rank === 3) {
            rankDisplay = "🥉 3rd";
        } else {
            rankDisplay = rank + "th";
        }
        showData += `
        <div class="button_group">
            <span class="rank">${rankDisplay}</span>
            <span>${item.firstName}  ${item.lastName}</span>
            <span>${item.country}</span>
            <span>${item.score}</span>
            <button class="del">🗑️</button>
            <button class="but1">+5</button>
            <button class="but2">-5</button>
        </div>
        `;
    });
    section2.innerHTML = showData;
    activateButtons();
}

function activateButtons() {
    document.querySelectorAll(".button_group").forEach(function (el, index) {
        el.addEventListener("click", function (e) {
            if (e.target.classList.contains('but1')) {
                data[index].score += 5;
                updateData();
            } else if (e.target.classList.contains('but2')) {
                data[index].score -= 5;
                updateData();
            } else if (e.target.classList.contains('del')) {
                data.splice(index, 1);
                updateData();
            }
        });
    });
}

window.addEventListener('load', updateData);