

// 1. identify the target elements

const editor_box = document.getElementById('editor');
const preview_box = document.getElementById('preview');

// 3. set event handlers

const update_preview_area = function (key_press_event) {
    const key_pressed = key_press_event.target.value;
    preview_box.value = key_pressed;

    console.log(preview_box.value);

    preview_box.innerHTML = marked(preview_box.value);


};

// 2. register the listeners

editor_box.addEventListener('keyup', update_preview_area);


//////////////////////

// convert the preview text to markdown




// display markdown in the preview box