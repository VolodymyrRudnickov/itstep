const form = document.forms['getComment'];
const btn = document.querySelector('.btn');
const commentCont = document.querySelector('.comment-container');
const commentSection = document.querySelector('.comment-section');
const date = new Date();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.name.value = '';
    form.comment.value = '';
});


btn.addEventListener('click', (e) => {
    const data = {
        name: form.name.value,
        comment: form.comment.value,
        date: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
    };
    createComment(data.name, data.date, data.comment);
});

function createComment(name, date, text) {
    const hr = document.createElement('hr')
    const newComment = commentSection.cloneNode(true);

    newComment.children[0].textContent = name;
    newComment.children[1].textContent = date;
    newComment.children[2].textContent = text;

    commentCont.appendChild(newComment);
    commentCont.appendChild(hr)
}

