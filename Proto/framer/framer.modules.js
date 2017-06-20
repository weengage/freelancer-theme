require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}],"videoplayer":[function(require,module,exports){
var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.VideoPlayer = (function(superClass) {
  extend(VideoPlayer, superClass);

  function VideoPlayer(options) {
    if (options == null) {
      options = {};
    }
    this.setPauseButtonImage = bind(this.setPauseButtonImage, this);
    this.setPlayButtonImage = bind(this.setPlayButtonImage, this);
    this.setTimeTotal = bind(this.setTimeTotal, this);
    this.setTimeLeft = bind(this.setTimeLeft, this);
    this.videoLayer = null;
    this.playButton = null;
    this.progessBar = null;
    this.timeElapsed = null;
    this.timeLeft = null;
    this.timeTotal = null;
    this._currentlyPlaying = null;
    this._shyPlayButton = null;
    this._shyControls = null;
    this._isScrubbing = null;
    this._showProgress = null;
    this._showTimeElapsed = null;
    this._showTimeLeft = null;
    this._showTimeTotal = null;
    this._controlsArray = [];
    this.playimage = "images/play.png";
    this.pauseimage = "images/pause.png";
    if (options.playButtonDimensions == null) {
      options.playButtonDimensions = 107;
    }
    if (options.backgroundColor == null) {
      options.backgroundColor = "#000";
    }
    if (options.width == null) {
      options.width = 480;
    }
    if (options.height == null) {
      options.height = 270;
    }
    if (options.fullscreen) {
      options.width = Screen.width;
      options.height = Screen.height;
    }
    VideoPlayer.__super__.constructor.call(this, {
      width: options.width,
      height: options.height,
      backgroundColor: null
    });
    this.videoLayer = new VideoLayer({
      width: options.width,
      height: options.height,
      superLayer: this,
      backgroundColor: options.backgroundColor,
      name: "videoLayer"
    });
    if (options.autoplay) {
      this.videoLayer.player.autoplay = true;
    }
    if (options.muted) {
      this.videoLayer.player.muted = true;
    }
    this.playButton = new Layer({
      width: options.playButtonDimensions,
      height: options.playButtonDimensions,
      superLayer: this.videoLayer,
      backgroundColor: null,
      name: "playButton"
    });
    this.playButton.showPlay = (function(_this) {
      return function() {
        return _this.playButton.image = _this.playimage;
      };
    })(this);
    this.playButton.showPause = (function(_this) {
      return function() {
        return _this.playButton.image = _this.pauseimage;
      };
    })(this);
    this.playButton.showPlay();
    this.playButton.center();
    Events.wrap(this.videoLayer.player).on("pause", (function(_this) {
      return function() {
        _this.emit("video:pause");
        if (!_this._isScrubbing) {
          return _this.playButton.showPlay();
        }
      };
    })(this));
    Events.wrap(this.videoLayer.player).on("play", (function(_this) {
      return function() {
        _this.emit("video:play");
        return _this.playButton.showPause();
      };
    })(this));
    Events.wrap(this.videoLayer.player).on("ended", (function(_this) {
      return function() {
        var i, layer, len, ref, results;
        _this.emit("video:ended");
        _this._currentlyPlaying = false;
        _this.videoLayer.player.pause();
        _this.playButton.animateStop();
        if (_this._shyControls) {
          _this.playButton.opacity = 1;
          ref = _this._controlsArray;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            layer = ref[i];
            layer.animateStop();
            results.push(layer.opacity = 1);
          }
          return results;
        }
      };
    })(this));
    this.videoLayer.video = options.video;
    this.timeStyle = {
      "font-size": "20px",
      "color": "#000"
    };
    this.videoLayer.formatTime = function() {
      var min, sec;
      sec = Math.floor(this.player.currentTime);
      min = Math.floor(sec / 60);
      sec = Math.floor(sec % 60);
      sec = sec >= 10 ? sec : "0" + sec;
      return min + ":" + sec;
    };
    this.videoLayer.formatTimeLeft = function() {
      var min, sec;
      sec = Math.floor(this.player.duration) - Math.floor(this.player.currentTime);
      min = Math.floor(sec / 60);
      sec = Math.floor(sec % 60);
      sec = sec >= 10 ? sec : "0" + sec;
      return min + ":" + sec;
    };
  }

  VideoPlayer.define("video", {
    get: function() {
      return this.videoLayer.player.src;
    },
    set: function(video) {
      return this.videoLayer.player.src = video;
    }
  });

  VideoPlayer.define("showProgress", {
    get: function() {
      return this._showProgress;
    },
    set: function(showProgress) {
      return this.setProgress(showProgress);
    }
  });

  VideoPlayer.define("showTimeElapsed", {
    get: function() {
      return this._showTimeElapsed;
    },
    set: function(showTimeElapsed) {
      return this.setTimeElapsed(showTimeElapsed);
    }
  });

  VideoPlayer.define("showTimeLeft", {
    get: function() {
      return this._showTimeLeft;
    },
    set: function(showTimeLeft) {
      return this.setTimeLeft(showTimeLeft);
    }
  });

  VideoPlayer.define("showTimeTotal", {
    get: function() {
      return this._showTimeTotal;
    },
    set: function(showTimeTotal) {
      return this.setTimeTotal(showTimeTotal);
    }
  });

  VideoPlayer.define("shyPlayButton", {
    get: function() {
      return this._shyPlayButton;
    },
    set: function(shyPlayButton) {
      return this.setShyPlayButton(shyPlayButton);
    }
  });

  VideoPlayer.define("shyControls", {
    get: function() {
      return this._shyControls;
    },
    set: function(shyControls) {
      return this.setShyControls(shyControls);
    }
  });

  VideoPlayer.define("playButtonImage", {
    get: function() {
      return this.playimage;
    },
    set: function(playButtonImage) {
      return this.setPlayButtonImage(playButtonImage);
    }
  });

  VideoPlayer.define("pauseButtonImage", {
    get: function() {
      return this.pauseimage;
    },
    set: function(pauseButtonImage) {
      return this.setPauseButtonImage(pauseButtonImage);
    }
  });

  VideoPlayer.define("player", {
    get: function() {
      return this.videoLayer.player;
    }
  });

  VideoPlayer.prototype.setProgress = function(showProgress) {
    this._showProgress = showProgress;
    this.progressBar = new SliderComponent({
      width: 440,
      height: 10,
      knobSize: 40,
      backgroundColor: "#ccc",
      min: 0,
      value: 0,
      name: "progressBar"
    });
    this._controlsArray.push(this.progressBar);
    this.progressBar.knob.draggable.momentum = false;
    Events.wrap(this.videoLayer.player).on("canplay", (function(_this) {
      return function() {
        return _this.progressBar.max = Math.round(_this.videoLayer.player.duration);
      };
    })(this));
    Events.wrap(this.videoLayer.player).on("timeupdate", (function(_this) {
      return function() {
        return _this.progressBar.knob.midX = _this.progressBar.pointForValue(_this.videoLayer.player.currentTime);
      };
    })(this));
    this.progressBar.on("change:value", (function(_this) {
      return function() {
        if (_this._currentlyPlaying) {
          return _this.videoLayer.player.currentTime = _this.progressBar.value;
        }
      };
    })(this));
    this.progressBar.knob.on(Events.DragStart, (function(_this) {
      return function() {
        _this._isScrubbing = true;
        if (_this._currentlyPlaying) {
          return _this.videoLayer.player.pause();
        }
      };
    })(this));
    return this.progressBar.knob.on(Events.DragEnd, (function(_this) {
      return function() {
        _this._isScrubbing = false;
        _this.videoLayer.player.currentTime = _this.progressBar.value;
        if (_this._currentlyPlaying) {
          return _this.videoLayer.player.play();
        }
      };
    })(this));
  };

  VideoPlayer.prototype.setShyPlayButton = function(shyPlayButton) {
    return this._shyPlayButton = shyPlayButton;
  };

  VideoPlayer.prototype.fadePlayButton = function() {
    return this.playButton.animate({
      properties: {
        opacity: 0
      },
      time: 2
    });
  };

  VideoPlayer.prototype.setShyControls = function(shyControls) {
    return this._shyControls = shyControls;
  };

  VideoPlayer.prototype.fadeControls = function() {
    var i, index, layer, len, ref, results;
    ref = this._controlsArray;
    results = [];
    for (index = i = 0, len = ref.length; i < len; index = ++i) {
      layer = ref[index];
      results.push(layer.animate({
        properties: {
          opacity: 0
        },
        time: 2
      }));
    }
    return results;
  };

  VideoPlayer.prototype.setTimeElapsed = function(showTimeElapsed) {
    this._showTimeElapsed = showTimeElapsed;
    if (showTimeElapsed === true) {
      this.timeElapsed = new Layer({
        backgroundColor: "transparent",
        name: "currentTime"
      });
      this._controlsArray.push(this.timeElapsed);
      this.timeElapsed.style = this.timeStyle;
      this.timeElapsed.html = "0:00";
      return Events.wrap(this.videoLayer.player).on("timeupdate", (function(_this) {
        return function() {
          return _this.timeElapsed.html = _this.videoLayer.formatTime();
        };
      })(this));
    }
  };

  VideoPlayer.prototype.setTimeLeft = function(showTimeLeft) {
    this._showTimeLeft = showTimeLeft;
    if (showTimeLeft === true) {
      this.timeLeft = new Layer({
        backgroundColor: "transparent",
        name: "timeLeft"
      });
      this._controlsArray.push(this.timeLeft);
      this.timeLeft.style = this.timeStyle;
      this.timeLeft.html = "-0:00";
      Events.wrap(this.videoLayer.player).on("loadedmetadata", (function(_this) {
        return function() {
          return _this.timeLeft.html = "-" + _this.videoLayer.formatTimeLeft();
        };
      })(this));
      return Events.wrap(this.videoLayer.player).on("timeupdate", (function(_this) {
        return function() {
          return _this.timeLeft.html = "-" + _this.videoLayer.formatTimeLeft();
        };
      })(this));
    }
  };

  VideoPlayer.prototype.setTimeTotal = function(showTimeTotal) {
    this._showTimeTotal = showTimeTotal;
    if (showTimeTotal === true) {
      this.timeTotal = new Layer({
        backgroundColor: "transparent",
        name: "timeTotal"
      });
      this._controlsArray.push(this.timeTotal);
      this.timeTotal.style = this.timeStyle;
      this.timeTotal.html = "0:00";
      return Events.wrap(this.videoLayer.player).on("loadedmetadata", (function(_this) {
        return function() {
          return _this.timeTotal.html = _this.videoLayer.formatTimeLeft();
        };
      })(this));
    }
  };

  VideoPlayer.prototype.setPlayButtonImage = function(image) {
    this.playimage = image;
    this.playButton.image = image;
    return this.playButton.showPlay = function() {
      return this.image = image;
    };
  };

  VideoPlayer.prototype.setPauseButtonImage = function(image) {
    this.pauseimage = image;
    return this.playButton.showPause = function() {
      return this.image = image;
    };
  };

  return VideoPlayer;

})(Layer);


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1dvcmtmaWxlcy9GcmFtZXJKUy9XYXRjaE5leHQvRnJhbWVyX1NvdXJjZS5mcmFtZXIvISEhUHJvdG95cGVzLzA2MThfIHRpbWUxNjEyX0JpZ3NjcmVlbl9Qcm90b3R5cGUuZnJhbWVyL21vZHVsZXMvdmlkZW9wbGF5ZXIuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vV29ya2ZpbGVzL0ZyYW1lckpTL1dhdGNoTmV4dC9GcmFtZXJfU291cmNlLmZyYW1lci8hISFQcm90b3lwZXMvMDYxOF8gdGltZTE2MTJfQmlnc2NyZWVuX1Byb3RvdHlwZS5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIGV4cG9ydHMuVmlkZW9QbGF5ZXIgZXh0ZW5kcyBMYXllclxuXG4gIGNvbnN0cnVjdG9yOiAob3B0aW9ucz17fSkgLT5cblxuICAgICMgaW5zdGFuY2UgdmFycyBmb3IgbGF5ZXJzIHdlIHdpbGwgY3JlYXRlXG4gICAgQHZpZGVvTGF5ZXIgPSBudWxsXG4gICAgQHBsYXlCdXR0b24gPSBudWxsXG5cbiAgICAjIGluc3RhbmNlIHZhcnMgZm9yIGxheWVycyB3ZSBtYXkgY3JlYXRlXG4gICAgQHByb2dlc3NCYXIgPSBudWxsXG4gICAgQHRpbWVFbGFwc2VkID0gbnVsbFxuICAgIEB0aW1lTGVmdCA9IG51bGxcbiAgICBAdGltZVRvdGFsID0gbnVsbFxuXG4gICAgIyBpbnRlcm5hbCBpbnN0YW5jZSB2YXJzIHdlIG1heSBjcmVhdGVcbiAgICBAX2N1cnJlbnRseVBsYXlpbmcgPSBudWxsXG4gICAgQF9zaHlQbGF5QnV0dG9uID0gbnVsbFxuICAgIEBfc2h5Q29udHJvbHMgPSBudWxsXG4gICAgQF9pc1NjcnViYmluZyA9IG51bGxcbiAgICBAX3Nob3dQcm9ncmVzcyA9IG51bGxcbiAgICBAX3Nob3dUaW1lRWxhcHNlZCA9IG51bGxcbiAgICBAX3Nob3dUaW1lTGVmdCA9IG51bGxcbiAgICBAX3Nob3dUaW1lVG90YWwgPSBudWxsXG4gICAgQF9jb250cm9sc0FycmF5ID0gW11cblxuICAgICMgcGxheS9wYXVzZSBjb250cm9sXG4gICAgQHBsYXlpbWFnZSA9IFwiaW1hZ2VzL3BsYXkucG5nXCJcbiAgICBAcGF1c2VpbWFnZSA9IFwiaW1hZ2VzL3BhdXNlLnBuZ1wiXG5cbiAgICBvcHRpb25zLnBsYXlCdXR0b25EaW1lbnNpb25zID89IDEwN1xuICAgIG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID89IFwiIzAwMFwiXG4gICAgb3B0aW9ucy53aWR0aCA/PSA0ODBcbiAgICBvcHRpb25zLmhlaWdodCA/PSAyNzBcbiAgICBpZiBvcHRpb25zLmZ1bGxzY3JlZW5cbiAgICAgIG9wdGlvbnMud2lkdGggPSBTY3JlZW4ud2lkdGhcbiAgICAgIG9wdGlvbnMuaGVpZ2h0ID0gU2NyZWVuLmhlaWdodFxuXG4gICAgIyBoZXJlJ3Mgb3VyIGNvbnRhaW5lciBsYXllclxuICAgIHN1cGVyXG4gICAgICB3aWR0aDogb3B0aW9ucy53aWR0aFxuICAgICAgaGVpZ2h0OiBvcHRpb25zLmhlaWdodFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBudWxsXG5cbiAgICAjIGNyZWF0ZSB0aGUgdmlkZW9sYXllclxuICAgIEB2aWRlb0xheWVyID0gbmV3IFZpZGVvTGF5ZXJcbiAgICAgIHdpZHRoOiBvcHRpb25zLndpZHRoXG4gICAgICBoZWlnaHQ6IG9wdGlvbnMuaGVpZ2h0XG4gICAgICBzdXBlckxheWVyOiBAXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yXG4gICAgICBuYW1lOiBcInZpZGVvTGF5ZXJcIlxuICAgIGlmIG9wdGlvbnMuYXV0b3BsYXkgdGhlbiBAdmlkZW9MYXllci5wbGF5ZXIuYXV0b3BsYXkgPSB0cnVlXG4gICAgaWYgb3B0aW9ucy5tdXRlZCB0aGVuIEB2aWRlb0xheWVyLnBsYXllci5tdXRlZCA9IHRydWVcblxuICAgICMgY3JlYXRlIHBsYXkvcGF1c2UgYnV0dG9uXG4gICAgQHBsYXlCdXR0b24gPSBuZXcgTGF5ZXJcbiAgICAgIHdpZHRoOiBvcHRpb25zLnBsYXlCdXR0b25EaW1lbnNpb25zXG4gICAgICBoZWlnaHQ6IG9wdGlvbnMucGxheUJ1dHRvbkRpbWVuc2lvbnNcbiAgICAgIHN1cGVyTGF5ZXI6IEB2aWRlb0xheWVyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IG51bGxcbiAgICAgIG5hbWU6IFwicGxheUJ1dHRvblwiXG5cbiAgICAjIHNldCB1cCB0aGUgZGVmYXVsdCBwbGF5YnV0dG9uXG4gICAgQHBsYXlCdXR0b24uc2hvd1BsYXkgPSA9PiBAcGxheUJ1dHRvbi5pbWFnZSA9IEBwbGF5aW1hZ2VcbiAgICBAcGxheUJ1dHRvbi5zaG93UGF1c2UgPSA9PiBAcGxheUJ1dHRvbi5pbWFnZSA9IEBwYXVzZWltYWdlXG4gICAgQHBsYXlCdXR0b24uc2hvd1BsYXkoKVxuICAgIEBwbGF5QnV0dG9uLmNlbnRlcigpXG5cbiAgICAjIGxpc3RlbiBmb3IgZXZlbnRzIG9uIHRoZSB3aG9sZSB2aWRlb2xheWVyXG4gICAgIyBvciBhbHRlcm5hdGVseSwganVzdCBvbiB0aGUgcGxheS9wYXVzZSBidXR0b25cbiAgICBcbiAgICAjIGJpbmRUbyA9IGlmIG9wdGlvbnMuY29uc3RyYWluVG9CdXR0b24gdGhlbiBAcGxheUJ1dHRvbiBlbHNlIEB2aWRlb0xheWVyXG4gICAgIyBiaW5kVG8ub24gRXZlbnRzLkNsaWNrLCA9PlxuICAgICMgICBpZiBAdmlkZW9MYXllci5wbGF5ZXIucGF1c2VkXG4gICAgIyAgICAgQGVtaXQgXCJjb250cm9sczpwbGF5XCJcbiAgICAjICAgICBAX2N1cnJlbnRseVBsYXlpbmcgPSB0cnVlXG4gICAgIyAgICAgQHZpZGVvTGF5ZXIucGxheWVyLnBsYXkoKVxuICAgICMgICAgIEBmYWRlUGxheUJ1dHRvbigpIGlmIEBfc2h5UGxheUJ1dHRvblxuICAgICMgICAgIEBmYWRlQ29udHJvbHMoKSBpZiBAX3NoeUNvbnRyb2xzXG4gICAgIyAgIGVsc2VcbiAgICAjICAgICBAZW1pdCBcImNvbnRyb2xzOnBhdXNlXCJcbiAgICAjICAgICBAX2N1cnJlbnRseVBsYXlpbmcgPSBmYWxzZVxuICAgICMgICAgIEB2aWRlb0xheWVyLnBsYXllci5wYXVzZSgpXG4gICAgIyAgICAgQHBsYXlCdXR0b24uYW5pbWF0ZVN0b3AoKVxuICAgICMgICAgIEBwbGF5QnV0dG9uLm9wYWNpdHkgPSAxXG4gICAgIyAgICAgZm9yIGxheWVyIGluIEBfY29udHJvbHNBcnJheVxuICAgICMgICAgICAgbGF5ZXIuYW5pbWF0ZVN0b3AoKVxuICAgICMgICAgICAgbGF5ZXIub3BhY2l0eSA9IDFcbiAgICAgICAgXG4gICAgIyBldmVudCBsaXN0ZW5pbmcgb24gdGhlIHZpZGVvTGF5ZXJcbiAgICBFdmVudHMud3JhcChAdmlkZW9MYXllci5wbGF5ZXIpLm9uIFwicGF1c2VcIiwgPT5cbiAgICAgIEBlbWl0IFwidmlkZW86cGF1c2VcIlxuICAgICAgQHBsYXlCdXR0b24uc2hvd1BsYXkoKSB1bmxlc3MgQF9pc1NjcnViYmluZ1xuICAgIEV2ZW50cy53cmFwKEB2aWRlb0xheWVyLnBsYXllcikub24gXCJwbGF5XCIsID0+XG4gICAgICBAZW1pdCBcInZpZGVvOnBsYXlcIlxuICAgICAgQHBsYXlCdXR0b24uc2hvd1BhdXNlKClcbiAgICBFdmVudHMud3JhcChAdmlkZW9MYXllci5wbGF5ZXIpLm9uIFwiZW5kZWRcIiwgPT5cbiAgICAgIEBlbWl0IFwidmlkZW86ZW5kZWRcIlxuICAgICAgQF9jdXJyZW50bHlQbGF5aW5nID0gZmFsc2VcbiAgICAgIEB2aWRlb0xheWVyLnBsYXllci5wYXVzZSgpXG4gICAgICBAcGxheUJ1dHRvbi5hbmltYXRlU3RvcCgpXG4gICAgICBpZiBAX3NoeUNvbnRyb2xzXG4gICAgICAgIEBwbGF5QnV0dG9uLm9wYWNpdHkgPSAxXG4gICAgICAgIGZvciBsYXllciBpbiBAX2NvbnRyb2xzQXJyYXlcbiAgICAgICAgICBsYXllci5hbmltYXRlU3RvcCgpXG4gICAgICAgICAgbGF5ZXIub3BhY2l0eSA9IDFcbiAgICBAdmlkZW9MYXllci52aWRlbyA9IG9wdGlvbnMudmlkZW9cblxuICAgICMgZGVmYXVsdCB0aW1lIHRleHQgc3R5bGVzXG4gICAgQHRpbWVTdHlsZSA9IHsgXCJmb250LXNpemVcIjogXCIyMHB4XCIsIFwiY29sb3JcIjogXCIjMDAwXCIgfVxuXG4gICAgIyB0aW1lIHV0aWxpdGllc1xuICAgIEB2aWRlb0xheWVyLmZvcm1hdFRpbWUgPSAtPlxuICAgICAgc2VjID0gTWF0aC5mbG9vcihAcGxheWVyLmN1cnJlbnRUaW1lKVxuICAgICAgbWluID0gTWF0aC5mbG9vcihzZWMgLyA2MClcbiAgICAgIHNlYyA9IE1hdGguZmxvb3Ioc2VjICUgNjApXG4gICAgICBzZWMgPSBpZiBzZWMgPj0gMTAgdGhlbiBzZWMgZWxzZSBcIjBcIiArIHNlY1xuICAgICAgcmV0dXJuIFwiI3ttaW59OiN7c2VjfVwiXG4gICAgQHZpZGVvTGF5ZXIuZm9ybWF0VGltZUxlZnQgPSAtPlxuICAgICAgc2VjID0gTWF0aC5mbG9vcihAcGxheWVyLmR1cmF0aW9uKSAtIE1hdGguZmxvb3IoQHBsYXllci5jdXJyZW50VGltZSlcbiAgICAgIG1pbiA9IE1hdGguZmxvb3Ioc2VjIC8gNjApXG4gICAgICBzZWMgPSBNYXRoLmZsb29yKHNlYyAlIDYwKVxuICAgICAgc2VjID0gaWYgc2VjID49IDEwIHRoZW4gc2VjIGVsc2UgXCIwXCIgKyBzZWNcbiAgICAgIHJldHVybiBcIiN7bWlufToje3NlY31cIlxuXG5cbiAgIyBHZXR0ZXJzIG4nIHNldHRlcnNcbiAgQGRlZmluZSBcInZpZGVvXCIsXG4gICAgZ2V0OiAtPiBAdmlkZW9MYXllci5wbGF5ZXIuc3JjXG4gICAgc2V0OiAodmlkZW8pIC0+XG4gICAgICBAdmlkZW9MYXllci5wbGF5ZXIuc3JjID0gdmlkZW9cblxuICBAZGVmaW5lIFwic2hvd1Byb2dyZXNzXCIsXG4gICAgZ2V0OiAtPiBAX3Nob3dQcm9ncmVzc1xuICAgIHNldDogKHNob3dQcm9ncmVzcykgLT4gQHNldFByb2dyZXNzKHNob3dQcm9ncmVzcylcblxuICBAZGVmaW5lIFwic2hvd1RpbWVFbGFwc2VkXCIsXG4gICAgZ2V0OiAtPiBAX3Nob3dUaW1lRWxhcHNlZFxuICAgIHNldDogKHNob3dUaW1lRWxhcHNlZCkgLT4gQHNldFRpbWVFbGFwc2VkKHNob3dUaW1lRWxhcHNlZClcblxuICBAZGVmaW5lIFwic2hvd1RpbWVMZWZ0XCIsXG4gICAgZ2V0OiAtPiBAX3Nob3dUaW1lTGVmdFxuICAgIHNldDogKHNob3dUaW1lTGVmdCkgLT4gQHNldFRpbWVMZWZ0KHNob3dUaW1lTGVmdClcblxuICBAZGVmaW5lIFwic2hvd1RpbWVUb3RhbFwiLFxuICAgIGdldDogLT4gQF9zaG93VGltZVRvdGFsXG4gICAgc2V0OiAoc2hvd1RpbWVUb3RhbCkgLT4gQHNldFRpbWVUb3RhbChzaG93VGltZVRvdGFsKVxuXG4gIEBkZWZpbmUgXCJzaHlQbGF5QnV0dG9uXCIsIFxuICAgIGdldDogLT4gQF9zaHlQbGF5QnV0dG9uXG4gICAgc2V0OiAoc2h5UGxheUJ1dHRvbikgLT4gQHNldFNoeVBsYXlCdXR0b24oc2h5UGxheUJ1dHRvbilcblxuICBAZGVmaW5lIFwic2h5Q29udHJvbHNcIiwgXG4gICAgZ2V0OiAtPiBAX3NoeUNvbnRyb2xzXG4gICAgc2V0OiAoc2h5Q29udHJvbHMpIC0+IEBzZXRTaHlDb250cm9scyhzaHlDb250cm9scylcblxuICBAZGVmaW5lIFwicGxheUJ1dHRvbkltYWdlXCIsXG4gICAgZ2V0OiAtPiBAcGxheWltYWdlXG4gICAgc2V0OiAocGxheUJ1dHRvbkltYWdlKSAtPiBAc2V0UGxheUJ1dHRvbkltYWdlKHBsYXlCdXR0b25JbWFnZSlcblxuICBAZGVmaW5lIFwicGF1c2VCdXR0b25JbWFnZVwiLFxuICAgIGdldDogLT4gQHBhdXNlaW1hZ2VcbiAgICBzZXQ6IChwYXVzZUJ1dHRvbkltYWdlKSAtPiBAc2V0UGF1c2VCdXR0b25JbWFnZShwYXVzZUJ1dHRvbkltYWdlKVxuXG4gIEBkZWZpbmUgXCJwbGF5ZXJcIixcbiAgICBnZXQ6IC0+IEB2aWRlb0xheWVyLnBsYXllclxuXG5cbiAgIyBzaG93IHRoZSBwcm9ncmVzcyBiYXJcbiAgc2V0UHJvZ3Jlc3M6IChzaG93UHJvZ3Jlc3MpIC0+XG4gICAgQF9zaG93UHJvZ3Jlc3MgPSBzaG93UHJvZ3Jlc3NcblxuICAgICMgY3JlYXRlIGFuZCBzZXQgdXAgdGhlIHByb2dyZXNzIGJhciB3aXRoIGRlZmF1bHQgc3R5bGVzXG4gICAgQHByb2dyZXNzQmFyID0gbmV3IFNsaWRlckNvbXBvbmVudFxuICAgICAgd2lkdGg6IDQ0MFxuICAgICAgaGVpZ2h0OiAxMFxuICAgICAga25vYlNpemU6IDQwXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2NjY1wiXG4gICAgICBtaW46IDBcbiAgICAgIHZhbHVlOiAwXG4gICAgICBuYW1lOiBcInByb2dyZXNzQmFyXCJcbiAgICBAX2NvbnRyb2xzQXJyYXkucHVzaCBAcHJvZ3Jlc3NCYXJcbiAgICBAcHJvZ3Jlc3NCYXIua25vYi5kcmFnZ2FibGUubW9tZW50dW0gPSBmYWxzZVxuXG4gICAgIyBzZXQgYW5kIGF1dG9tYXRlIHByb2dyZXNzIGJhclxuICAgIEV2ZW50cy53cmFwKEB2aWRlb0xheWVyLnBsYXllcikub24gXCJjYW5wbGF5XCIsID0+XG4gICAgICBAcHJvZ3Jlc3NCYXIubWF4ID0gTWF0aC5yb3VuZChAdmlkZW9MYXllci5wbGF5ZXIuZHVyYXRpb24pXG4gICAgRXZlbnRzLndyYXAoQHZpZGVvTGF5ZXIucGxheWVyKS5vbiBcInRpbWV1cGRhdGVcIiwgPT5cbiAgICAgIEBwcm9ncmVzc0Jhci5rbm9iLm1pZFggPSBAcHJvZ3Jlc3NCYXIucG9pbnRGb3JWYWx1ZShAdmlkZW9MYXllci5wbGF5ZXIuY3VycmVudFRpbWUpXG5cbiAgICAjIHNlZWtpbmcvc2NydWJiaW5nIGV2ZW50c1xuICAgICMgYW5kIGJ0dyBub25lIG9mIHRoaXMgd29ya3Mgc3VwZXIgZ3JlYXQgdXNpbmcgdmVyeSBsYXJnZSB2aWRlb3NcbiAgICBAcHJvZ3Jlc3NCYXIub24gXCJjaGFuZ2U6dmFsdWVcIiwgPT5cbiAgICAgIGlmIEBfY3VycmVudGx5UGxheWluZyB0aGVuIEB2aWRlb0xheWVyLnBsYXllci5jdXJyZW50VGltZSA9IEBwcm9ncmVzc0Jhci52YWx1ZVxuICAgIEBwcm9ncmVzc0Jhci5rbm9iLm9uIEV2ZW50cy5EcmFnU3RhcnQsID0+XG4gICAgICBAX2lzU2NydWJiaW5nID0gdHJ1ZVxuICAgICAgaWYgQF9jdXJyZW50bHlQbGF5aW5nIHRoZW4gQHZpZGVvTGF5ZXIucGxheWVyLnBhdXNlKClcbiAgICBAcHJvZ3Jlc3NCYXIua25vYi5vbiBFdmVudHMuRHJhZ0VuZCwgPT5cbiAgICAgIEBfaXNTY3J1YmJpbmcgPSBmYWxzZVxuICAgICAgQHZpZGVvTGF5ZXIucGxheWVyLmN1cnJlbnRUaW1lID0gQHByb2dyZXNzQmFyLnZhbHVlXG4gICAgICBpZiBAX2N1cnJlbnRseVBsYXlpbmcgdGhlbiBAdmlkZW9MYXllci5wbGF5ZXIucGxheSgpXG5cbiAgIyBzZXQgZmxhZyBmb3Igc2h5IHBsYXkgYnV0dG9uXG4gIHNldFNoeVBsYXlCdXR0b246IChzaHlQbGF5QnV0dG9uKSAtPlxuICAgIEBfc2h5UGxheUJ1dHRvbiA9IHNoeVBsYXlCdXR0b25cbiAgIyBmYWRlIG91dCB0aGUgcGxheSBidXR0b25cbiAgZmFkZVBsYXlCdXR0b246ICgpIC0+XG4gICAgQHBsYXlCdXR0b24uYW5pbWF0ZVxuICAgICAgcHJvcGVydGllczpcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgdGltZTogMlxuXG4gICMgc2V0IGZsYWcgZm9yIHNoeSBjb250cm9sc1xuICBzZXRTaHlDb250cm9sczogKHNoeUNvbnRyb2xzKSAtPlxuICAgIEBfc2h5Q29udHJvbHMgPSBzaHlDb250cm9sc1xuICAjIHNob3J0Y3V0IHRvIGZhZGUgb3V0IGFsbCB0aGUgY29udHJvbHNcbiAgZmFkZUNvbnRyb2xzOiAoKSAtPlxuICAgIGZvciBsYXllciwgaW5kZXggaW4gQF9jb250cm9sc0FycmF5XG4gICAgICBsYXllci5hbmltYXRlXG4gICAgICAgIHByb3BlcnRpZXM6XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB0aW1lOiAyXG4gICAgXG4gICMgc2hvdyBhbmQgaW5jcmVtZW50IGVsYXBzZWQgdGltZVxuICBzZXRUaW1lRWxhcHNlZDogKHNob3dUaW1lRWxhcHNlZCkgLT5cbiAgICBAX3Nob3dUaW1lRWxhcHNlZCA9IHNob3dUaW1lRWxhcHNlZFxuXG4gICAgaWYgc2hvd1RpbWVFbGFwc2VkIGlzIHRydWVcbiAgICAgIEB0aW1lRWxhcHNlZCA9IG5ldyBMYXllclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICAgICAgICBuYW1lOiBcImN1cnJlbnRUaW1lXCJcbiAgICAgIEBfY29udHJvbHNBcnJheS5wdXNoIEB0aW1lRWxhcHNlZFxuXG4gICAgICBAdGltZUVsYXBzZWQuc3R5bGUgPSBAdGltZVN0eWxlXG4gICAgICBAdGltZUVsYXBzZWQuaHRtbCA9IFwiMDowMFwiXG5cbiAgICAgIEV2ZW50cy53cmFwKEB2aWRlb0xheWVyLnBsYXllcikub24gXCJ0aW1ldXBkYXRlXCIsID0+XG4gICAgICAgIEB0aW1lRWxhcHNlZC5odG1sID0gQHZpZGVvTGF5ZXIuZm9ybWF0VGltZSgpXG5cbiAgIyBzaG93IGFuZCBkZWNyZW1lbnQgdGltZSByZW1haW5pbmdcbiAgc2V0VGltZUxlZnQ6IChzaG93VGltZUxlZnQpID0+XG4gICAgQF9zaG93VGltZUxlZnQgPSBzaG93VGltZUxlZnRcblxuICAgIGlmIHNob3dUaW1lTGVmdCBpcyB0cnVlXG4gICAgICBAdGltZUxlZnQgPSBuZXcgTGF5ZXJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgICAgICAgbmFtZTogXCJ0aW1lTGVmdFwiXG4gICAgICBAX2NvbnRyb2xzQXJyYXkucHVzaCBAdGltZUxlZnRcblxuICAgICAgQHRpbWVMZWZ0LnN0eWxlID0gQHRpbWVTdHlsZVxuXG4gICAgICBAdGltZUxlZnQuaHRtbCA9IFwiLTA6MDBcIlxuICAgICAgRXZlbnRzLndyYXAoQHZpZGVvTGF5ZXIucGxheWVyKS5vbiBcImxvYWRlZG1ldGFkYXRhXCIsID0+XG4gICAgICAgIEB0aW1lTGVmdC5odG1sID0gXCItXCIgKyBAdmlkZW9MYXllci5mb3JtYXRUaW1lTGVmdCgpXG5cbiAgICAgIEV2ZW50cy53cmFwKEB2aWRlb0xheWVyLnBsYXllcikub24gXCJ0aW1ldXBkYXRlXCIsID0+XG4gICAgICAgIEB0aW1lTGVmdC5odG1sID0gXCItXCIgKyBAdmlkZW9MYXllci5mb3JtYXRUaW1lTGVmdCgpXG5cbiAgIyBzaG93IGEgc3RhdGljIHRpbWVzdGFtcCBmb3IgdG90YWwgZHVyYXRpb25cbiAgc2V0VGltZVRvdGFsOiAoc2hvd1RpbWVUb3RhbCkgPT5cbiAgICBAX3Nob3dUaW1lVG90YWwgPSBzaG93VGltZVRvdGFsXG5cbiAgICBpZiBzaG93VGltZVRvdGFsIGlzIHRydWVcbiAgICAgIEB0aW1lVG90YWwgPSBuZXcgTGF5ZXJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgICAgICAgbmFtZTogXCJ0aW1lVG90YWxcIlxuICAgICAgQF9jb250cm9sc0FycmF5LnB1c2ggQHRpbWVUb3RhbFxuXG4gICAgICBAdGltZVRvdGFsLnN0eWxlID0gQHRpbWVTdHlsZVxuXG4gICAgICBAdGltZVRvdGFsLmh0bWwgPSBcIjA6MDBcIlxuICAgICAgRXZlbnRzLndyYXAoQHZpZGVvTGF5ZXIucGxheWVyKS5vbiBcImxvYWRlZG1ldGFkYXRhXCIsID0+XG4gICAgICAgIEB0aW1lVG90YWwuaHRtbCA9IEB2aWRlb0xheWVyLmZvcm1hdFRpbWVMZWZ0KClcblxuICAjIHNldCBhIG5ldyBpbWFnZSBmb3IgdGhlIHBsYXkgYnV0dG9uXG4gIHNldFBsYXlCdXR0b25JbWFnZTogKGltYWdlKSA9PlxuICAgIEBwbGF5aW1hZ2UgPSBpbWFnZVxuICAgIEBwbGF5QnV0dG9uLmltYWdlID0gaW1hZ2VcbiAgICBAcGxheUJ1dHRvbi5zaG93UGxheSA9IC0+IEBpbWFnZSA9IGltYWdlXG5cbiAgIyBzZXQgYSBuZXcgaW1hZ2UgZm9yIHRoZSBwYXVzZSBidXR0b25cbiAgc2V0UGF1c2VCdXR0b25JbWFnZTogKGltYWdlKSA9PlxuICAgIEBwYXVzZWltYWdlID0gaW1hZ2VcbiAgICBAcGxheUJ1dHRvbi5zaG93UGF1c2UgPSAtPiBAaW1hZ2UgPSBpbWFnZSIsIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUVBQTtBRElBLE9BQU8sQ0FBQyxLQUFSLEdBQWdCOztBQUVoQixPQUFPLENBQUMsVUFBUixHQUFxQixTQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTjtBQURvQjs7QUFHckIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVA7Ozs7QURUbEIsSUFBQTs7OztBQUFNLE9BQU8sQ0FBQzs7O0VBRUMscUJBQUMsT0FBRDs7TUFBQyxVQUFROzs7Ozs7SUFHcEIsSUFBQyxDQUFBLFVBQUQsR0FBYztJQUNkLElBQUMsQ0FBQSxVQUFELEdBQWM7SUFHZCxJQUFDLENBQUEsVUFBRCxHQUFjO0lBQ2QsSUFBQyxDQUFBLFdBQUQsR0FBZTtJQUNmLElBQUMsQ0FBQSxRQUFELEdBQVk7SUFDWixJQUFDLENBQUEsU0FBRCxHQUFhO0lBR2IsSUFBQyxDQUFBLGlCQUFELEdBQXFCO0lBQ3JCLElBQUMsQ0FBQSxjQUFELEdBQWtCO0lBQ2xCLElBQUMsQ0FBQSxZQUFELEdBQWdCO0lBQ2hCLElBQUMsQ0FBQSxZQUFELEdBQWdCO0lBQ2hCLElBQUMsQ0FBQSxhQUFELEdBQWlCO0lBQ2pCLElBQUMsQ0FBQSxnQkFBRCxHQUFvQjtJQUNwQixJQUFDLENBQUEsYUFBRCxHQUFpQjtJQUNqQixJQUFDLENBQUEsY0FBRCxHQUFrQjtJQUNsQixJQUFDLENBQUEsY0FBRCxHQUFrQjtJQUdsQixJQUFDLENBQUEsU0FBRCxHQUFhO0lBQ2IsSUFBQyxDQUFBLFVBQUQsR0FBYzs7TUFFZCxPQUFPLENBQUMsdUJBQXdCOzs7TUFDaEMsT0FBTyxDQUFDLGtCQUFtQjs7O01BQzNC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
