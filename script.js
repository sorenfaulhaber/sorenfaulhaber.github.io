let OCCUPATION_ROTATE_LENGTH = 4500;
let OCCUPATION_ANIMATION_LENGTH = 1000;

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

function display_section(section_id) {
    $("main section").each((key, val) => {
        if($(val).attr('id') == section_id){
            $(val).show();
        }else{
            $(val).hide();
        }
    });
}
    
$(window).on('load', function () {
    // Project content
    $.getJSON("settings.json", (data) => {
        let occupation_index = 0;
        $.each(data["titles"], (key, val) => {
            console.log(title_factory(val));
            $("#oc-container").append(title_factory(key, val));
        });
        $.each(data["projects"], (key, val) => {
            $("#project-section").append(project_factory(val));
        });
        $("#oc-container:first-child").addClass("oc-text-shown");
        let occupations_len = $("#oc-container").children().length;
        setInterval(() => {
            $("#oc-container").children().eq(occupation_index).fadeOut({
                duration: OCCUPATION_ANIMATION_LENGTH,
                complete: () => {
                    occupation_index = (occupation_index + 1) % occupations_len;
                    $("#oc-container").children().eq(occupation_index).fadeIn({
                        duration: OCCUPATION_ANIMATION_LENGTH,
                    });
                }
            }
            );
        }, OCCUPATION_ROTATE_LENGTH);
    });
    $("#loader-wrapper").fadeOut(700);


    // Occupation rotation
    console.log($("#oc-container").children())

});