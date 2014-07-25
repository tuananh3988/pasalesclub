jQuery( document ).ready(function() {
    var listArr = [];
    var htmlList = '<li class="list-link">';
    jQuery('.school_name').each(function() {
        var name = jQuery(this).html();
        var firstName = name.substr(0, 1);
        if(jQuery.inArray(firstName, listArr) == -1) {
            listArr.push(firstName);
            jQuery(this).parents('li').attr('id', firstName);
            htmlList = htmlList + '<a href="#' + firstName + '">[' + firstName + ']</a>';
        }
    });
    
    htmlList = htmlList + '</li>';
    var listArr = [];
    jQuery('.school_name').each(function() {
        var name = jQuery(this).html();
        var firstName = name.substr(0, 1);
        if(jQuery.inArray(firstName, listArr) == -1) {
            listArr.push(firstName);
            jQuery(this).parents('li').before(htmlList);
        }
    });
    
});