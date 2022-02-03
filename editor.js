var input, button, gretting;

function setup() {
    noCanvas();

    gretting = select('.title');
    input = select('.article');
    button = select('.publish-btn');

    button.mousePressed(title);
    button.mousePressed(article);
    button.mousePressed(publish_btn);

    gretting.input(titleTyping);
    input.input(articleTyping);
    button.input(confirmingPublish);
}

function titleTyping() {
    title.html(gretting.value());
}

function articleTyping() {
    article.html(input.value());
}

function confirmingPublish() {
    publish_btn.html(button.value());
}

function title() {
    var text = gretting.value();
    var par = createP('<span style = "font-size: 48px">' + text + '</span>');
}

function article() {
    var text1 = input.value();
    var par = createP(text1);
}

function publish_btn() {
    var btn = "Confirm Publish"
    var par = createP(
        '<button class = "confirmPublish">'+btn+'</button>',
        );
}