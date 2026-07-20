function openPage() {
    const childObjectWindo = window.open("page.html","page","width=500,height=300");

    var prev = -1;
    const id = setInterval(function () {
        if (prev === childObjectWindo.scrollY) {
            clearInterval(id);
            childObjectWindo.close();
            return;
        }

        prev = childObjectWindo.scrollY;
        childObjectWindo.scrollBy(0, 100);

        // console.log(childObjectWindo.scrollY, prev);
    }, 100);
}