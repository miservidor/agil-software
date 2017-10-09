webpackJsonp([2],{

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!./node_modules/postcss-loader/index.js?{\"ident\":\"postcss\"}!./src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* You can add global styles to this file, and also import other style files */\n/*@import \"~@angular/material/prebuilt-themes/indigo-pink.css\";*/\n.titular{\n    margin-top: 10px;\n    color:#009688;\n    width: 100%;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    padding-right: 10px;\n    padding-left: 25px;\n}\nbody{\n    font-family: 'Montserrat', sans-serif;\n    background: #ECEFF1;\n}\n.lista{\n    width: 100%;\n    display: -webkit-inline-box;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    padding-left: 10px; \n    font-family: 'Montserrat', sans-serif;\n    font-size: 16px;\n    background: white;\n}\n.lista:hover{\n    color: #8BC34A;\n}\n.box-unread{\n    background: linear-gradient(229deg, #fd9a77, #fb827a);\n}\n.box-check{\n background: linear-gradient(229deg, #8edead, #43c6ac);\n \n}\n.box-files{\nbackground: linear-gradient(248deg, #348ac7, #7474bf) \n}\n.box-users{\nbackground: linear-gradient(67deg, #f15f79, #b24592);\n}\n.titcol{\n    padding: 5px;\n    box-shadow: #333 0px 1px 5px;\n}\n.boxup{\n    width: 100%;\n    min-height: 60px;\n    margin: 5px;\n    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n    color: white;\n    padding: 4px;\n}\n.box-primario{\n    margin-top: 10px;\n    border: 0 none;\n}\n.box-header{\n    background-color: #009688;\n    color: #FFFFFF;\n    padding: 10px;\n    border: 1px solid #009688;\n}\n.laterales{\n    padding-left: 10px;\n    padding-right: 10px; \n}\n.box-body{\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-bottom: 15px;\n    background-color: white;\n}\n.box-box{\n    background: white;\n}\n.col-90{\n    width: 90%;\n}\n.col-80{\n    width: 80%;\n}\n.col-50{\n    width: 50%;\n}\n.col-75{\n    width: 75%;\n}\n.col-70{\n    width: 70%;\n}\n\n.col-25{\n    width: 25%;\n}\n.col-20{\n    width: 20%;\n}\n.col-10{\n    width: 10%;\n}\n.contenedor{\n    width: 95%;\n}\n.mat-form-field {\n    display: inline-block;\n    position: relative;\n    width: 100% !important;\n    text-align: left;\n}\na {\n    color: #009688 !important;\n    text-decoration: none;\n}\n.menuoff{\n    margin-top: 20px;\n    margin-bottom: 15px;\n}\n.marcomenu{\n    position: fixed;\n}\n.modalback{\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.75);\n    position: absolute;\n    z-index: 999;\n}\n.modalmain{\n    margin-top: 100px;\n    border-radius: 5px 5px 5px 5px;\n    padding: 20px;\n    width: 500px;\n}\n\n\n* { box-sizing: border-box; }\n.video-background {\n  background: #000;\n  position: fixed;\n  top: 0; right: 0; bottom: 0; left: 0;\n  z-index: -99;\n}\n.video-foreground,\n.video-background iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n#vidtop-content {\n\ttop: 0;\n\tcolor: #fff;\n}\n.vid-info { position: absolute; top: 0; right: 0; width: 33%; background: rgba(0,0,0,0.3); color: #fff; padding: 1rem; font-family: Avenir, Helvetica, sans-serif; }\n.vid-info h1 { font-size: 2rem; font-weight: 700; margin-top: 0; line-height: 1.2; }\n.vid-info a { display: block; color: #fff; text-decoration: none; background: rgba(0,0,0,0.5); transition: .6s background; border-bottom: none; margin: 1rem auto; text-align: center; }\n@media (min-aspect-ratio: 16/9) {\n  .video-foreground { height: 300%; top: -100%; }\n}\n@media (max-aspect-ratio: 16/9) {\n  .video-foreground { width: 300%; left: -100%; }\n}\n@media all and (max-width: 600px) {\n.vid-info { width: 50%; padding: .5rem; }\n.vid-info h1 { margin-bottom: .2rem; }\n}\n@media all and (max-width: 500px) {\n.vid-info .acronym { display: none; }\n}\n\n.img-fondo{\n    background-image: url(\"/assets/bg4.jpg\");\n    background-size: 100% auto;\n    background-repeat: no-repeat;\n}\n.gridado{\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 100px auto;\n        grid-template-columns: 100px auto; \n\n}\n.butsup{\n    color: white;\n    text-shadow: rgba(0, 0, 0, 0.60) 1px 1px 5px;\n    font-size: 18px;\n}\n.butsup:hover{\n \n    text-shadow: yellowgreen 1px 1px 5px;\n}\n.tit-logo{\n    font-size: 40px;\n    text-shadow: rgba(0, 0, 0, 0.60) 1px 1px 5px;\n    color: white;\n    bottom: 0px;\n}\n.supfix{\n    position: fixed;\n}\n.caja{\n    padding-top: 100px;\n}\n\n.fondoboard{\n    background-image: url(\"/assets/fondoboard.jpg\");\n    background-size: 100% auto;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    height:100vh;\n}\n.fondocafe{\n    background-image: url(\"/assets/bg6.jpg\");\n    background-size: 100% auto;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    height:100vh;\n}\n.medio{\n    padding-top: 30%;\n    font-size: 22px;\n    color: white;\n    text-shadow: rgba(0, 0, 0, 0.78) 0px 0px 10px;\n\n}\n.container-menu{\n    width: 100%;\n    position:fixed;\n    padding-left: 15%;\n    z-index: 9999;\n}\n.iconright{\n    float: right;\n    color: white;\n    font-size: 40px;\n     text-shadow: rgba(0, 0, 0, 0.78) 0px 0px 10px;\n\n}\n@media (max-width: 720px) {\n.container-menu{\n    width: 100%;\n    position:fixed;\n    padding-left: 5%;\n    z-index: 9999;\n}\n\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!./node_modules/postcss-loader/index.js?{\"ident\":\"postcss\"}!./src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map