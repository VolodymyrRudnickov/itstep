class News {
    constructor(title, text, tags, date, padding) {
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.date = date;
        this.padding = padding;
    }
    print(article) {
        const diff = new Date() - article.date;
        const day = Math.floor(diff / (1000 * 60 * 60 * 24));

        let dayDiff;
        if (day <= 1) {
            dayDiff = 'сьогодні';
        } else if (day <= 7) {
            dayDiff = `${day} днів тому`;
        } else {
            dayDiff = `${article.date.getDate()}.${article.date.getMonth() + 1}.${article.date.getFullYear()}`;
        }

        const tagsArr = article.tags.map(item => {
            return `#${item}`;
        }).join(' ');

        return document.write(`
        <h1 style"padding:${article.padding}">${article.title}</h1>
        <div style="padding:${article.padding}px">${dayDiff}</div>
        <div style="padding:${article.padding}px">${article.text}</div>
        <div style="padding:${article.padding}px">${tagsArr}</div>
        `)
    }
}
// const news1 = new News('What is Ipsum Dolor?', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, quae dolores ab sunt possimus iure quas cum deleniti excepturi iste laudantium placeat velit laboriosam, inventore, recusandae ducimus voluptatibus qui molestiae!', ['lorem', 'ipsum', 'text'], new Date(2023, 5, 20), 10);




class Newsline extends News {
    constructor() {
        super();
        this.newsArr = [];
    }

    get newsLength() {
        return this.newsArr.length;;
    }

    addNews(news) {
        this.newsArr.push(news);
    }

    removeNews() {
        this.newsArr.pop();
    }

    displayNews() {
        const arr = [...this.newsArr];
        arr.forEach(item => {
            super.print(item);
        });
        return arr;
    }

    sortByDate() {
        const sortArr = this.newsArr.sort((a, b) => {
            if (a.date < b.date) {
                return 1;
            }
            if (a.date > b.date) {
                return -1;
            }
            return 0;
        });
        console.log(sortArr);
        return sortArr;
    }

    findTags(tags) {
        const res = []
        this.newsArr.forEach(item => {
            if (item.tags.includes(tags)) {
                res.push(item)
            }
        });
        console.log(res);
        return res;
    }
}

const newsline1 = new Newsline();

newsline1.addNews(new News('What is Ipsum Dolor?', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, quae dolores ab sunt possimus iure quas cum deleniti excepturi iste laudantium placeat velit laboriosam, inventore, recusandae ducimus voluptatibus qui molestiae!', ['sport', 'news', 'article'], new Date(2021, 3, 15), 10));
newsline1.addNews(new News('What is Ipsum Dolor?', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, quae dolores ab sunt possimus iure quas cum deleniti excepturi iste laudantium placeat velit laboriosam, inventore, recusandae ducimus voluptatibus qui molestiae!', ['lorem', 'ipsum', 'text'], new Date(2023, 5, 20), 10));
newsline1.addNews(new News('What is Ipsum Dolor?', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, quae dolores ab sunt possimus iure quas cum deleniti excepturi iste laudantium placeat velit laboriosam, inventore, recusandae ducimus voluptatibus qui molestiae!', ['lorem', 'sport', 'health'], new Date(), 10));
newsline1.sortByDate();
newsline1.findTags('sport');
newsline1.removeNews()
newsline1.addNews(new News('What is Ipsum Dolor?', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, quae dolores ab sunt possimus iure quas cum deleniti excepturi iste laudantium placeat velit laboriosam, inventore, recusandae ducimus voluptatibus qui molestiae!', ['lorem', 'sport', 'health'], new Date(2020, 11, 31), 10));
newsline1.displayNews();



// class News {
//     constructor(title, text, tags, date, padding) {
//         this.title = title;
//         this.text = text;
//         this.tags = tags;
//         this.date = date;
//         this.padding = padding;
//     }
//     print() {
//         const diff = new Date() - this.date;
//         console.log(diff);
//         const day = Math.floor(diff / (1000 * 60 * 60 * 24));
//         console.log(day);
//         let dayDiff;
//         if (day <= 1) {
//             dayDiff = 'сьогодні';
//         } else if (day <= 7) {
//             dayDiff = `${day} днів тому`;
//         } else {
//             dayDiff = `${this.date.getDate()}.${this.date.getMonth() + 1}.${this.date.getFullYear()}`;
//         }

//         let tagsArr = this.tags.map(item => {
//             return `#${item}`
//         }).join(' ');
//         console.log(tagsArr)



//         return document.write(`
//         <h1 style"padding:${this.padding}">${this.title}</h1>
//         <div style="padding:${this.padding}px">${dayDiff}</div>
//         <div style="padding:${this.padding}px">${this.text}</div>
//         <div style="padding:${this.padding}px">${tagsArr}</div>
//         `)
//     }
// }