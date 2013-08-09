StyleSelect
===========

StyleSelect is a lightweight jQuery plugin for creating beautiful &lt;select> menus. Most of the UI is customizable and allows for easy CSS styling.

##To use: 
* StyleSelect is only compatible with jQuery 1.5 and above. Honestly, if you are still on pre-1.5, you have bigger problems than ugly select menus.
* Include the `ss.min.js` file.

To change a `<select>` menu on the page, insert the following code:
    
    $(document).ready(function() {
        $("select").SS();
    });

To get a specific `<select>`'s value:
    
    $(document).ready(function() {
	    var int = $("[name = 'selectMenu']").SSValue();
		alert(int);
    });

__Important__: `$("[name = 'selectMenu']").SSValue();` will  return the correct value but `$('[name = "selectMenu"]').SSValue();` will not. Please note the order of `"` and `'`.

##Customization:
The following options are used to change how the UI looks and behaves. More options coming soon.

* `borderRadius` = Border radius (Pixels)
* `border` = Border color
* `width` = Width of menu (Pixels)
* `height` = Height of menu (Pixels)
* `maxHeight` = Maximum height of dropdown (Pixels)
* `customStyles` = Any custom styling to be appended to the 



##Compatibility:
StyleSelect has been tested on the following web browsers:

* Chrome (28.0.1500.95)
* Safari (6.0.5)
* Opera (15.0) 
* Internet Explorer (7+)
* Firefox (16.0.2) 

##To do:
* Add the ability to select multiple options
* Add more customization options
* Add the ability to bind an `onchange` function

##Known bugs:
* Menu will not work properly if the `<select>` element doesn't have a `name` attribute.
* In some cases, adding events to the `document` can prevent a menu from being closed.
* Dropdown doesn't float above elements below, instead if forces the elements down.


***
***
I wrote this to be used on an upcoming website but decided that since no good `<select>` plugins exist, I should upload it. I ask that you don't steal the code, but _please_ do submit pull requests and open issues. Thank you.