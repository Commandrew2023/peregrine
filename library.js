// Updated
const Tools = {

	// ANIMATION-ORIENTATED
	constrain : function (v, min, max) {
		if (v < min) {
			v = min;
		} else if (v > max) {
			v = max;
		}
		return v;
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
	}
};

var Canvas = (function () {
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
    document.querySelector("body").appendChild(canvas);
    this.canvas = document.getElementById("render");
    this.ctx = this.canvas.getContext("2d");
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
    canvas.style.position = "relative";
    var width = window.innerWidth - 1;
    var height = window.innerHeight - 1;
    canvas.width = width.toString();
    canvas.height = height.toString();
    this.width = width.toString();
    this.height = height.toString();
    document.querySelector("body").style.overflow = "hidden";
  }
  };

  return obj;
})();

var Log = {
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
        window.addEventListener("keydown", function (e) {
          if (e.key === "Enter" && Log.__prompting) {
            var asyncInput = Log.__inputBuffer.slice(-1)[0];
            var el = document.getElementById("currentInput");
            asyncInput.response = el.value;
            asyncInput.callback(asyncInput.response);
            var logBar = document.getElementById("logBar");
            logBar.removeChild(el);
            logBar.innerHTML += asyncInput.response + "<br>";
            Log.__prompting = false;
            Log.__inputBuffer.pop();
            for (var i = 0; i < Log.__asyncBuffer.length; i++) {
              var v = Log.__asyncBuffer[i];
              if (v.type === "log") {
                Log.print(v.string);
                Log.__asyncBuffer.shift();
                i--;
              } else if (v.type === "input") {
                Log.input(v.string, v.callback);
                Log.__asyncBuffer.shift();
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

    window.callback = function () {
      var logBar = document.getElementById("logBar");
      logBar.innerHTML = "";
      Log.__logBuffer = [];
      Log.__shown = false;
      logBar.style.display = "none";
      document.getElementById("closeButton").style.display = "none";

    };
    closeButton.setAttribute("onclick", "callback()");

    document.querySelector("body").appendChild(logBar);
    document.querySelector("body").appendChild(closeButton);
  }
};

var globalGraphics = null;
var Graphics = (function () {
  var obj = function (canvas) {
    this.canvas = canvas.canvas;
    this.ctx = this.canvas.getContext("2d")|| null;
    this.hints = true;

    this.Text = {
      "size" : 12,
      "font" : "sans-serif"
    };
    window.globalGraphics = this;
  };
  obj.prototype = {
    __convertRGB : function rgbToHex(r, g, b, a) {
      function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b) + componentToHex(a);
    },
    noHints : function () {
      this.hints = false;
    },
    useHints : function () {
      this.hints = true;
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
          console.log("Missing 'x' value for ellipse");
        } else if (y === undefined) {
          console.log("Missing 'y' value for ellipse");
        } else if (w === undefined) {
          console.log("Missing 'width' value for ellipse");
        } else if (h === undefined) {
          console.log("Missing 'height' value for ellipse");
        }
      }
      this.ctx.beginPath();
      this.ctx.ellipse(x, y, w, h, 0, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.stroke();
    },
    triangle : function (x1, y1, x2, y2, x3, y3) {
      this.ctx.beginPath();
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.lineTo(x3, y3);
      this.ctx.closePath();
      this.ctx.stroke();
      this.ctx.fill();
    },
    quad : function (x1, y1, x2, y2, x3, y3, x4, y4) {
      this.ctx.beginPath();
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.lineTo(x3, y3);
      this.ctx.lineTo(x4, y4);
      this.ctx.closePath();
      this.ctx.stroke();
      this.ctx.fill();
    },
    arc : function (x, y, w, h, start, end) {
      this.ctx.beginPath();
      this.ctx.ellipse(x, y, w, h, 0, start * Math.PI / 180, end * Math.PI / 180);
      this.ctx.fill();
      this.ctx.stroke();
    },
    image : function (url, x, y, w, h) {
      const img = new Image();
      img.src = url;
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
    },

    textSize : function (value) {
      this.Text.size = value;
    },
    textFont : function (name) {
      this.Text.font = name;
    },
    textAlign : function (alignment) {
      this.ctx.textAlign = alignment;
    },
    text : function (string, x, y, mw) {
      this.ctx.font = this.Text.size + "px " + this.Text.font;
      this.ctx.beginPath();
      this.ctx.fillText(string, x, y, mw);
    }

  };

  return obj;
})();

var Game = {
  "__context" : this,
  // THIS CODE WAS REDACTED BECAUSE IT IS NOT DEVELOPED ENOUGH
  /*"sprite" : (function () {
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
  },*/
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
        var g = globalGraphics;
        g.fill(255, 0, 0);
        g.stroke(0, 0, 255);
        g.ellipse(this.x, this.y, this.radius, this.radius);
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

};

var draw = function () {};
var Program = {
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
  "frameRate" : function (r) {
    this.__targetFrameRate = r;
  },
  "handleFrames" : function () {
    var parent = this;
    var targetInterval = 1000 / this.__targetFrameRate;
    var currentInterval = targetInterval;
    var loop = setInterval(run, currentInterval);
    function run () {
      const t1 = new Date();
      const before = t1.getMilliseconds();
      window.draw();
      parent.frameCount++;
      const t2 = new Date();
      const after = t2.getMilliseconds();
      var delay = (after - before);
      currentInterval = Tools.constrain(targetInterval - delay, 0, Infinity);
      parent.__frameRate = (1000 / (currentInterval + delay));
    }
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
      let root = this.__context.Program;
      root.__mousePress = callback;
      root.mouse.pressed = true;
    },
    "mouseReleased" : function (callback) {
      let root = this.__context.Program;
      root.__mouseRelease = callback;
      root.mouse.pressed = false;
    },
    "mouseMove" : function (callback) {
      let root = this.__context.Program;
      root.__mouseMove = callback;
    },
    "mouseOut" : function (callback) {
      let root = this.__context.Program;
      root.__mouseOut = callback;
    },
    "mouseEnter" : function (callback) {
      let root = this.__context.Program;
      root.__mouseEnter = callback;
    },
    "mouseDoubleClick" : function (callback) {
      let root = this.__context.Program;
      root.__mouseDoubleClick = callback;
      root.mouse.pressed = true;
    },
    "keyPressed" : function (callback) {
      let root = this.__context.Program;
      root.keyboard.pressed = true;
      root.__keyPress = callback;
    },
    "keyReleased" : function (callback) {
      let root = this.__context.Program;
      root.keyboard.pressed = false;
      root.__keyRelease = callback;
    }
  },
  "__addEvents" : function () {
    var el = document.getElementById("render");
    var context = this;
    el.addEventListener("mousedown", function (e) {
      context.mouse.button = e.button;
      context.__mousePress();
    });
    el.addEventListener("mouseup", function (e) {
      context.mouse.button = e.button;
      context.__mouseRelease();
    });
    el.addEventListener("mousemove", function (e) {
      context.mouse.x = e.offsetX;
      context.mouse.y = e.offsetY;
      context.__mouseMove();
    });
    el.addEventListener("mouseout", function (e) {
      context.mouse.x = e.offsetX;
      context.mouse.y = e.offsetY;
      context.__mouseOut();
    });
    el.addEventListener("mouseenter", function (e) {
      context.mouse.x = e.offsetX;
      context.mouse.y = e.offsetY;
      context.__mouseEnter();
    });
    el.addEventListener("dblclick", function (e) {
      context.mouse.button = e.button;
      context.__mouseDoubleClick();
    });
    window.addEventListener("keydown", function (e) {
      var currentInput = document.getElementById("currentInput");
      if (currentInput !== null) {
        return;
      }
      context.keyboard.key.code = e.keyCode;
      context.keyboard.key.name = e.key;
      Program.keyboard.keys[e.key] = true;
      context.__keyPress();
    });
    window.addEventListener("keyup", function (e) {
      var currentInput = document.getElementById("currentInput");
      if (currentInput !== null) {
        return;
      }
      context.keyboard.key.code = e.keyCode;
      context.keyboard.key.name = e.key;
      delete Program.keyboard.keys[e.key];
      context.__keyRelease();
    });
  }

};
//Program.__addEvents();
//Program.frameRate(60);
