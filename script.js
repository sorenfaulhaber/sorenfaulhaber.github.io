let OCCUPATION_ROTATE_LENGTH = 4500;
let OCCUPATION_ANIMATION_LENGTH = 1000;

function project_factory(project_data){
    project_name = project_data.name || "";
    project_imgs = project_data.imgs || [];
    project_year = project_data.year_made;
    project_category = project_data.category || "";
    project_description = project_data.description || "";
    // project_description = "";

    project_row = `<img class="project-image" src="${project_imgs[0]}">`
    if(project_description !== ""){
        project_row += `<p class="project-description">${project_description}</p>`
    }

    if(project_year !== undefined){
        project_name += `- ${project_year}`
    }

    return `
    <div class="project-container">
        <div class="project-column">
            <h2 class="project-name">${project_name}</h2>
            <div class="project-row">
                ${project_row}
            </div>
        </div>
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

function set_active_menu(element) {
    $(element).siblings().toggleClass('active', false);
    $(element).toggleClass('active', true);
}
    
$(window).on('load', function () {
    // Project content
    $.getJSON("settings.json", (data) => {
        $.each(data["projects"], (key, val) => {
            $("#project-section").append(project_factory(val));
        });
    });

    display_section('landing-section');

    $("#loader-wrapper").fadeOut(700);
});