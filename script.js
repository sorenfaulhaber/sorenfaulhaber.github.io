let occupation_rotate_length = 4500;
let occupation_animation_length = 1000;
let occupation_index = 0;

function add_project(project_data){
    
}

$(window).on('load', function () {
    $("#loader-wrapper").fadeOut(700);

    // Occupation rotation
    let occupations_len = $("#oc-container").children().length;
    setInterval(() => {
        $("#oc-container").children().eq(occupation_index).fadeOut({
            duration: occupation_animation_length,
            complete: () => {
                occupation_index = (occupation_index + 1) % occupations_len;
                $("#oc-container").children().eq(occupation_index).fadeIn({
                    duration: occupation_animation_length,
                });
            }
        }
        );
    }, occupation_rotate_length);

    // Project content
    $.getJSON("projects.json", (data) => {
        $.each(data, (key, val) => {
            console.log(key, val);
        });
    });
});