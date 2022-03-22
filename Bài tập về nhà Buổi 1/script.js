const addBtn = document.querySelector('.add__button')
const findBtnFind = document.querySelector('.find__button--find')
const findBtnDelete = document.querySelector('.find__button--delete')
const membersList = document.querySelector('.members-list')
const nameMb = document.querySelector('.add__name')
const phone = document.querySelector('.add__number')

const list = []

// Find
const find = document.querySelector('.find')
const findInput = document.querySelector('.find__input')
findBtnFind.addEventListener('click', (e) => {
    let inputData = findInput.value;
  
    let resultName = list.filter((person) => person.name.includes(inputData));
    let resultPhone = list.filter((person) => person.phone.includes(inputData));
  
    let resultHTML = '';
    resultName.forEach((item) => {
      resultHTML += `<p>${JSON.stringify(item)}</p>`;
    });

    resultPhone.forEach((item) => {
        resultHTML += `<p>${JSON.stringify(item)}</p>`;
    });
  
    document.querySelector('.result').innerHTML = resultHTML;
    findInput.value = ""
});




function addMember({name = "", phone = ""}) {
    let person = {
        name: `${name}`,
        phone: `${phone}`,
    }
    list.push(person)
    list.sort((a, b) => (a.name.charAt(0) > b.name.charAt(0)) ? 1 : -1)
}

function render(arr) {
    let result = ''

    for (let i = 0; i < arr.length; i++) {
        const p = arr[i];

        result += `
            <li class="member">
                <div class="member__name">${p.name}</div>
                <div class="member_phone">${p.phone}</div>
            </li>
        `;

        membersList.innerHTML = result
    }
}

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(nameMb.value !== "" && phone.value !== "") {
        addMember({
            name: nameMb.value,
            phone: phone.value
        })

        render(list)
    }
    nameMb.value = ""
    phone.value = ""
})


findBtnDelete.addEventListener('click', () => {
    let sortedList = list.sort((a, b) => (a.phone > b.phone) ? 1 : -1)
    let newArr = [sortedList[0]]
    for (let i = 1; i < sortedList.length; i++) {
        if (sortedList[i].phone !== sortedList[i - 1].phone) {
            newArr.push(sortedList[i])
        }
    }

    

    function findArray(...rest) {
        for (let i = 0; i < rest.length; i++) {
            list.forEach((item) => {
                if(item.name !== rest[i].name && item.phone == rest[i].phone) {
                    list.splice(item, 1)
                }
            })
        }
    }

    findArray(...newArr)

    list.sort((a, b) => (a.name.charAt(0) > b.name.charAt(0)) ? 1 : -1)
    render(list)
})