var CHildObjectWindo = null;
function OpenChildPage() {
    //&===>open inside window OBject
    //&take Three Param
    CHildObjectWindo = window.open("Child.html", "MyChildPage", "width=120px,height=100px");
    //&return Object ===>Open Window
    console.log(CHildObjectWindo);
}

function MoveChildPage() {
    CHildObjectWindo.moveTo(100, 100);
}

function moveChildPageBy() {
    CHildObjectWindo.moveBy(30, 30);
}