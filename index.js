var CleanCSS = require('clean-css');


function transform_cssmin(file) {
    file.raw = new CleanCSS().minify(file.raw).styles;
}

module.exports = transform_cssmin;