class Newsline {
    constructor() {
        this.newsArr = [];
    }

    get newsLength() {
        return  this.newsArr.length;;
    }
    
    
    addNews(news) {
        this.newsArr.push(news)
       
    }
    displayNews() {
    }
}

const newsline1 = new Newsline();
newsline1.addNews('Вогнеборці загасили пожежу в екосистемі Криворізького району');
newsline1.displayNews();