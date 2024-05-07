<!-- const books = document.querySelectorAll("#book-list ul .name");
// const titles = document.querySelectorAll('#book-list li .name')

let bookList = document.querySelector('#book-list ul');
console.log(bookList.previousElementSibling)

bookList.addEventListener('click', (e) => {
    console.log(e);
    if(e.target.className === 'delete'){
        let li = e.target.parentNode
        li.parentNode.removeChild(li)
    }
})

const form = document.forms['add-book'];

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let value = form.querySelector('input').value;
    console.log(value)

    let li = document.createElement('li')
    let title = document.createElement('span')
    let deleteBtn = document.createElement('span')

    title.textContent = value;
    deleteBtn.textContent = "delete";

    li.appendChild(title);
    li.appendChild(deleteBtn);

    bookList.append(li);
})

const search = document.forms['search-books'];

search.addEventListener('keyup', (e) => {
    const input = search.querySelector('input').value.toLowerCase()
    const lis = document.querySelectorAll('#book-list ul li')

    lis.forEach(li =>{
        const text = li.firstElementChild.textContent.toLowerCase()

        if(text.includes(input)){
            li.style.display = "block"
        }else{
            li.style.display = "none"
        }
    })
}) -->