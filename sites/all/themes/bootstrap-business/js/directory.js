jQuery( document ).ready(function() {
	var directory = jQuery('.page-directory').length;
	var representative = jQuery('.page-directory-representative').length;
	if(directory > 0) {
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
                
                jQuery('.school_name').last().parents('li').after(htmlList);
	}
	else if (representative > 0) {
		var listArr = [];
		var htmlList = '<div class="list-link">';
		jQuery('.contact-person').each(function() {
			var name = jQuery(this).html();
			var firstName = name.substr(0, 1);
			if(jQuery.inArray(firstName, listArr) == -1) {
				listArr.push(firstName);
				jQuery(this).parents('.item-list').attr('id', firstName);
				jQuery(this).parents('.item-list').addClass('first-word')
				htmlList = htmlList + '<a href="#' + firstName + '">[' + firstName + ']</a>';
			}
		});

		htmlList = htmlList + '</div>';
		var listArr = [];
		jQuery('.view-directory .item-list.first-word').before(htmlList);
                jQuery('.view-directory .item-list.first-word').last().after(htmlList);
		
	}
    
    
});