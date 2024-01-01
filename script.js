let occupation_rotate_length = 4500;
let occupation_animation_length = 1000;
let occupation_index = 0;

function project_factory(project_data){
    project_name = project_data.name || "";
    project_imgs = project_data.imgs || [];
    project_year = project_data.year_made;
    project_category = project_data.category || "";
    project_description = project_data.description || "";
    project_description = "";
    return `
    <div class="project-container">
        <h2 class="project-name">${project_name}</h2>
        <img class="project-image" src="${project_imgs[0]}">
        <p class="project-description">${project_description}</p>
    </div>`
}

function title_factory(index, title_name){
    if(index == 0){
        return `<h2 class="oc-text oc-text-shown">${title_name}</h2>`
    }
    return `<h2 class="oc-text">${title_name}</h2>`
}

$(window).on('load', function () {
    // Project content
    $.getJSON("settings.json", (data) => {
        $.each(data["titles"], (key, val) => {
            console.log(title_factory(val));
            $("#oc-container").append(title_factory(key, val));
        });
        $.each(data["projects"], (key, val) => {
            $("main").append(project_factory(val));
        });
        $("#oc-container:first-child").addClass("oc-text-shown");
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
    });
    $("#loader-wrapper").fadeOut(700);


    // Occupation rotation
    console.log($("#oc-container").children())

});