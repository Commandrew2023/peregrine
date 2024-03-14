var Peregrine = {



	/// THIS IS A SIZEABLE CHANGE THAT JSDELIVR WILL PICK UP AND THEN USE

	
	Tools : {
	    // ANIMATION-ORIENTATED
	    varrain : function (v, min, max) {
		if (v < min) {
		    v = min;
		} else if (v > max) {
		    v = max;
		}
		return v;
	    },
	    inBounds : function (v, v1, v2) {
		return (v >= v1 && v <= v2);
	    },
	    lerp : function (a, b, alpha) {
		return a + alpha * (b - a);
	    },
	    dist : function (x1, y1, x2, y2) {
		return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	    },
	
	    // GAME-MAKING
	    random : function (min, max) {
		return (Math.random() * Math.abs(max - min)) + min;
	    },
	    min : function (list) {
		var cmin = list[0] || -Infinity;
		var l = list.length;
		for (var i = 0; i < l; i++) {
		    var v = list[i];
		    cmin = (v < cmin ? v : cmin);
		}
		return cmin;
	    },
	    max : function (list) {
		var cmax = list[0] || Infinity;
		var l = list.length;
		for (var i = 0; i < l; i++) {
		    var v = list[i];
		    cmax = (v > cmax ? v : cmax);
		}
		return cmax;
	    },
	    average : function (list) {
		var total = 0;
		var l = list.length;
		for (var i = 0; i < l; i++) {
		    total += list[i];
		}
		return total / l;
	    },
	    sum : function (list) {
		var total = 0;
		var l = list.length;
		for (var i = 0; i < l; i++) {
		    total += list[i];
		}
		return total;
	    },
	    // HANDLING FLOATING POINTS
	    floor : function (v) {
		return Math.floor(v);
	    },
	    round : function (v, a = 1) {
		return Math.round(v * a) / a;
	    },
	    ceil : function (v) {
		return Math.ceil(v);
	    },
	
	    // EXPONENTIALS
	    log : function (v, b) {
		return Math.log(v, b);
	    },
	    sqrt : function (v) {
		return Math.sqrt(v);
	    },
	    nrt : function (n, v) {
		return Math.pow(v, 1/n);
	    },
	    sq : function (v) {
		return Math.pow(v, 2);
	    },
	    pow : function (v, e) {
		return Math.pow(v, e);
	    },
	
	    // TRIGONOMETRY
	    sin : function (deg) {
		return Math.sin(deg * Math.PI / 180);
	    },
	    cos : function (deg) {
		return Math.cos(deg * Math.PI / 180);
	    },
	    tan : function (deg) {
		return Math.tan(deg * Math.PI / 180);
	    },
	    asin : function (v) {
		return Math.asin(v) * 180 / Math.PI;
	    },
	    acos : function (v) {
		return Math.acos(v) * 180 / Math.PI;
	    },
	    atan : function (v) {
		return Math.atan(v) * 180 / Math.PI;
	    },
	    atan2 : function (dy, dx) {
		return Math.atan2(dy, dx) * 180 / Math.PI;
	    },
	
	
	    // TIME
	    day : function () {
		return (new Date()).getDate();
	    },
	    dayPadded : function () {
		if (this.day() < 10) {
		    return "0" + this.day();
		} else {
		    return this.day().toString();
		}
	    },
	    month : function () {
		return (new Date()).getMonth() + 1;
	    },
	    monthPadded : function () {
		if (this.month() < 10) {
		    return "0" + this.month();
		} else {
		    return this.month().toString();
		}
	    },
	    year : function () {
		return (new Date()).getFullYear();
	    },
	    dayName : function () {
		return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][(new Date()).getDay()];
	    },
	    monthName : function () {
		return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][(new Date()).getMonth()];
	    },
	    isLeap : function () {
		return (new Date()).getFullYear() % 4 === 0;
	    },
	    millis : function () {
		return (new Date()).getMilliseconds();
	    },
	    millisPadded : function () {
		if (this.millis() < 10) {
		    return "000" + this.millis();
		} else if (this.millis() < 100) {
		    return "00" + this.millis();
		} else if (this.millis() < 1000) {
		    return "0" + this.millis();
		} else {
		    return this.millis().toString();
		}
	    },
	    seconds : function () {
		return (new Date()).getSeconds();
	    },
	    secondsPadded : function () {
		if (this.seconds() < 10) {
		    return "0" + this.seconds();
		} else {
		    return this.seconds().toString();
		}
	    },
	    minutes : function () {
		return (new Date()).getMinutes();
	    },
	    minutesPadded : function () {
		if (this.minutes() < 10) {
		    return "0" + this.minutes();
		} else {
		    return this.minutes().toString();
		}
	    },
	    hours : function () {
		return (new Date()).getHours() % 12;
	    },
	    hoursPadded : function () {
		if (this.hours() < 10) {
		    return "0" + this.hours();
		} else {
		    return this.hours().toString();
		}
	    },
	    padding : function (value, digits) {
		return (new Array(digits - value.toString().length)).fill("0").join("") + value;
	    },
	
	    // TECHNICAL STUFF
	    ods : function (object, key, depthLimit=16) {
		// Object-Deep-Search-(Query)
	
		var depth = 0;
		function recur (object, key) {
		    depth++;
		    if (depth > depthLimit) {
			return undefined;
		    }
		    var keys = Object.keys(object);
		    var l = keys.length;
		    for (var i = 0; i < l; i++) {
			if (keys[i] !== key) {
			    var next = recur(
				object[keys[i]], 
				key
			    );
			    if (next !== undefined) {
				return next;
			    }
			} else {
			    return object[
				keys[i]
			    ];
			}
		    }
		    return undefined;
		}
	
		var result = recur(object, key);
		return result;
	    },
	    odsPath : function (object, key, depthLimit=16) {
		// Object-Deep-Search-(Query)-PATH
		var depth = 0;
		var address = [];
		function recur (object, key) {
		    depth++;
		    if (depth > depthLimit) {
			return undefined;
		    }
		    var keys = Object.keys(object);
		    var l = keys.length;
		    for (var i = 0; i < l; i++) {
			if (keys[i] !== key) {
			    var next = recur(
				object[keys[i]], 
				key
			    );
			    address.unshift(keys[i]);
			    if (next !== undefined) {
				return next;
			    } else {
				address.pop();
			    }
	
			} else {
			    address.push(keys[i]);
			    return address;
			}
		    }
		    return undefined;
		}
	
		var result = recur(object, key);
		return result;
	    },
	    odsPathUse : function (object, path) {
		var FailKey = "";
		var l = path.length;
		for (var i = 0; i < l; i++) {
		    object = object[path[i]];
		    if (object === undefined) {
			FailKey = path[i];
		    }
		}
		return object;
	    },
	    closestString : function (strings, string) {
		var matches = new Uint8Array(strings.length);
		for (var i = 0; i < string.length; i++) {
		    for (var v = 0; v < strings.length; v++) {
			if (strings[v][i] === string[i]) {
			    matches[v] += 1;
			}
		    }
		}
		return strings[matches.indexOf(Math.max.apply(null, matches))];
	    },
	    objectDefaults : function (object, defaultPackage) {
		Object.keys(defaultPackage).forEach(function (key) {
		    if (object[key] === undefined) {
			object[key] = defaultPackage[key];
		    }
		});
	    },
	
	    button : function (mx, my, x, y, dx, dy) {
		return (mx > x && mx < x + dx && my > y && my < y + dy);
	    }
	},
	Canvas : (function () {
	    var obj = function () {
		this.ctx = null;
		this.canvas = null;
		this.width = 400;
		this.height = 400;
	    };
	    obj.prototype = {
		init : function () {
		    var canvas = document.createElement("canvas");
		    canvas.setAttribute("id", "render");
		    canvas.width = "400";
		    canvas.height = "400";
		    canvas.style.margin = "-8px";
		    canvas.style.position = "relative";
		    document.querySelector("body").appendChild(canvas);
		    this.canvas = document.getElementById("render");
		    this.ctx = this.canvas.getContext("2d", { willReadFrequently: true });
		},
		setSize : function (width, height) {
		    var canvas = this.canvas !== null ? this.canvas : alert("Cannot set dimensions of uninitialized canvas");
		    canvas.width = width.toString();
		    canvas.height = height.toString();
		    this.width = width;
		    this.height = height;
		},
		fullscreen : function () {
		    var canvas = this.canvas !== null ? this.canvas : alert("Cannot set dimensions of uninitialized canvas");
		    canvas.style.position = "absolute";
		    var width = window.innerWidth;
		    var height = window.innerHeight;
		    canvas.width = width.toString();
		    canvas.height = height.toString();
		    canvas.left = "0px";
		    canvas.top = "0px";
		    this.width = width;
		    this.height = height;
		    document.querySelector("body").style.overflow = "hidden";
		}
	    };
	    return obj;
	})(),
	Log : {
	    "__logBuffer" : [],
	    "__inputBuffer" : [],
	    "__asyncBuffer" : [],
	    "__prompting" : false,
	    "__shown" : false,
	    "__wrapLog" : false,
	    "__logLimit" : 1024,
	    "__eventListenerApplied" : false,
	    "print" : function (str) {
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
			    var p = window.Import("graphics/peregrine");
			    //alert(`${e.key} & ${Peregrine.Log.__prompting}`);
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
	},
	__globalGraphics : null,
	Graphics : {
	    canvas : null,
	    ctx : null,
	    imageData : [],
	    draw : function (callback) {},
	    __hints : true,
	    __text : {
		"size" : 12,
		"font" : "sans-serif"
	    },
	    __imageCache : {},
	    __convertRGB : function rgbToHex(r, g, b, a) {
		function componentToHex(c) {
		    var hex = c.toString(16);
		    return hex.length == 1 ? "0" + hex : hex;
		}
		return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b) + componentToHex(a);
	    },
	    editPixels : function (callback) {
		//this.ctx.willReadFrequently = true;
		var imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
		var d = imageData.data;
		for (var i = 0; i < d.length; i += 4) 
		    if (callback(i, d)) break;
		this.ctx.putImageData(imageData, 0, 0);
	    },
	    loadImageData : function () {
		//console.log(this.ctx.willReadFrequently);
		this.imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height)
		return this.imageData.data;
	    },
	    updateImageData : function () {
		//this.ctx.willReadFrequently = true;
		this.ctx.putImageData(this.imageData, 0, 0);
	    },
	
	    noHints : function () {
		this.__hints = false;
	    },
	    useHints : function () {
		this.__hints = true;
	    },
	    bindCanvas : function (c) {
		this.canvas = c.canvas;
		this.ctx = this.canvas.getContext("2d");
		//this.ctx.willReadFrequently = true;
		this.__globalGraphics = this.ctx;
		//this.__globalGraphics.willReadFrequently = true;
	    },
	    bindLoop : function (callback) {
		this.draw = callback;
	    },
	
	    pushMatrix : function () {
		this.ctx.save();
	    },
	    popMatrix : function () {
		this.ctx.restore();
	    },
	    translate : function (x, y) {
		this.ctx.translate(x, y);
	    },
	    rotate : function (degrees) {
		this.ctx.rotate(degrees * Math.PI / 180);
	    },
	    scale : function (sx, sy) {
		this.ctx.scale(sx, sy);
	    },
	    fill : function (r, g, b, a = 255) {
		this.ctx.fillStyle = this.__convertRGB(r, g, b, a);
	    },
	    noFill : function () {
		this.fill(0, 0, 0, 0);
	    },
	    stroke : function (r, g, b, a = 255) {
		this.ctx.strokeStyle = this.__convertRGB(r, g, b, a);
	    },
	    noStroke : function () {
		this.stroke(0, 0, 0, 0);
	    },
	    strokeWeight : function (v) {
		this.ctx.lineWidth = v;
	    },
	    background : function (r, g, b) {
		this.fill(r, g, b);
		this.noStroke();
		this.rect(0, 0, this.canvas.width, this.canvas.height);
	    },
	    line : function (x1, y1, x2, y2) {
		this.ctx.beginPath();
		this.ctx.moveTo(x1, y1);
		this.ctx.lineTo(x2, y2);
		this.ctx.closePath();
		this.ctx.stroke();
	    },
	    rect : function (x, y, w, h, r = [0, 0, 0, 0]) {
		if (this.hints) {
		    if (x === undefined) {
			console.log("Missing 'x' value for rect");
		    } else if (y === undefined) {
			console.log("Missing 'y' value for rect");
		    } else if (w === undefined) {
			console.log("Missing 'width' value for rect");
		    } else if (h === undefined) {
			console.log("Missing 'height' value for rect");
		    }
		}
		this.ctx.beginPath();
		this.ctx.roundRect(x, y, w, h, r);
		this.ctx.fill();
		this.ctx.stroke();
	    },
	    ellipse : function (x, y, w, h) {
		if (this.hints) {
		    if (x === undefined) {
			throw new Error("Missing 'x' value for ellipse");
		    } else if (y === undefined) {
			throw new Error("Missing 'y' value for ellipse");
		    } else if (w === undefined) {
			throw new Error("Missing 'width' value for ellipse");
		    } else if (h === undefined) {
			throw new Error("Missing 'height' value for ellipse");
		    }
		}
		this.ctx.beginPath();
		this.ctx.ellipse(x, y, w, h, 0, 0, 2 * Math.PI);
		this.ctx.fill();
		this.ctx.stroke();
	    },
	    triangle : function (x1, y1, x2, y2, x3, y3) {
	    	if (!arguments.map(function (v) {
			if (typeof v !== "number" || v === undefined) {
				return false;
			} else {
				return true;
			}
		}).includes(false)) {
			this.ctx.beginPath();
			this.ctx.moveTo(x1, y1);
			this.ctx.lineTo(x2, y2);
			this.ctx.lineTo(x3, y3);
			this.ctx.closePath();
			this.ctx.stroke();
			this.ctx.fill();
		} else {
			throw new Error("Incorrect input format on calling method 'quad' in Peregrine.Graphics");
		}
	    },
	    quad : function (x1, y1, x2, y2, x3, y3, x4, y4) {
		if (!arguments.map(function (v) {
			if (typeof v !== "number" || v === undefined) {
				return false;
			} else {
				return true;
			}
		}).includes(false)) {
			this.ctx.beginPath();
			this.ctx.moveTo(x1, y1);
			this.ctx.lineTo(x2, y2);
			this.ctx.lineTo(x3, y3);
			this.ctx.lineTo(x4, y4);
			this.ctx.closePath();
			this.ctx.stroke();
			this.ctx.fill();
		} else {
			throw new Error("Incorrect input format on calling method 'quad' in Peregrine.Graphics");
		}
	    },
	    poly : function (array) {
		if (array instanceof Array) {
			this.ctx.beginPath();
			this.ctx.moveTo(array[0], array[0]);
			for (var i = 2; i < array.length; i += 2) {
				this.ctx.lineTo(array[i], array[i + 1]);
			}
			this.ctx.closePath();
			this.ctx.stroke();
			this.ctx.fill();
		} else if (!arguments.map(function (v) {
			if (typeof v !== "number") {
				return false;
			} else {
				return true;
			}
		}).includes(false)) {
			this.ctx.beginPath();
			this.ctx.moveTo(arguments[0], arguments[0]);
			for (var i = 2; i < arguments.length; i += 2) {
				this.ctx.lineTo(arguments[i], arguments[i + 1]);
			}
			this.ctx.closePath();
			this.ctx.stroke();
			this.ctx.fill();
		} else {
			throw new Error("Incorrect input format on calling method 'poly' in Peregrine.Graphics");
		}
	    },
	    arc : function (x, y, w, h, start, end) {
		this.ctx.beginPath();
		this.ctx.ellipse(x, y, w, h, 0, start * Math.PI / 180, end * Math.PI / 180);
		this.ctx.fill();
		this.ctx.stroke();
	    },
	    image : function (img, x, y, w, h, dx, dy, dw, dh) {
		if (dx === undefined) {
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
		this.__text.size = value;
	    },
	    textFont : function (name) {
		this.__text.font = name;
	    },
	    textAlign : function (alignment) {
		this.ctx.textAlign = alignment;
	    },
	    text : function (string, x, y, mw) {
		this.ctx.font = this.__text.size + "px " + this.__text.font;
		this.ctx.beginPath();
		this.ctx.fillText(string, x, y, mw);
	    }
	
	},
	Game : {
	    "__context" : this,
	    "sprite" : (function () {
		var obj = function (x, y, w, h) {
		    this.x = x || 0;
		    this.y = y || 0;
		    this.w = w || 32;
		    this.h = h || 32;
	
		    this.__customProperties = {};
	
		    this.__texture = new Image();
		    this.__textBound = false;
	
		    this.__collides = false;
		    this.__collShape = "rect";
		};
		obj.prototype = {
		    "__context" : obj,
		    "setTexture" : function (img) {
			this.__texture = img;
			this.__textBound = true;
		    },
		    "setCollision" : function (bool, shape) {
			this.__collides = bool;
			this.__collShape = (shape === "circle" ? "circle" : "rect");
		    },
		    "customProperties" : function (obj) {
			this.__customProperties = obj;
		    },
		    "customMethods" : function (obj) {
			let keys = Object.keys(obj);
			for (var i = 0; i < keys.length; i++) {
			    this.__context.prototype[keys[i]] = obj[keys[i]];
			}
		    },
		    "get" : function () {
			this.__customProperties["parent"] = this;
			return this.__customProperties;
		    }
		};
		return obj;
	    })(),
	    "collision" : {
		"__context" : this,
		"rect" : function (obj1, obj2) {
		    return (obj1.x + obj1.w > obj2.x && obj1.y + obj1.h > obj2.y && obj1.x < obj2.x + obj2.w && obj1.y < obj2.y + obj2.h);
		},
		"lineToLine" : function () {}
	    },
	    "particle" : (function () {
		var obj = function (x, y, r, a, m, life, gravity) {
		    this.x = x || 0;
		    this.y = y || 0;
		    this.radius = r || 16;
		    this.angle = a || Utilities.random(0, 360);
		    this.magnitude = m || 2;
		    this.life = life || 64;
		    this.__lifeDrain = 1;
		    this.gravity = (gravity === undefined ? 0 : gravity);
		    this.a = 0;
		};
		obj.prototype = {
		    draw : function () {
			// Default Particle Rendering Method
			//var g = Peregrine.__globalGraphics;
			//g.fill(255, 0, 0);
			//g.stroke(0, 0, 255);
			//g.ellipse(this.x, this.y, this.radius, this.radius);
		    },
		    update : function () {
			// Default Update Method
			this.x += this.magnitude * Utilities.cos(this.angle);
			this.y += this.magnitude * Utilities.sin(this.angle);
			this.y += this.a;
			this.a += this.gravity;
			this.life -= this.__lifeDrain;
		    },
		    clip : function (list, x, y, w, h) {
			// Default Clip Method
			if (this.life <= 0) {
			    list.splice(list.indexOf(this), 1);
			}
			if (!(this.x > x && this.y > y && this.x < x + w && this.y < y + h)) {
			    list.splice(list.indexOf(this), 1);
			}
		    },
		};
		return obj;
	    })()
	},
	Program : {
	    "__mousePress" : function () {},
	    "__mouseRelease" : function () {},
	    "__mouseMove" : function () {},
	    "__mouseOut" : function () {},
	    "__mouseEnter" : function () {},
	    "__mouseDoubleClick" : function () {},
	    "__keyPress" : function () {},
	    "__keyRelease" : function () {},
	    "__targetFrameRate" : 60,
	    "__frameRate" : 0,
	    "__startSeconds" : new Date().getSeconds(),
	    "seconds" : function () {
		return new Date().getSeconds() - this.__startSeconds;
	    },
	    "frameRate" : function (r) {
		this.__targetFrameRate = r;
	    },
	    "handleFrames" : function () {
		var parent = this;
		var p = Peregrine.Graphics;
		var targetInterval = 1000 / this.__targetFrameRate;
		var currentInterval = targetInterval;
		function run () {
		    var t1 = new Date();
		    var before = performance.now();//t1.getMilliseconds();
		    p.draw();
		    parent.frameCount++;
		    var t2 = new Date();
		    var after = performance.now();//t2.getMilliseconds();
		    var delay = (after - before);
		    parent.__frameRate = Math.round(delay) + ", \n" + Math.round(currentInterval) + ", \n" + Math.round(1000 / (currentInterval + delay));
		    currentInterval = Peregrine.Tools.varrain(targetInterval - delay, 0, Infinity);
		    if (parent.frameCount % 60 === 0) {
			//console.log(currentInterval);
		    }
		    setTimeout(run, currentInterval - 2);
		    //parent.__frameRate = (1000 / (currentInterval + delay));
		}
		run();
	    },
	    "frameCount" : 0,
	    "mouse" : {
		"x" : -256,
		"y" : -256,
		"button" : undefined,
		"pressed" : false
	    },
	    "keyboard" : {
		"key" : {
		    "code" : undefined,
		    "label" : undefined
		},
		"keys" : {},
		"pressed" : false
	    },
	    "event" : {
		"__context" : this,
		"mousePressed" : function (callback) {
		    Peregrine.Program.__mousePress = callback;
		},
		"mouseReleased" : function (callback) {
		    Peregrine.Program.__mouseRelease = callback;
		},
		"mouseMove" : function (callback) {
		    Peregrine.Program.__mouseMove = callback;
		},
		"mouseOut" : function (callback) {
		    Peregrine.__mouseOut = callback;
		},
		"mouseEnter" : function (callback) {
		    Peregrine.Program.__mouseEnter = callback;
		},
		"mouseDoubleClick" : function (callback) {
		    Peregrine.Program.__mouseDoubleClick = callback;
		},
		"keyPressed" : function (callback) {
		    Peregrine.Program.__keyPress = callback;
		},
		"keyReleased" : function (callback) {
		    Peregrine.Program.__keyRelease = callback;
		}
	    },
	    "__addEvents" : function (gel=false) {
		var el = document.getElementById("render");
		if (gel !== false) {
			el = gel;
		}
		var context = Peregrine.Program;
		el.addEventListener("mousedown", function (e) {
		    context.mouse.button = e.button;
		    context.__mousePress(e);
		    context.pressed = true;
		});
		el.addEventListener("mouseup", function (e) {
		    context.mouse.button = e.button;
		    context.__mouseRelease(e);
		    context.mouse.pressed = false;
		});
		el.addEventListener("mousemove", function (e) {
		    context.mouse.x = e.offsetX;
		    context.mouse.y = e.offsetY;
		    context.__mouseMove(e);
		});
		el.addEventListener("mouseout", function (e) {
		    context.mouse.x = e.offsetX;
		    context.mouse.y = e.offsetY;
		    context.__mouseOut(e);
		});
		el.addEventListener("mouseenter", function (e) {
		    context.mouse.x = e.offsetX;
		    context.mouse.y = e.offsetY;
		    context.__mouseEnter(e);
		});
		el.addEventListener("dblclick", function (e) {
		    context.mouse.button = e.button;
		    context.__mouseDoubleClick(e);
		    context.mouse.pressed = true;
		});
		window.addEventListener("keydown", function (e) {
		    var currentInput = document.getElementById("currentInput");
		    if (currentInput !== null) {
			return;
		    }
		    context.keyboard.pressed = true;
		    context.keyboard.key.code = e.keyCode;
		    context.keyboard.key.name = e.key;
		    context.keyboard.keys[e.key] = true;
		    context.__keyPress(e);
		});
		window.addEventListener("keyup", function (e) {
		    var currentInput = document.getElementById("currentInput");
		    if (currentInput !== null) {
			return;
		    }
		    context.keyboard.pressed = false;
		    context.keyboard.key.code = e.keyCode;
		    context.keyboard.key.name = e.key;
		    delete context.keyboard.keys[e.key];
		    context.__keyRelease(e);
		});
	    }
	}
};
