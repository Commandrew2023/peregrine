var Peregrine = (function () {
	var _Math,
		_Date,
	    _String,
		_Canvas,
		_Log,
		_Graphics,
		_Event,
		_Program;
	_Math = {
	    constrain : function (v, min, max) {
			if (Object.keys(arguments).length > 3) {
				throw new RangeError("[function:Peregrine.Math.constrain|debug:01] Function 'constrain' takes only 3 arguments, not " + Object.keys(arguments).length);
			}
			if (Object.keys(arguments).length < 3) {
				throw new ReferencError("[function:Peregrine.Math.constrain|debug:02] Function 'constrain' requires 3 arguments: value, min, max");
			}
			if (v < min) {
				v = min;
			} else if (v > max) {
				v = max;
			}
			return v;
	    },
	    constrainValidate : function (v, v1, v2) {
			if (Object.keys(arguments).length > 3) {
				throw new RangeError("[function:Peregrine.Math.constrainValidate|debug:01] Function 'constrainValidate' takes only 3 arguments, not " + Object.keys(arguments).length);
			}
			if (Object.keys(arguments).length < 3) {
				throw new ReferencError("[function:Peregrine.Math.constrainValidate|debug:02] Function 'constrainValidate' requires 3 arguments: value, min, max");
			}
			return v >= v1 && v <= v2;
	    },
	    lerp : function (a, b, alpha) {
			if (Object.keys(arguments).length > 3) {
				throw new RangeError("[function:Peregrine.Math.lerp|debug:01] Function 'lerp' takes only 3 arguments, not " + Object.keys(arguments).length);
			}
			if (Object.keys(arguments).length < 3) {
				throw new ReferencError("[function:Peregrine.Math.lerp|debug:02] Function 'lerp' requires 3 arguments: value1, value1, alpha");
			}
			return a + alpha * (b - a);
	    },
	    dist : function (x1, y1, x2, y2) {
			if (Object.keys(arguments).length > 4) {
				throw new RangeError("[function:Peregrine.Math.dist|debug:01] Function 'min' takes only 4 arguments, not " + Object.keys(arguments).length);
			}
			if (Object.keys(arguments).length < 4) {
				throw new ReferencError("[function:Peregrine.Math.dist|debug:02] Function 'dist' requires 4 positional arguments: x1, y1, x2, y2");
			}
			return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	    },
		
	    min : function (list) {
			if (Object.keys(arguments).length > 1) {
				throw new RangeError("[function:Peregrine.Math.min|debug:01] Function 'min' takes only 1 array argument, not " + Object.keys(arguments).length);
			}
			return Math.min.apply(null, list);
	    },
	    max : function (list) {
			if (Object.keys(arguments).length > 1) {
				throw new RangeError("[function:Peregrine.Math.max|debug:01] Function 'max' takes only 1 array argument, not " + Object.keys(arguments).length);
			}
			return Math.max.apply(null, list);
	    },
		random : function (min, max) {
			if (Object.keys(arguments).length > 2) {
				throw new RangeError("[function:Peregrine.Math.min|debug:01] Function 'min' takes only 4 arguments, not " + Object.keys(arguments).length);
			}
			if (Object.keys(arguments).length < 2) {
				throw new ReferencError("[function:Peregrine.Math.dist|debug:02] Function 'dist' requires 2 positional arguments: min, max");
			}
			return (Math.random() * Math.abs(max - min)) + min;
	    },
	    average : function (list) {
			if (Object.keys(arguments).length > 1) {
				throw new RangeError("[function:Peregrine.Math.min|debug:01] Function 'min' takes only 1 array argument, not " + Object.keys(arguments).length);
			}
			var total = 0;
			var l = list.length;
			for (var i = 0; i < l; i++) {
				total += list[i];
			}
			return total / l;
	    },
	    sum : function (list) {
			if (Object.keys(arguments).length > 1) {
				throw new RangeError("[function:Peregrine.Math.min|debug:01] Function 'min' takes only 1 array argument, not " + Object.keys(arguments).length);
			}
			var total = 0;
			var l = list.length;
			for (var i = 0; i < l; i++) {
				total += list[i];
			}
			return total;
	    },
		
	    floor : function (v) {
			if (!v) {
				throw new ReferenceError("[function:Peregrine.Math.floor|debug:01] Function 'v' requires 1 value argument");
			}
			if (Object.keys(arguments).length > 1) {
				throw new RangeError("[function:Peregrine.Math.floor|debug:02] Function 'floor' takes only 1 argument, not " + Object.keys(arguments).length);
			}
			return Math.floor(v);
	    },
	    round : function (v, digits) {
			if (Object.keys(arguments).length > 1) {
				throw new RangeError("[function:Peregrine.Math.round|debug:01] Function 'round' takes only 1 argument, not " + Object.keys(arguments).length);
			}
			if (Object.keys(arguments).length < 1) {
				throw new ReferenceError("[function:Peregrine.Math.round|debug:02] Function 'round' requires at least 1 value argument");
			}
			return Math.round(v * Math.pow(10, a)) / Math.pow(10, a);
	    },
	    ceil : function (v) {
			if (!v) {
				throw new ReferenceError("[function:Peregrine.Math.ceil|debug:01] Function 'ceil' requires 1 value argument");
			}
			if (Object.keys(arguments).length > 1) {
				throw new RangeError("[function:Peregrine.Math.ceil|debug:02] Function 'ceil' takes only 1 argument, not " + Object.keys(arguments).length);
			}
			return Math.ceil(v);
	    },
	
	    // EXPONENTIALS
	    log : function (v, b) {
			if (Object.keys(arguments).length > 2) {
				throw new RangeError("[function:Peregrine.Math.log|debug:01] Function 'log' takes only 2 arguments, not " + Object.keys(arguments).length);
			}
			if (Object.keys(arguments).length < 2) {
				throw new ReferenceError("[function:Peregrine.Math.log|debug:02] Function 'log' requires at least 2 value and base arguments: value, base");
			}
			return Math.log(v, b);
	    },
	    sqrt : function (v) {
			if (!v) {
				throw new ReferenceError("[function:Peregrine.Math.sqrt|debug:01] Function 'sqrt' requires 1 value argument");
			}
			if (Object.keys(arguments).length > 1) {
				throw new RangeError("[function:Peregrine.Math.sqrt|debug:02] Function 'sqrt' takes only 1 argument, not " + Object.keys(arguments).length);
			}
			return Math.sqrt(v);
	    },
	    nrt : function (n, v) {
			if (Object.keys(arguments).length > 2) {
				throw new RangeError("[function:Peregrine.Math.nrt|debug:01] Function 'nrt' takes only 2 arguments, not " + Object.keys(arguments).length);
			}
			if (Object.keys(arguments).length < 2) {
				throw new ReferenceError("[function:Peregrine.Math.nrt|debug:02] Function 'nrt' requires at least 2 value and base arguments: value, exponent");
			}
			return Math.pow(v, 1/n);
	    },
	    sq : function (v) {
			if (!v) {
				throw new ReferenceError("[function:Peregrine.Math.sq|debug:01] Function 'sq' requires 1 value argument");
			}
			if (Object.keys(arguments).length > 1) {
				throw new RangeError("[function:Peregrine.Math.sq|debug:02] Function 'sq' takes only 1 argument, not " + Object.keys(arguments).length);
			}
			return Math.pow(v, 2);
	    },
	    pow : function (v, e) {
			if (Object.keys(arguments).length > 2) {
				throw new RangeError("[function:Peregrine.Math.pow|debug:01] Function 'pow' takes only 2 arguments, not " + Object.keys(arguments).length);
			}
			if (Object.keys(arguments).length < 2) {
				throw new ReferenceError("[function:Peregrine.Math.pow|debug:02] Function 'pow' requires at least 2 value and base arguments: value, exponent");
			}
			return Math.pow(v, e);
	    },
	
	    // TRIGONOMETRY
	    sin : function (deg) {
			if (!v) {
				throw new ReferenceError("[function:Peregrine.Math.sin|debug:01] Function 'sin' requires 1 value argument");
			}
			if (Object.keys(arguments).length > 1) {
				throw new RangeError("[function:Peregrine.Math.sin|debug:02] Function 'sin' takes only 1 argument, not " + Object.keys(arguments).length);
			}
			return Math.sin(deg * Math.PI / 180);
	    },
	    cos : function (deg) {
			if (!v) {
				throw new ReferenceError("[function:Peregrine.Math.cos|debug:01] Function 'cos' requires 1 value argument");
			}
			if (Object.keys(arguments).length > 1) {
				throw new RangeError("[function:Peregrine.Math.cos|debug:02] Function 'cos' takes only 1 argument, not " + Object.keys(arguments).length);
			}
			return Math.cos(deg * Math.PI / 180);
	    },
	    tan : function (deg) {
			if (!v) {
				throw new ReferenceError("[function:Peregrine.Math.tan|debug:01] Function 'tan' requires 1 value argument");
			}
			if (Object.keys(arguments).length > 1) {
				throw new RangeError("[function:Peregrine.Math.tan|debug:02] Function 'tan' takes only 1 argument, not " + Object.keys(arguments).length);
			}
			return Math.tan(deg * Math.PI / 180);
	    },
	    asin : function (v) {
			if (!v) {
				throw new ReferenceError("[function:Peregrine.Math.asin|debug:01] Function 'asin' requires 1 value argument");
			}
			if (Object.keys(arguments).length > 1) {
				throw new RangeError("[function:Peregrine.Math.asin|debug:02] Function 'asin' takes only 1 argument, not " + Object.keys(arguments).length);
			}
			return Math.asin(v) * 180 / Math.PI;
	    },
	    acos : function (v) {
			if (!v) {
				throw new ReferenceError("[function:Peregrine.Math.acos|debug:01] Function 'acos' requires 1 value argument");
			}
			if (Object.keys(arguments).length > 1) {
				throw new RangeError("[function:Peregrine.Math.acos|debug:02] Function 'acos' takes only 1 argument, not " + Object.keys(arguments).length);
			}
			return Math.acos(v) * 180 / Math.PI;
	    },
	    atan : function (v) {
			if (!v) {
				throw new ReferenceError("[function:Peregrine.Math.atan|debug:01] Function 'atan' requires 1 value argument");
			}
			if (Object.keys(arguments).length > 1) {
				throw new RangeError("[function:Peregrine.Math.atan|debug:02] Function 'atan' takes only 1 argument, not " + Object.keys(arguments).length);
			}
			return Math.atan(v) * 180 / Math.PI;
	    },
	    atan2 : function (dy, dx) {
			if (!v) {
				throw new ReferenceError("[function:Peregrine.Math.atan2|debug:01] Function 'atan2' requires 1 value argument");
			}
			if (Object.keys(arguments).length > 1) {
				throw new RangeError("[function:Peregrine.Math.atan2|debug:02] Function 'atan2' takes only 1 argument, not " + Object.keys(arguments).length);
			}
			return Math.atan2(dy, dx) * 180 / Math.PI;
	    }
	};
	
	_Date = {
		getDay : function () {
			return {
				raw : (new Date()).getDate(),
				padded : this.zeroPadding((new Date()).getDate(), 2),
				name : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][(new Date()).getDay()]
			};
		},
	    getMonth : function () {
			return {
				raw : (new Date()).getMonth(),
				padded : this.zeroPadding((new Date()).getMonth(), 2),
				name : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][(new Date()).getMonth()]
			};
		},
	    year : function () {
			return {
				raw : (new Date()).getFullYear()
			}
	    },
	    isLeapYear : function () {
			return (new Date()).getFullYear() % 4 === 0;
	    },
	    millis : function () {
			return {
				raw : (new Date()).getMilliseconds(),
				padded : this.zeroPadding(this.raw(), 4)
			};
	    },
	    seconds : function () {
			return {
				raw : (new Date()).getSeconds(),
				padded : this.zeroPadding(this.raw(), 2)
			};
	    },
	    minutes : function () {
			return {
				raw : (new Date()).getMinutes(),
				padded : this.zeroPadding((new Date()).getMinutes(), 2)
			};
	    },
	    hours : function () {
			return {
				raw : (new Date()).getHours() % 24,
				padded : this.zeroPadding((new Date()).getHours() % 24, 2)
			};
	    }
	};
	
	_String = {
	    zeroPadding : function (value, digits) {
			if (Object.keys(arguments).length > 2) {
				throw new RangeError("[function:Peregrine.String.zeroPadding|debug:01] Function 'zeroPadding' takes only 2 arguments, not " + Object.keys(arguments).length);
			}
			if (Object.keys(arguments).length < 2) {
				throw new ReferenceError("[function:Peregrine.String.zeroPadding|debug:02] Function 'zeroPadding' requires at least 2 value and digit-count arguments: value, digits");
			}
			return (new Array(digits - value.toString().length)).fill("0").join("") + value;
	    },
	    closestString : function (matchString, strings) {
			if (Object.keys(arguments).length > 2) {
				throw new RangeError("[function:Peregrine.String.closestString|debug:01] Function 'closestString' takes only 2 arguments, not " + Object.keys(arguments).length);
			}
			if (Object.keys(arguments).length < 2) {
				throw new ReferenceError("[function:Peregrine.String.closestString|debug:02] Function 'closestString' requires at least 2 string and string-array: matchString, stringsToCompare");
			}
			var matches = new Uint8Array(strings.length);
			for (var i = 0; i < matchString.length; i++) {
				for (var v = 0; v < strings.length; v++) {
					if (strings[v][i] === matchString[i]) {
						matches[v] += 1;
					}
				}
			}
			return strings[matches.indexOf(Math.max.apply(null, matches))];
	    }
	};
	
	_Canvas = (function () {
	    var constructor = function (el=null) {
			this.canvas = el;
			if (!!this.canvas) {
				this.canvas.setAttribute("id", "render");
			}
			this.ctx = !!this.canvas ? this.canvas.getContext("2d", { willReadFrequently: true }) : null;
			
			this.isFullscreen = false;
			this.isAutoGenerated = false;
			this.width = 400;
			this.height = 400;
	    };
	    constructor.prototype = {
			autoGenerate : function () {
				var canvas = document.createElement("canvas");
				canvas.setAttribute("id", "render");
				canvas.width = "400";
				canvas.height = "400";
				canvas.style.position = "relative";
				document.querySelector("body").appendChild(canvas);
				
				this.canvas = canvas;
				this.ctx = this.canvas.getContext("2d", { willReadFrequently: true });
				this.isAutoGenerated = true;
				
				var context = this;
				["webkitImageSmoothingEnabled", "mozImageSmoothingEnabled", "imageSmoothingEnabled"].forEach(function (option) {
					context.canvas[option] = false;
					context.ctx[option] = false;
				});
			},
			setSize : function (width, height) {
				if (Object.keys(arguments).length > 2) {
					throw new RangeError("[function:Peregrine.Canvas.setSize|debug:01] Function 'setSize' takes only 2 arguments, not " + Object.keys(arguments).length);
				}
				if (Object.keys(arguments).length < 2) {
					throw new ReferenceError("[function:Peregrine.Canvas.setSize|debug:02] Function 'setSize' requires at least 2 dimensional arguments: width, height");
				}
				if (!this.canvas) {
					throw new ReferenceError("[function:Peregrine.Canvas.setSize|debug:03] Canvas is uninitialized or was not referenced on object construction");
				}
				
				var context = this;
				["webkitImageSmoothingEnabled", "mozImageSmoothingEnabled", "imageSmoothingEnabled"].forEach(function (option) {
					context.canvas[option] = false;
					context.ctx[option] = false;
				});
				
				var canvas = this.canvas;
				
				canvas.width = width.toString();
				canvas.height = height.toString();
				this.width = width;
				this.height = height;
			},
			fullscreen : function () {
				if (!this.canvas) {
					throw new ReferenceError("[function:Peregrine.Canvas.fullscreen|debug:01] Canvas is uninitialized or was not referenced on object construction");
				}
				
				var canvas = this.canvas;
				var width = window.innerWidth;
				var height = window.innerHeight;
				canvas.style.position = "absolute";
				canvas.width = width.toString();
				canvas.height = height.toString();
				canvas.left = "0px";
				canvas.top = "0px";
				this.width = width;
				this.height = height;
				document.querySelector("body").style.overflow = "hidden";
			}
	    };
	    return constructor;
	})();
	
	_Log = {
	    "__logBuffer" : [],
	    "__inputBuffer" : [],
	    "__asyncBuffer" : [],
	    "__prompting" : false,
	    "__shown" : false,
	    "__wrapLog" : false,
	    "__logLimit" : 1024,
	    "__eventListenerApplied" : false,
	    "print" : function (str) {
			if (Object.keys(arguments).length > 1) {
				throw new RangeError("[function:Peregrine.Log.print|debug:01] Function 'print' takes only 1 argument, not " + Object.keys(arguments).length);
			}
			if (Object.keys(arguments).length < 1) {
				throw new ReferenceError("[function:Peregrine.Log.print|debug:02] Function 'print' requires 1 string argument");
			}
			if (!this.__prompting) {
				var logBar = document.getElementById("logBar");
				if (this.__logBuffer.length > this.__logLimit) {
					logBar.innerHTML = "";
					this.__logBuffer = [];
				}
				logBar.innerHTML += "<span style='color:gray'>" + (this.__logBuffer.length + 1) + "</span> " + str.toString() + "<br>";
				logBar.style.display = "block";
				logBar.scrollTo(0, logBar.scrollHeight);
				document.getElementById("closeButton").style.left = (logBar.clientWidth - 30) + "px";
				document.getElementById("closeButton").style.display = "block";
				this.__shown = true;
				this.__logBuffer.push(str);
			} else {
				this.__asyncBuffer.push({
					"callback" : function () {},
					"string" : str,
					"type" : "log"
				});
			}
		},
	    "input" : function (prompt, callback) {
			if (Object.keys(arguments).length > 2) {
				throw new RangeError("[function:Peregrine.Log.input|debug:01] Function 'input' takes only 2 arguments, not " + Object.keys(arguments).length);
			}
			if (Object.keys(arguments).length < 2) {
				throw new ReferenceError("[function:Peregrine.Log.input|debug:02] Function 'input' requires at least 2 string and function-callback arugments: prompt, callback");
			}
			if (!this.__prompting) {
				var logBar = document.getElementById("logBar");
				logBar.innerHTML += "<span style='color:red'>(!)</span> " + prompt.toString() + ": <input id='currentInput' style='color:white;background:black;'>";
				logBar.style.display = "block";
				logBar.scrollTo(0, logBar.scrollHeight);
				document.getElementById("closeButton").style.left = (logBar.clientWidth - 30) + "px";
				document.getElementById("closeButton").style.display = "block";
				this.__shown = true;
				this.__prompting = true;
				this.__inputBuffer.push({
					"callback" : callback,
					"string" : prompt,
					"response" : ""
				});
				if (!this.__eventListenerApplied) {
					this.__eventListenerApplied = true;
					logBar.addEventListener("keydown", function (e) {
						var p = _Graphics;
						if (e.key === "Enter" && p.Log.__prompting) {
							var asyncInput = p.Log.__inputBuffer.slice(-1)[0];
							var el = document.getElementById("currentInput");
							asyncInput.response = el.value;
							asyncInput.callback(asyncInput.response);
							var logBar = document.getElementById("logBar");
							logBar.removeChild(el);
							logBar.innerHTML += asyncInput.response + "<br>";
							p.Log.__prompting = false;
							p.Log.__inputBuffer.pop();
							for (var i = 0; i < p.Log.__asyncBuffer.length; i++) {
								var v = p.Log.__asyncBuffer[i];
								if (v.type === "log") {
									p.Log.print(v.string);
									p.Log.__asyncBuffer.shift();
									i--;
								} else if (v.type === "input") {
									p.Log.input(v.string, v.callback);
									p.Log.__asyncBuffer.shift();
									break;
								}
							}
						}
					});
				}
			} else {
				this.__asyncBuffer.push({
					"callback" : callback,
					"string" : prompt,
					"type" : "input"
				});
			}
	    },
	    "clear" : function () {
			var logBar = document.getElementById("logBar");
			logBar.innerHTML = "";
			this.__logBuffer = [];
	    },
	    "__load" : function () {
			var canvas = document.getElementById("render");
			var cloc = canvas.getBoundingClientRect();
			var logBar = document.createElement("div");
			logBar.style.display = "block";
			logBar.style.position = "absolute";
			logBar.style.background = "black";
			logBar.setAttribute("id", "logBar");
			logBar.style.width = (canvas.width - 16) + "px";
			logBar.style.height = "75px";
			logBar.style.left = (cloc.left) + "px";
			logBar.style.top = (cloc.bottom - 90) + "px";
			logBar.style.color = "white";
			logBar.style.fontFamily = "monospace";
			logBar.style.display = "none";
			logBar.style.overflowX = "scroll";
			logBar.style.whiteSpace = (this.__wrapLog) ? "wrap" : "nowrap";
			logBar.style.padding = "8px";
			// 
			var closeButton = document.createElement("button");
			closeButton.setAttribute("id", "closeButton");
			closeButton.innerHTML = "X";
			closeButton.style.position = "fixed";
			closeButton.style.display = "none";
			closeButton.style.left = (cloc.left + canvas.width - 30) + "px";
			closeButton.style.top = (cloc.top + canvas.height - 80) + "px";
			closeButton.style.borderColor = "rgba(150, 150, 150, 0.9)";
			closeButton.style.borderRadius = "3px";
			closeButton.style.textAlign = "center";
			closeButton.style.color = "white";
			closeButton.style.background = "rgba(150, 150, 150, 0.7)";
			closeButton.style.float = "right";
		
			closeButton.addEventListener('mouseover',function () {
				closeButton.style.background = "rgba(140, 140, 140, 0.9)";
				closeButton.style.cursor = "pointer";
			});
			closeButton.addEventListener('mouseleave', function () {
				closeButton.style.background = "rgba(150, 150, 150, 0.7)";
			});
		
			var context = this;
			window.callback = function () {
				var p = window.Import("graphics/peregrine");
				var logBar = document.getElementById("logBar");
				logBar.innerHTML = "";
				p.Log.__logBuffer = [];
				p.Log.__shown = false;
				p.Log.__prompting = false;
				p.Log.__asyncBuffer = [];
				logBar.style.display = "none";
				document.getElementById("closeButton").style.display = "none";
			};
			closeButton.setAttribute("onclick", "callback()");
		
			document.querySelector("body").appendChild(logBar);
			document.querySelector("body").appendChild(closeButton);
	    }
	};
	
	_Graphics = {
		
		/// - - - INTERAL METADATA - - - ///
		canvasObject : null,
	    canvas : null,
	    ctx : null,
		__draw : function () {},
	    __hints : true,
		__translateBuffer : [],
	    __text : {
			"size" : 12,
			"font" : "sans-serif"
	    },
		__noStroke : false,
		__noFill : false,
		__rectMode : "LEFT TOP",
		__imageMode : "LEFT TOP",
		__angleMode : "DEGREES",
	    __imageCache : {
			
		},

		/// - - - INTERNAL FUNCTIONS - - - ///
	    rgbToHex : function rgbToHex(r, g, b, a) {
			function componentToHex(c) {
				var hex = c.toString(16);
				return hex.length == 1 ? "0" + hex : hex;
			}
			return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b) + componentToHex(a);
	    },

		/// - - - USER CONSTANTS - - - ///
		colors : {
			RED : [255, 0, 0],
			MAROON : [164, 0, 0],
			ORANGE : [255, 127.5, 0],
			BROWN : [164, 127.5, 0],
			YELLOW : [255, 255, 0],
			GOLD : [200, 200, 0],
			GREEN : [0, 164, 0],
			LIME : [0, 255, 0],
			TURQUOISE : [32, 200, 164],
			CYAN : [0, 127.5, 164],
			SKY : [127.5, 245, 245],
			BLUE : [0, 0, 255],
			NAVY : [0, 0, 164],
			LIGHTBLUE : [0, 127.5, 255],
			PURPLE : [127.5, 0, 255],
			LAVENDER : [127.5, 127.5, 245],
			VIOLET : [127.5, 0, 255],
			ROYAL : [64, 0, 164],
			PINK : [255, 0, 255],
			COTTONCANDY : [245, 220, 255],
			LIGHTGRAY : [200, 200, 200],
			ASH : [160, 160, 160],
			GRAY : [127.5, 127.5, 127.5],
			DARKGRAY : [64, 64, 64],
			JET : [16, 16, 16],
			BLACK : [0, 0, 0],
			WHITE : [255, 255, 255],
			OFFWHITE_BLUE : [240, 240, 255],
			OFFWHITE_GREEN : [240, 255, 240],
			OFFWHITE_RED : [255, 240, 240],
			OFFWHITE_EGGSHELL : [245, 245, 220],
			OFFWHITE_SKIN : [232, 224, 177],
		},

		/// - - - USER FUNCTIONS - - - ///
		draw : function (callback) {
			if (Object.keys(arguments).length > 1) {
				throw new RangeError("[function:Peregrine.Graphics.draw|debug:01] Function 'draw' takes only 1 argument, not " + Object.keys(arguments).length);
			}
			if (Object.keys(arguments).length < 1) {
				throw new ReferenceError("[function:Peregrine.Graphics.draw|debug:02] Function 'draw' requires 1 function-callback argument: width, height");
			}
			if (!(callback instanceof Function)) {
				throw new TypeError("[function:Peregrine.Graphics.draw|debug:03] Callback value must be a function or instance of Function");
			}
			this.__draw = callback;
		},
	    noHints : function () {
			this.__hints = false;
	    },
	    useHints : function () {
			this.__hints = true;
	    },
	    bindCanvas : function (c) {
			if (Object.keys(arguments).length > 1) {
				throw new RangeError("[function:Peregrine.Graphics.bindCanvas|debug:01] Function 'bindCanvas' takes only 1 argument, not " + Object.keys(arguments).length);
			}
			if (Object.keys(arguments).length < 1) {
				throw new ReferenceError("[function:Peregrine.Graphics.bindCanvas|debug:02] Function 'bindCanvas' requires 1 object-canvas argument");
			}
			if (!(c instanceof _Canvas)) {
				throw new TypeError("[function:Peregrine.Graphics.bindCanvas|debug:03] Canvas referenced is not instance of Peregrine.Canvas");
			}
			this.canvasObject = c;
			this.canvas = c.canvas;
			this.ctx = c.ctx;
			_Log.__load();
			_Event.__addEvents();
	    },
	
	    pushMatrix : function () {
			this.__translateBuffer.push([0, 0]);
	    },
	    popMatrix : function () {
			if (this.__translateBuffer.length > 0) {
				var _t = this.__translateBuffer[this.__translateBuffer.length - 1];
				this.ctx.translate(-_t[0], -_t[1]);
				this.__translateBuffer.pop();
			}
	    },
	    translate : function (x, y) {
			if (Object.keys(arguments).length > 2) {
				throw new RangeError("[function:Peregrine.Graphics.translate|debug:01] Function 'translate' takes only 2 argument, not " + Object.keys(arguments).length);
			}
			if (Object.keys(arguments).length < 2) {
				throw new ReferenceError("[function:Peregrine.Graphics.translate|debug:02] Function 'translate' requires at least 2 offset arguments: dx, dy");
			}
			if (this.__translateBuffer.length > 0) {
				var _t = this.__translateBuffer[this.__translateBuffer.length - 1];
				_t[0] += x;
				_t[1] += y;
			}
			this.ctx.translate(x, y);
	    },
		angleMode : function (type) {
			if (!type) {
				throw new ReferenceError("[function:Peregrine.Graphics.angleMode|debug:01] Function 'angleMode' requires an input string to define setting");
			}
			if (!["DEGREES", "RADIANS"].includes(type)) {
				throw new Error("[function:Peregrine.Graphics.angleMode|debug:02] Accepted angleMode types are: DEGREES, RADIANS");
			}
			this.__angleMode = type;
		},
	    rotate : function (degrees) {
			if (!degrees) {
				throw new ReferenceError("[function:Peregrine.Graphics.rotate|debug:01] Function 'rotate' requires an input value for rotation transformation");
			}
			this.ctx.rotate(degrees * Math.PI / 180);
	    },
	    scale : function (sx, sy) {
			if (!sx) {
				throw new ReferenceError("[function:Peregrine.Graphics.scale|debug:01] Function 'scale' requires at least one input scale value");
			}
			this.ctx.scale(sx, sy);
	    },
	    fill : function (r, g, b, a = 255) {
			if (!r && r !== 0) {
				throw new ReferenceError("[function:Peregrine.Graphics.fill|debug:01] Function 'fill' requires at least 1 input color value");
			}
			if (r instanceof Array) {
				var nr = [];
				if (r.length === 1) {
					nr = Array(4).fill(r[0]);
				} else if (r.length === 2) {
					nr = Array(4).fill(r[0]);
					nr[4] = r[3];
				} else if (r.length === 3) {
					nr = r;
					nr[4] = r[3];
				} else if (r.length > 4) {
					throw new RangeError("[function:Peregrine.Graphics.fill|debug:02] Function 'fill' takes a maximum of 4 arguments: 0-255 {RED} , 0-255 {GREEN}, 0-255 {BLUE}, 0-255 {ALPHA/TRANSPARENCY}");
				}
				this.ctx.fillStyle = this.rgbToHex.apply(null, nr);
				this.__noFill = false;
			} else {
				this.ctx.fillStyle = this.rgbToHex(r, g, b, a);
				this.__noFill = false;
			}
	    },
	    noFill : function () {
			this.fill(0, 0, 0, 0);
			this.__noFill = true;
	    },
	    stroke : function (r, g, b, a = 255) {
			if (!r && r !== 0) {
				throw new ReferenceError("[function:Peregrine.Graphics.stroke|debug:01] Function 'stroke' requires at least 1 input color value");
			}
			if (r instanceof Array) {
				var nr = [];
				if (r.length === 1) {
					nr = Array(4).fill(r[0]);
				} else if (r.length === 2) {
					nr = Array(4).fill(r[0]);
					nr[4] = r[3];
				} else if (r.length === 3) {
					nr = r;
					nr[4] = r[3];
				} else if (r.length > 4) {
					throw new RangeError("[function:Peregrine.Graphics.stroke|debug:02] Function 'stroke' takes a maximum of 4 arguments: 0-255 {RED} , 0-255 {GREEN}, 0-255 {BLUE}, 0-255 {ALPHA/TRANSPARENCY}");
				}
				this.ctx.strokeStyle = this.rgbToHex.apply(null, nr);
				this.__noStroke = false;
			} else {
				this.ctx.strokeStyle = this.rgbToHex(r, g, b, a);
				this.__noStroke = false;
			}
	    },
	    noStroke : function () {
			this.stroke(0, 0, 0, 0);
			this.__noStroke = true;
	    },
	    strokeWeight : function (v) {
			this.ctx.lineWidth = v;
			this.__noStroke = false;
	    },
	    background : function (r, g, b, a) {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			if (!r) {
				throw new ReferenceError("[function:Peregrine.Graphics.background|debug:01] Function 'background' requires at least 1 input color value");
			}
			if (r instanceof Array) {
				var nr = [];
				if (r.length === 1) {
					nr = Array(4).fill(r[0]);
				} else if (r.length === 2) {
					nr = Array(4).fill(r[0]);
					nr[4] = r[3];
				} else if (r.length === 3) {
					nr = r;
					nr[4] = r[3];
				} else if (r.length > 4) {
					throw new RangeError("[function:Peregrine.Graphics.background|debug:02] Function 'background' takes a maximum of 4 arguments: 0-255 {RED} , 0-255 {GREEN}, 0-255 {BLUE}, 0-255 {ALPHA/TRANSPARENCY}");
				}
				this.fill.apply(null, nr);
				this.__noFill = false;
			} else {
				this.fill(r, g, b, a);
				this.__noFill = false;
			}
			this.noStroke();
			this.rect(0, 0, this.canvas.width, this.canvas.height);
	    },
	    line : function (x1, y1, x2, y2) {
			if (Object.keys(arguments).length < 4) {
				throw new ReferenceError("[function:Peregrine.Graphics.line|debug:01] Function 'line' requires at least 4 positional arguments: x1, y1, x2, y2");
			}
			if (Object.keys(arguments).length > 4) {
				throw new RangeError("[function:Peregrine.Graphics.line|debug:02] Function 'line' takes only 4 argument, not " + Object.keys(arguments).length);
			}
			this.ctx.beginPath();
			this.ctx.moveTo(x1, y1);
			this.ctx.lineTo(x2, y2);
			this.ctx.closePath();
			if (!this.__noStroke) {
				this.ctx.stroke();
			}
	    },
	    rect : function (x, y, w, h, r = [0, 0, 0, 0]) {
			if (Object.keys(arguments).length < 4) {
				throw new ReferenceError("[function:Peregrine.Graphics.rect|debug:01] Function 'rect' requires at least 4 positional and dimensional arguments: x, y, width, height");
			}
			if (Object.keys(arguments).length > 4) {
				throw new RangeError("[function:Peregrine.Graphics.rect|debug:02] Function 'rect' takes only 4 argument, not " + Object.keys(arguments).length);
			}
			this.ctx.beginPath();
			this.ctx.roundRect(x, y, w, h, r);
			if (!this.__noFill) {
				this.ctx.fill();
			}
			if (!this.__noStroke) {
				this.ctx.stroke();
			}
	    },
	    ellipse : function (x, y, w, h) {
			if (Object.keys(arguments).length < 4) {
				throw new ReferenceError("[function:Peregrine.Graphics.ellipse|debug:01] Function 'ellipse' requires at least 4 positional and dimensional arguments: x, y, width, height");
			}
			if (Object.keys(arguments).length > 4) {
				throw new RangeError("[function:Peregrine.Graphics.ellipse|debug:02] Function 'ellipse' takes only 4 argument, not " + Object.keys(arguments).length);
			}
			this.ctx.beginPath();
			this.ctx.ellipse(x, y, w, h, 0, 0, 2 * Math.PI);
			if (!this.__noFill) {
				this.ctx.fill();
			}
			if (!this.__noStroke) {
				this.ctx.stroke();
			}
	    },
		circle : function (x, y, r) {
			if (Object.keys(arguments).length < 3) {
				throw new ReferenceError("[function:Peregrine.Graphics.circle|debug:01] Function 'circle' requires at least 4 positional and dimensional arguments: x, y, radius");
			}
			if (Object.keys(arguments).length > 3) {
				throw new RangeError("[function:Peregrine.Graphics.circle|debug:02] Function 'circle' takes only 3 argument, not " + Object.keys(arguments).length);
			}
			this.ctx.beginPath();
			this.ctx.ellipse(x, y, r * 2, r * 2, 0, 0, 2 * Math.PI);
			if (!this.__noFill) {
				this.ctx.fill();
			}
			if (!this.__noStroke) {
				this.ctx.stroke();
			}
		},
	    triangle : function (x1, y1, x2, y2, x3, y3) {
			if (Object.keys(arguments).length < 6) {
				throw new ReferenceError("[function:Peregrine.Graphics.triangle|debug:01] Function 'triangle' requires at least 6 positional arguments: x1, y1, x2, y2, x3, y3");
			}
			if (Object.keys(arguments).length > 6) {
				throw new RangeError("[function:Peregrine.Graphics.triangle|debug:02] Function 'triangle' takes only 6 argument, not " + Object.keys(arguments).length);
			}
			this.ctx.beginPath();
			this.ctx.moveTo(x1, y1);
			this.ctx.lineTo(x2, y2);
			this.ctx.lineTo(x3, y3);
			this.ctx.closePath();
			if (!this.__noStroke) {
				this.ctx.stroke();
			}
			if (!this.__noFill) {
				this.ctx.fill();
			}
	    },
	    quad : function (x1, y1, x2, y2, x3, y3, x4, y4) {
			if (Object.keys(arguments).length < 8) {
				throw new ReferenceError("[function:Peregrine.Graphics.quad|debug:01] Function 'quad' requires at least 8 positional arguments: x1, y1, x2, y2, x3, y3, x4, y4");
			}
			if (Object.keys(arguments).length > 8) {
				throw new RangeError("[function:Peregrine.Graphics.quad|debug:02] Function 'quad' takes only 8 argument, not " + Object.keys(arguments).length);
			}
			this.ctx.beginPath();
			this.ctx.moveTo(x1, y1);
			this.ctx.lineTo(x2, y2);
			this.ctx.lineTo(x3, y3);
			this.ctx.lineTo(x4, y4);
			this.ctx.closePath();
			if (!this.__noStroke) {
				this.ctx.stroke();
			}
			if (!this.__noFill) {
				this.ctx.fill();
			}
	    },
	    poly : function (array) {
			if (!array) {
				throw new ReferenceError("[function:Peregrine.Graphics.poly|debug:01] Function 'poly' requires at least 2 positional arguments: x1, y1, xn, yn");
			}
			if (Object.keys(arguments).length > 2) {
				throw new RangeError("[function:Peregrine.Graphics.poly|debug:02] Function 'poly' takes only 2 argument, not " + Object.keys(arguments).length);
			}
			if (array instanceof Array) {
				this.ctx.beginPath();
				this.ctx.moveTo(array[0], array[0]);
				for (var i = 2; i < array.length; i += 2) {
					this.ctx.lineTo(array[i], array[i + 1]);
				}
				this.ctx.closePath();
				if (!this.__noStroke) {
					this.ctx.stroke();
				}
				if (!this.__noFill) {
					this.ctx.fill();
				}
				return;
			} 
			this.ctx.beginPath();
			this.ctx.moveTo(arguments[0], arguments[0]);
			for (var i = 2; i < arguments.length; i += 2) {
				this.ctx.lineTo(arguments[i], arguments[i + 1]);
			}
			this.ctx.closePath();
			if (!this.__noStroke) {
				this.ctx.stroke();
			}
			if (!this.__noFill) {
				this.ctx.fill();
			}
	    },
	    arc : function (x, y, w, h, start, end) {
			if (Object.keys(arguments).length < 6) {
				throw new ReferenceError("[function:Peregrine.Graphics.arc|debug:01] Function 'arc' requires at least 6 positional, dimensional, and sector-range arguments: x, h, width, height, start, end");
			}
			if (Object.keys(arguments).length > 6) {
				throw new RangeError("[function:Peregrine.Graphics.arc|debug:02] Function 'arc' takes only 6 argument, not " + Object.keys(arguments).length);
			}
			this.ctx.beginPath();
			this.ctx.ellipse(x, y, w, h, 0, start * Math.PI / 180, end * Math.PI / 180);
			if (!this.__noFill) {
				this.ctx.fill();
			}
			if (!this.__noStroke) {
				this.ctx.stroke();
			}
	    },
	    image : function (img, x, y, w, h, dx, dy, dw, dh) {
			if (Object.keys(arguments).length < 3) {
				throw new ReferenceError("[function:Peregrine.Graphics.image|debug:01] Function 'image' requires at least 3 image-object and positional arguments: imageObject, x, y");
			}
			if (Object.keys(arguments).length > 9) {
				throw new RangeError("[function:Peregrine.Graphics.image|debug:02] Function 'image' takes only 9 argument, not " + Object.keys(arguments).length);
			}
			if (!dx) {
				var width, height;
				if (w < 0 && h >= 0) {
					width = Math.round(img.width * (h / img.height));
					height = h;
				} else if (h < 0 && w >= 0) {
					width = w;
					height = Math.round(img.height * (w / img.width));
				} else if (w === undefined && h === undefined) {
					width = img.width;
					height = img.height;
				} else if (w < 0 && h < 0) {
					width = img.width;
					height = img.height;
				} else {
					width = w;
					height = h;
				}
				this.ctx.drawImage(img, x, y, width, height);
			} else {
				this.ctx.drawImage(img, x, y, w, h, dx, dy, dw, dh);
			}
	    },
	    createImage : function (url) {
			var img = new Image();
			img.src = url;
			return img;
	    },
	    textSize : function (value) {
			if (!value) {
				throw new ReferenceError("[function:Peregrine.Graphics.textSize|debug:01] Function 'textSize' requires at least 1 argument");
			}
			this.__text.size = value;
	    },
	    textFont : function (name) {
			if (!name) {
				throw new ReferenceError("[function:Peregrine.Graphics.textFont|debug:01] Function 'textFont' requires at least 1 string argument");
			}
			this.__text.font = name;
	    },
	    textAlign : function (alignment) {
			if (!alignment) {
				throw new ReferenceError("[function:Peregrine.Graphics.textAlign|debug:01] Function 'textAlign' requires at least 1 string argument");
			}
			this.ctx.textAlign = alignment;
	    },
	    text : function (string, x, y, mw) {
			if (Object.keys(arguments).length < 3) {
				throw new ReferenceError("[function:Peregrine.Graphics.text|debug:01] Function 'text' requires at least 3 string and positional arguments: string, x, y");
			}
			if (Object.keys(arguments).length > 4) {
				throw new RangeError("[function:Peregrine.Graphics.text|debug:02] Function 'text' takes only 4 argument, not " + Object.keys(arguments).length);
			}
			this.ctx.font = this.__text.size + "px " + this.__text.font;
			this.ctx.beginPath();
			this.ctx.fillText(string, x, y, mw);
	    },
	    button : function (mx, my, x, y, dx, dy) {
			if (Object.keys(arguments).length > 6) {
				throw new RangeError("[function:Peregrine.Graphics.button|debug:01] Function 'button' takes only 6 argument, not " + Object.keys(arguments).length);
			}
			if (Object.keys(arguments).length < 6) {
				throw new ReferenceError("[function:Peregrine.Graphics.button|debug:02] Function 'button' requires at least 6 value and base arguments: value, exponent");
			}
			return (mx > x && mx < x + dx && my > y && my < y + dy);
	    }
	};
	
	_Event = {
		"__mousePress" : function () {},
	    "__mouseRelease" : function () {},
	    "__mouseMove" : function () {},
	    "__mouseOut" : function () {},
	    "__mouseEnter" : function () {},
	    "__mouseDoubleClick" : function () {},
	    "__keyPress" : function () {},
	    "__keyRelease" : function () {},
		"mouse" : {
			"x" : -1,
			"y" : -1,
			"button" : undefined,
			"pressed" : false
	    },
	    "keyboard" : {
			"key" : {
				"code" : undefined,
				"name" : undefined
			},
			"keys" : {},
			"pressed" : false
	    },
		"mousePressed" : function (callback) {
			if (!callback) {
				throw new ReferenceError("[function:Peregrine.Event.mousePressed|debug:01] Function 'mousePressed' requires at least 1 callback argument");
			}
			_Event.__mousePress = callback;
		},
		"mouseReleased" : function (callback) {
			if (!callback) {
				throw new ReferenceError("[function:Peregrine.Event.mouseReleased|debug:01] Function 'mouseReleased' requires at least 1 callback argument");
			}
			_Event.Program.__mouseRelease = callback;
		},
		"mouseMove" : function (callback) {
			if (!callback) {
				throw new ReferenceError("[function:Peregrine.Event.mouseMove|debug:01] Function 'mouseMove' requires at least 1 callback argument");
			}
			_Event.Program.__mouseMove = callback;
		},
		"mouseOut" : function (callback) {
			if (!callback) {
				throw new ReferenceError("[function:Peregrine.Event.mouseOut|debug:01] Function 'mouseOut' requires at least 1 callback argument");
			}
			_Event.Program.__mouseOut = callback;
		},
		"mouseEnter" : function (callback) {
			if (!callback) {
				throw new ReferenceError("[function:Peregrine.Event.mouseEnter|debug:01] Function 'mouseEnter' requires at least 1 callback argument");
			}
			_Event.Program.__mouseEnter = callback;
		},
		"mouseDoubleClick" : function (callback) {
			if (!callback) {
				throw new ReferenceError("[function:Peregrine.Event.mouseDoubleClick|debug:01] Function 'mouseDoubleClick' requires at least 1 callback argument");
			}
			_Event.Program.__mouseDoubleClick = callback;
		},
		"keyPressed" : function (callback) {
			if (!callback) {
				throw new ReferenceError("[function:Peregrine.Event.keyPressed|debug:01] Function 'keyPressed' requires at least 1 callback argument");
			}
			_Event.Program.__keyPress = callback;
		},
		"keyReleased" : function (callback) {
			if (!callback) {
				throw new ReferenceError("[function:Peregrine.Event.keyReleased|debug:01] Function 'keyReleased' requires at least 1 callback argument");
			}
			_Event.Program.__keyRelease = callback;
		},
		"__addEvents" : function () {
			var el = document.getElementById("render");
			el.addEventListener("mousedown", function (e) {
				_Event.mouse.button = e.button;
				_Event.__mousePress(e);
				_Event.mouse.pressed = true;
			});
			el.addEventListener("mouseup", function (e) {
				_Event.mouse.button = e.button;
				_Event.__mouseRelease(e);
				_Event.mouse.pressed = false;
			});
			el.addEventListener("mousemove", function (e) {
				_Event.mouse.x = e.offsetX;
				_Event.mouse.y = e.offsetY;
				_Event.__mouseMove(e);
			});
			el.addEventListener("mouseout", function (e) {
				_Event.mouse.x = e.offsetX;
				_Event.mouse.y = e.offsetY;
				_Event.__mouseOut(e);
			});
			el.addEventListener("mouseenter", function (e) {
				_Event.mouse.x = e.offsetX;
				_Event.mouse.y = e.offsetY;
				_Event.__mouseEnter(e);
			});
			el.addEventListener("dblclick", function (e) {
				_Event.mouse.button = e.button;
				_Event.__mouseDoubleClick(e);
				_Event.mouse.pressed = true;
			});
			window.addEventListener("keydown", function (e) {
				var currentInput = document.getElementById("currentInput");
				if (currentInput !== null) return;
				_Event.keyboard.pressed = true;
				_Event.keyboard.key.code = e.keyCode;
				_Event.keyboard.key.name = e.key;
				_Event.keyboard.keys[e.key] = true;
				_Event.__keyPress(e);
			});
			window.addEventListener("keyup", function (e) {
				var currentInput = document.getElementById("currentInput");
				if (currentInput !== null) return;
				_Event.keyboard.pressed = false;
				_Event.keyboard.key.code = e.keyCode;
				_Event.keyboard.key.name = e.key;
				delete _Event.keyboard.keys[e.key];
				_Event.__keyRelease(e);
			});
		}
	};
	
	_Program = {
	    "__targetFrameRate" : 60,
	    "__frameRate" : 0,
	    "__startSeconds" : new Date().getSeconds(),
	    "seconds" : function () {
			return new Date().getSeconds() - this.__startSeconds;
	    },
	    "frameRate" : function (r) {
			if (!r) {
				throw new ReferenceError("[function:Peregrine.Program.frameRate|debug:01] Function 'frameRate' requires at least 1 callback argument");
			}
			this.__targetFrameRate = r;
	    },
	    "run" : function () {
			var parent = window.Import("graphics/peregrine");
			var p = window.Import("graphics/peregrine").Graphics;
			var targetInterval = 1000 / this.__targetFrameRate;
			var currentInterval = targetInterval;
			function run () {
				var t1 = new Date();
				var before = performance.now();//t1.getMilliseconds();
				p.__draw();
				parent.frameCount++;
				var t2 = new Date();
				var after = performance.now();//t2.getMilliseconds();
				var delay = (after - before);
				parent.__frameRate = Math.round(delay) + ", \n" + Math.round(currentInterval) + ", \n" + Math.round(1000 / (currentInterval + delay));
				currentInterval = parent.Tools.constrain(targetInterval - delay, 0, Infinity);
				if (parent.frameCount % 60 === 0) {
				//console.log(currentInterval);
				}
				setTimeout(run, currentInterval - 2);
				//parent.__frameRate = (1000 / (currentInterval + delay));
			}
			run();
	    },
	    "frameCount" : 0,
	}
	return {
		Canvas : _Canvas,
		Date : _Date,
		Event : _Event,
		Graphics : _Graphics,
		Log : _Log,
		Math : _Math,
		Program : _Program,
		String : _String,
	};
})();
