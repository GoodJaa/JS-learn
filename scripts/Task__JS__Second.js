// decision one

const path = "/users/download/index.html";

function isHtml(path) {
    if (path.indexOf(".html") > 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isHtml(path));

// decision two

const path = "/users/download/index.html";

function isHtml(path) {
    if (path.slice(-5) == ".html") {
        return true;
    } else {
        return false;
    }
}

console.log(isHtml(path));
