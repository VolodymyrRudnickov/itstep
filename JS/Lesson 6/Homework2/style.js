const style = [
    {
        'font-size': '20px',
    },
    {
        color: 'red',
    },
    {
        'font-weigth': '700',
    },
    {
        'text-transform': 'capitalize',
    },
    {
        'padding': '20px',
    },
    {
        'margin': '15px',
    },
    {
        'text-decoration': 'underline',
    },
    {
        'text-align': 'center',
    },
];

function outText(text,css){
    let st = '';

    css.forEach(style => {
        for(let value in style) {
            console.log(style[value]);
            st += ` ${value}:${style[value]};`;
            console.log(st);   
        } 
    });
    document.write(`
    <p style="${st}">${text}</p>
    `)
}

outText('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores quo perferendis beatae quae pariatur ratione consequuntur animi! Sequi, dolores porro?',style)
