var input, button, gretting;

function setup() {
    noCanvas();

    gretting = select('.title');
    input = select('.article');
    button = select('.publish-btn');

    button.mousePressed(title);
    button.mousePressed(article);

    gretting.input(titleTyping);
    input.input(articleTyping);
}

function titleTyping() {
    title.html(gretting.value());
}

function articleTyping() {
    article.html(input.value());
}

function title() {
    var text = gretting.value();
    var par = createP(text);
}

function article() {
    var text1 = input.value();
    var par = createP(text1);
}