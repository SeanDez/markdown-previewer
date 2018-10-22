const default_markdown = "# H1\n" +
                   "## H2\n" +
                   "### H3\n" +
                   "#### H4\n" +
                   "##### H5\n" +
                   "*Bold*\n" +
                   "_Italic_\n" +
                   "~~Strikethrough~~\n" +
                   "> Quoted Text\n" +
                   "> `Code`\n" +
                   "[Link](http://linkURL.com)"
;

// 1. identify the target elements

const editor_box = document.getElementById('editor');
const preview_box = document.getElementById('preview');

// 3. set event handlers

editor_box.placeholder = default_markdown;

const update_preview_area = function (key_event = default_markdown) {
    if (typeof key_event === 'string' && (key_event !== '')) {
        preview_box.innerHTML = marked(key_event)
    }
    else if (key_event.target.value === '') {
        preview_box.innerHTML = marked(default_markdown)
    }
    else {
        const key_data = key_event.target.value;
        preview_box.value = key_data;
        console.log(preview_box.value);
        preview_box.innerHTML = marked(preview_box.value);
    }
};

// 2. register the listeners

editor_box.addEventListener('keyup', update_preview_area);


//////////////////////

window.onload = update_preview_area();

