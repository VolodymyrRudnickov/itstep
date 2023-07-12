class Marker {
    constructor(color, percent) {
        this.color = color;
        this.percent = percent;
    }

    print(text) {
        let level = this.percent;
        if (level >= text.length) {
            document.write(`<div style="color:${this.color}">${text}</div>`)
        } else {
            let res = '';
            let count = 0;
            while (level !== 0) {
                if (text[count] !== ' ') {
                    level -= 0.5;
                }
                res += text[count];
                count++;
                if(text[count] === undefined) break
            }
            document.write(`<div style="color:${this.color}">${res}</div>`)
        }
    }
}

const mark = new Marker('blue', 50);

mark.print('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias fugiat recusandae libero autem aliquam officiis facilis. Explicabo laudantium aut officiis officia quo cumque obcaecati nostrum modi voluptatem, quibusdam nemo ut!');

class SuperMarker extends Marker {
    fill(num) {
        if (this.percent + num > 100) {
            this.percent = 100;
        } else {
            this.percent += num;
        }
    }
};

const mark2 = new SuperMarker('red', 30);
mark2.fill(60);
mark2.print('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias fugiat recusandae libero autem aliquam officiis facilis. Explicabo laudantium aut officiis officia quo cumque obcaecati nostrum modi voluptatem, quibusdam nemo ut!');




