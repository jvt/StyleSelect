/*******
 *
 * Copyright © 2013, Dodici Enterprises, LLC.
 * All rights reserved
 *
 */

(function ( $ ) {
	
	var objects = [];

	var selected = [];

	$.fn.SS = function( parameters ) {
		var settings = $.extend({
			_dropped : false, // System Variable
			_hover : false, // System Variable
			borderRadius : 2, // Border Radius Size (Pixels)
			border : "ccc", // 1 pixel Border Color 
			size : 0, // Number of Visible Options ( 0 = No Scroll)	
			width : 300, // Width of select (Pixels)
			height : 36, // Height of select (Pixels)
			maxHeight : "auto", // Maximum Height of dropdown
			customStyles : "" // Custom styles to be populated by <select> tag
		}, parameters);

		if ($(this).length > 1) {
			var i = 0;
			$(this).each( function() {

				var sData = [];

				var jSelect = {
						"name":$(this).attr("name"),
						"value":null
					};

				selected.push(jSelect);

				var styles = $(this).attr("style");
		
				var selectData = {
					"name":$(this).attr("name"),
					"label":$(this).text(),
					"disabled":$(this).attr("disabled"),
					"classes":$(this).attr("class"),
					"id":$(this).attr("id"),
					"required":$(this).attr("required")
				}
				sData.push(selectData);

				var listElements = '';

				$(this).children("option").each(function() {
					var data = {
						"value" : $(this).val(),
						"label" : $(this).text(),
						"selected" : $(this).attr("selected"),
						"disabled" : $(this).attr("disabled")
					};
					sData.push(data);
					listElements += '<li class="element active" style="border-bottom:1px solid rgba(0,0,0,0.09);height:'+settings.height+'px;"><div class="SS44HH-2" style="padding:0px 25px;line-height:'+settings.height+'px;">'+$(this).text()+'</div></li>';
					
					if ($(this).attr("selected")) {
						selected[i].value = $(this).text();
					}
				});

				if (selected[i].value == null) {
					selected[i].value = sData[1].label;
				}

				objects.push(sData);

				var bHTML = '<div class="SS rem cds" data-length="'+i+'" style="margin-bottom:7px;'+styles+'"><div class="SS01-42" style="width:300px;font-family:Arial, Helvetica, sans-serif;"><button type="button" class="SS01F-3" style="border:1px solid rgba(0,0,0,0.15);-webkit-border-radius:'+settings.borderRadius+'px;-moz-border-radius:'+settings.borderRadius+'px;-o-border-radius:'+settings.borderRadius+'px;-khtml-border-radius:'+settings.borderRadius+'px;;border-radius:'+settings.borderRadius+'px;width:100%;height:100%;overflow:hidden;-webkit-sizing: border-box;-moz-box-sizing: border-box;-ms-box-sizing: border-box;box-sizing: border-box;background-color:#f4f4f4;-webkit-appearance: none;display: inline-block;text-align: left;padding: 0 7px;width: 100%;font-size: 13px;font-weight: 400;"><div class="buttonLabel SS12V-1" style="height:auto;"><div class="buttonWrapper" style="background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAALCAYAAACzkJeoAAAAOklEQVQYV2P4//8/AwxHRkb+B2I4H13iP7ICbBJwBbgkwBhuLDaMXxLZddgk8duJTQKnP7E6CFkChAFpxL/ydoaj+QAAAABJRU5ErkJggg==) no-repeat center right;width:100%;height:100%;cursor:pointer;"><div class="SS-p84" style="height:8px;min-height:8px;width:100%;background-color:transparent;"></div><div class="SS-Opt" style="color:#444;cursor:pointer;line-height:18px;">'+selected[i].value+'</div><div class="SS-p85" style="height:8px;min-height:8px;width:100%;background-color:transparent;"></div></div></div></button><div class="SS74J-32" style="float:left;max-height:'+settings.maxHeight+'overflow-y:scroll;position:relative;z-index:500;top:-'+settings.height+'px;width:300px;-webkit-box-shadow:0 0 3px rgba(0,0,0,0.35);background-color:white; cursor:pointer;display:none;"><ul class="SS21L-7" style="list-style-type:none;padding:0px;margin:0px;border:1px solid rgba(0,0,0,0.09);">';
				bHTML += listElements;
				bHTML += '</ul></div></div></div>';
				$(this).after(bHTML);

				i++;
			});
		}

		$(".SS01-42").hover(function() {
			settings._hover = true;
		}, function() {
			settings._hover = false;			
		});
		
		$(this.parent().find("li")).click(function() {
			var index = $(this).index();
			var label = objects[$(this).parent().parent().parent().parent().attr("data-length")][index+1].label;
			var name = objects[$(this).parent().parent().parent().parent().attr("data-length")][0].name;
			var arrLength = selected.length;
			for (var h=0;h<arrLength;h++) {
				if (selected[h].name == name) {
					selected[h].value = label;
				}
			}
			$(this).parent().parent().parent().find(".SS-Opt").text(label);
		});

		$(this.parent().find("li")).hover(function() {
			$(this).css("backgroundColor", "#ebebeb");
		}, function() {
			$(this).css("backgroundColor", "transparent");
		});
		
		$(document).bind("click", function(n) {
			if (settings._dropped == true && settings._hover != true) {
				$(this).find(".SS74J-32").css("display", "none");
			}
		});
		
		$(this.parent().find("div.SS.cds")).bind("click", function() {
			if (settings._dropped == false) {
				settings._dropped = true;
				$(this).find(".SS74J-32").css("display", "block");
			} else {
				settings._dropped = false;
				$(this).find(".SS74J-32").css("display", "none");				
			}
		});
		
		this.remove();
	}

	$.fn.SSValue = function() {
		if (!this) {
			console.log("Unable to retrieve value: Missing select name");
			return false;
		}
		var selector = this.selector;
		var start_pos = selector.indexOf("'") + 1;
		var end_pos = selector.indexOf("'",start_pos);
		var text_to_get = selector.substring(start_pos,end_pos);
		var arrLength = selected.length;
		for (var s=0;s<arrLength;s++) {
			if (selected[s].name == text_to_get) {
				return selected[s].value;
			}
		}
	}

}( jQuery ));