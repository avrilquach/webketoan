/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Web_ToanTam\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-home': '&#xe91a;',
		'icon-fastprocess': '&#xe900;',
		'icon-accounting-services': '&#xe901;',
		'icon-arrow': '&#xe902;',
		'icon-closed': '&#xe903;',
		'icon-consultant': '&#xe904;',
		'icon-Costsavings': '&#xe905;',
		'icon-Development-ecosystem': '&#xe906;',
		'icon-face': '&#xe907;',
		'icon-FreeConsultation': '&#xe908;',
		'icon-google': '&#xe909;',
		'icon-information-security': '&#xe90a;',
		'icon-linkenin': '&#xe90b;',
		'icon-menu': '&#xe90c;',
		'icon-news': '&#xe90d;',
		'icon-pinterest': '&#xe90e;',
		'icon-price-list': '&#xe90f;',
		'icon-Professional-team': '&#xe910;',
		'icon-step1': '&#xe911;',
		'icon-step2': '&#xe912;',
		'icon-step3': '&#xe913;',
		'icon-step4': '&#xe918;',
		'icon-step5': '&#xe919;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
