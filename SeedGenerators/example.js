var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
    //init data
    //By defining properties with the dollar sign ($)
    //in nodes and edges we can override the global configuration
    //properties for nodes and edges.
    //In this case we use "$type" and "$dim" properties to override
    //the type of the node to be plotted and its dimension.

  
  
var json = [{

 "id": "db4-utils",
 "name": "db4-utils",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "db4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "sqlite",
 "name": "sqlite",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "sqlite",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "ncurses-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "readline",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "bzip2",
 "name": "bzip2",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "bzip2-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "file-libs",
 "name": "file-libs",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "zlib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "file",
 "name": "file",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "file-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "zlib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "flac",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "alsa-lib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libogg",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "file",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libvorbis",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libX11",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "findutils",
 "name": "findutils",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "gzip",
 "name": "gzip",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "coreutils",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "curl",
 "name": "curl",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "curl",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "zlib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libidn",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "openssl",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "flac",
 "name": "flac",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "flac",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libstdc++",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libogg",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "lcms",
 "name": "lcms",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "lcms-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libjpeg-turbo",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libtiff",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "zlib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "bluez",
 "name": "bluez",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "bluez",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "udev",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "hwdata",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bluez-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "dbus-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "dbus",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glib2",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libusb",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "systemd",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "gnupg2",
 "name": "gnupg2",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "bzip2-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "curl",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgcrypt",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgpg-error",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libksba",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libusb",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "pth",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "readline",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "zlib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "iproute",
 "name": "iproute",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "iproute",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "mkdevnodes",
 "name": "mkdevnodes",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "ntpdate",
 "name": "ntpdate",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "ntpdate",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "shadow-utils",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libcap",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "procps",
 "name": "procps",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "procps",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "ncurses-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "psmisc",
 "name": "psmisc",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "ncurses-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "time",
 "name": "time",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "usbutils",
 "name": "usbutils",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "coreutils",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "hwdata",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libusb1",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "gawk",
 "name": "gawk",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "coreutils",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "grep",
 "name": "grep",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "pcre",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "sed",
 "name": "sed",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "connman",
 "name": "connman",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "bluez",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "connman",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "ofono",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "ntp",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "iptables",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "wpa_supplicant",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "dbus-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "dbus",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glib2",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "pacrunner",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "systemd",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "ofono",
 "name": "ofono",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "ofono",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "udev",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bluez-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "dbus-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "dbus",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glib2",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "systemd",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libjpeg-turbo-devel",
 "name": "libjpeg-turbo-devel",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libjpeg-turbo",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "udev",
 "name": "udev",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "udev",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "mkdevnodes",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "sed",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "coreutils",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "MAKEDEV",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "hwdata",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "pam",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glib2",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libacl",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "systemd",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "rpm-libs",
 "name": "rpm-libs",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "file-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "rpm-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bzip2-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "rpm",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "db4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "elfutils-libelf",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libcap",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "liblua",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "nss",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "popt",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "xz-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "zlib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "desktop-file-utils",
 "name": "desktop-file-utils",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glib2",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "qt-qmlviewer",
 "name": "qt-qmlviewer",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libqtcore4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtdeclarative4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtgui4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtnetwork4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtopengl4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtscript4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtsql4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtsvg4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtxmlpatterns4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libstdc++",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "fontconfig",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "mesa-llvmpipe-libEGL",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "mesa-llvmpipe-libGLESv2",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "xorg-x11-drv-keyboard",
 "name": "xorg-x11-drv-keyboard",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "xkeyboard-config",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "xorg-x11-server-Xorg",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "xorg-x11-drv-mouse",
 "name": "xorg-x11-drv-mouse",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "xorg-x11-server-Xorg",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "kmod-libs",
 "name": "kmod-libs",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "pulseaudio-module-x11",
 "name": "pulseaudio-module-x11",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "sed",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "pulseaudio",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "dbus-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libICE",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libSM",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libX11",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXtst",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libasyncns",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "file",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libtool-ltdl",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libxcb",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "orc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "speex",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "xcb-util",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "pulseaudio",
 "name": "pulseaudio",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "udev",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "pulseaudio",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "gconf",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "alsa-lib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "dbus-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glib2",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libICE",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libSM",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libX11",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXtst",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libasyncns",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "file",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libtool-ltdl",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libxcb",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "orc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "speex",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "xcb-util",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libqtcore4",
 "name": "libqtcore4",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libqtcore4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libstdc++",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "fontconfig",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glib2",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "zlib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libqtdbus4",
 "name": "libqtdbus4",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libqtcore4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtdbus4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtxml4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libstdc++",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "dbus-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "fontconfig",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libqtdeclarative4",
 "name": "libqtdeclarative4",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libqtcore4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtdeclarative4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtdesigner4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtgui4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtnetwork4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtscript4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtsql4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtsvg4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtxml4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtxmlpatterns4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libstdc++",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "fontconfig",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "mesa-llvmpipe-libEGL",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libqtdesigner4",
 "name": "libqtdesigner4",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libqtcore4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtdesigner4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtgui4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtscript4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtxml4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libstdc++",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "fontconfig",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "mesa-llvmpipe-libEGL",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libqtgui4",
 "name": "libqtgui4",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libqtcore4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtgui4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtnetwork4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libstdc++",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "xdg-utils",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "fontconfig",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "freetype",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glib2",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libICE",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libSM",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libX11",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXext",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXi",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXrender",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libjpeg-turbo",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libmng",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libpng",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libtiff",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "mesa-llvmpipe-libEGL",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "zlib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libqtnetwork4",
 "name": "libqtnetwork4",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libqtcore4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtdbus4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtnetwork4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtxml4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libstdc++",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "fontconfig",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "zlib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libqtopengl4",
 "name": "libqtopengl4",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libqtcore4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtgui4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtopengl4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libstdc++",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "fontconfig",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "freetype",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libX11",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXext",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXi",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXrender",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "mesa-llvmpipe-libEGL",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "mesa-llvmpipe-libGLESv2",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libqtscript4",
 "name": "libqtscript4",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libqtcore4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtdbus4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtgui4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtscript4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtxml4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libstdc++",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "fontconfig",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "mesa-llvmpipe-libEGL",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libqtsql4",
 "name": "libqtsql4",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libqtcore4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libstdc++",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "fontconfig",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libqtsvg4",
 "name": "libqtsvg4",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libqtcore4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtgui4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtsvg4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtxml4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libstdc++",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "fontconfig",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "mesa-llvmpipe-libEGL",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "zlib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libqtxml4",
 "name": "libqtxml4",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libqtcore4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libstdc++",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "fontconfig",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libqtxmlpatterns4",
 "name": "libqtxmlpatterns4",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libqtcore4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libqtnetwork4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libstdc++",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "fontconfig",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libsatsolver",
 "name": "libsatsolver",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "satsolver-tools",
 "name": "satsolver-tools",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "bzip2",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "gzip",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "rpm-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libsatsolver",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "coreutils",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "db4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "expat",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "zlib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "coreutils",
 "name": "coreutils",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "coreutils",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "pam",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libacl",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "gconf",
 "name": "gconf",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "psmisc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "gconf",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "dbus-glib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "dbus-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "dbus",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glib2",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libxml2",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "polkit",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "ntp",
 "name": "ntp",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "ntpdate",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "ntp",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libcap",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libedit",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "openssl",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "bzip2-libs",
 "name": "bzip2-libs",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libgcc",
 "name": "libgcc",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libstdc++",
 "name": "libstdc++",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libstdc++",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "v8",
 "name": "v8",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libstdc++",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "v8",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libicu",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "readline",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "MAKEDEV",
 "name": "MAKEDEV",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "MAKEDEV",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc-common",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "shadow-utils",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "basesystem",
 "name": "basesystem",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "filesystem",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "setup",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "boardname",
 "name": "boardname",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "grep",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "coreutils",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "rpm",
 "name": "rpm",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "rpm-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bzip2-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "xz-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "zlib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "db4-utils",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "file-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "curl",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "coreutils",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "rpm",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "db4",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "elfutils-libelf",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libcap",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "liblua",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "nss",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "popt",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "e2fsprogs",
 "name": "e2fsprogs",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "e2fsprogs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "e2fsprogs-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libblkid",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libcom_err",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libss",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libuuid",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "filesystem",
 "name": "filesystem",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "setup",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "filesystem",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "glibc-common",
 "name": "glibc-common",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc-common",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "tzdata",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "hwdata",
 "name": "hwdata",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "hwdata",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "module-init-tools",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "iptables",
 "name": "iptables",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "iptables",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "kbd",
 "name": "kbd",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libuser",
 "name": "libuser",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libuser",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "pam",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glib2",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "popt",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "lsb-release",
 "name": "lsb-release",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "mer-release",
 "name": "mer-release",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "mer-release",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "ncurses-base",
 "name": "ncurses-base",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "ncurses",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "ncurses",
 "name": "ncurses",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "ncurses-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "net-tools",
 "name": "net-tools",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "nss-softokn-freebl",
 "name": "nss-softokn-freebl",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "nss-sysinit",
 "name": "nss-sysinit",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "sed",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "coreutils",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "nss-sysinit",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "nspr",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "nss",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "pam",
 "name": "pam",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "coreutils",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "pam",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "passwd",
 "name": "passwd",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libuser",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "pam",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "passwd",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glib2",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "popt",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "prelink",
 "name": "prelink",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "findutils",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "gawk",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "grep",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "coreutils",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "prelink",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "util-linux",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "elfutils-libelf",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "rootfiles",
 "name": "rootfiles",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "ncurses",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "rootfiles",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "setup",
 "name": "setup",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "setup",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "shadow-utils",
 "name": "shadow-utils",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "setup",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "shadow-utils",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "util-linux",
 "name": "util-linux",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "coreutils",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "pam",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "util-linux",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libblkid",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libuuid",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "ncurses-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "zlib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "wireless-tools",
 "name": "wireless-tools",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "wireless-tools",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "wpa_supplicant",
 "name": "wpa_supplicant",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "dbus-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libnl",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "openssl",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "xdg-utils",
 "name": "xdg-utils",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "desktop-file-utils",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "coreutils",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "util-linux",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "uxlaunch",
 "name": "uxlaunch",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "pam",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "uxlaunch",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "dbus-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glib2",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXau",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "systemd",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "xorg-x11-utils-xhost",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "iputils",
 "name": "iputils",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libcap",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libidn",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "openssl",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "module-init-tools",
 "name": "module-init-tools",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "module-init-tools",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "alsa-lib",
 "name": "alsa-lib",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "coreutils",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "alsa-lib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "augeas-libs",
 "name": "augeas-libs",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "augeas-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "bluez-libs",
 "name": "bluez-libs",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "bluez",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "db4",
 "name": "db4",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "dbus-glib",
 "name": "dbus-glib",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "dbus-glib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "dbus-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "expat",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glib2",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "dbus-libs",
 "name": "dbus-libs",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "dbus",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "dbus",
 "name": "dbus",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "shadow-utils",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "dbus-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "dbus",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "expat",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "e2fsprogs-libs",
 "name": "e2fsprogs-libs",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libcom_err",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "elfutils-libelf",
 "name": "elfutils-libelf",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "expat",
 "name": "expat",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "expat",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "fontconfig",
 "name": "fontconfig",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "grep",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "coreutils",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "expat",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "fontconfig",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "freetype",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "freetype",
 "name": "freetype",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "glib2",
 "name": "glib2",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glib2",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libffi",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "pcre",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "zlib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "glibc",
 "name": "glibc",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc-common",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "nss-softokn-freebl",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "lcms-libs",
 "name": "lcms-libs",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "lcms",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libICE",
 "name": "libICE",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libSM",
 "name": "libSM",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libICE",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libuuid",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libX11",
 "name": "libX11",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "filesystem",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libX11",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libxcb",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libXau",
 "name": "libXau",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libXaw",
 "name": "libXaw",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libX11",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXext",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXmu",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXpm",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXt",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libXdmcp",
 "name": "libXdmcp",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libXext",
 "name": "libXext",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libX11",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libXfixes",
 "name": "libXfixes",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libX11",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libXfont",
 "name": "libXfont",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "freetype",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libfontenc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "zlib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libXi",
 "name": "libXi",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libX11",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXext",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libXmu",
 "name": "libXmu",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libX11",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXext",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXt",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libXpm",
 "name": "libXpm",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libX11",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libXrender",
 "name": "libXrender",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libX11",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libXt",
 "name": "libXt",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libICE",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libSM",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libX11",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libXtst",
 "name": "libXtst",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libX11",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXext",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXi",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libacl",
 "name": "libacl",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libattr",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libasyncns",
 "name": "libasyncns",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libattr",
 "name": "libattr",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libblkid",
 "name": "libblkid",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libblkid",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libuuid",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libcap",
 "name": "libcap",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libattr",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libcap",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libcom_err",
 "name": "libcom_err",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libdrm",
 "name": "libdrm",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libdrm",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libpciaccess",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libedit",
 "name": "libedit",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "ncurses-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libffi",
 "name": "libffi",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libfontenc",
 "name": "libfontenc",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "zlib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libgcrypt",
 "name": "libgcrypt",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgpg-error",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libgpg-error",
 "name": "libgpg-error",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgpg-error",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libicu",
 "name": "libicu",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libstdc++",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libicu",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libidn",
 "name": "libidn",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libjpeg-turbo",
 "name": "libjpeg-turbo",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libjpeg-turbo-devel",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libjpeg-turbo",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libksba",
 "name": "libksba",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgpg-error",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "liblua",
 "name": "liblua",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libmng",
 "name": "libmng",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "lcms-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libjpeg-turbo",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "zlib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libnl",
 "name": "libnl",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libogg",
 "name": "libogg",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libpciaccess",
 "name": "libpciaccess",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "hwdata",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libpng",
 "name": "libpng",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "zlib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libss",
 "name": "libss",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libcom_err",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libtiff",
 "name": "libtiff",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libstdc++",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libjpeg-turbo",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libtiff",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "zlib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libtool-ltdl",
 "name": "libtool-ltdl",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libusb1",
 "name": "libusb1",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libusb",
 "name": "libusb",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libstdc++",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libusb",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libuuid",
 "name": "libuuid",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libvorbis",
 "name": "libvorbis",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libogg",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libvorbis",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libxcb",
 "name": "libxcb",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXau",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libxcb",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libxml2",
 "name": "libxml2",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libxml2",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "zlib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "mesa-llvmpipe-libEGL",
 "name": "mesa-llvmpipe-libEGL",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "udev",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libX11",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libdrm",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libxcb",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "mesa-llvmpipe",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "mesa-llvmpipe-libGLESv2",
 "name": "mesa-llvmpipe-libGLESv2",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libdrm",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "mesa-llvmpipe-libglapi",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "mesa-llvmpipe",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "mesa-llvmpipe-libglapi",
 "name": "mesa-llvmpipe-libglapi",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "mesa-llvmpipe",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "mesa-llvmpipe",
 "name": "mesa-llvmpipe",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "udev",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libstdc++",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libX11",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXext",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXfixes",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libdrm",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "mesa-llvmpipe-libEGL",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "ncurses-libs",
 "name": "ncurses-libs",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "ncurses-base",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "ncurses",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "ncurses-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "nspr",
 "name": "nspr",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "nspr",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "nss",
 "name": "nss",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "sqlite",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "nss-softokn-freebl",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "nss-sysinit",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "nspr",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "nss",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "zlib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "openssl",
 "name": "openssl",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "coreutils",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "openssl",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "zlib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "orc",
 "name": "orc",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "orc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "pcre",
 "name": "pcre",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libstdc++",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "pcre",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "pixman",
 "name": "pixman",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "polkit",
 "name": "polkit",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "dbus",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "expat",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glib2",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "polkit",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "systemd",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "popt",
 "name": "popt",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "pth",
 "name": "pth",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "readline",
 "name": "readline",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "ncurses-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "shared-mime-info",
 "name": "shared-mime-info",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glib2",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libxml2",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "speex",
 "name": "speex",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "xcb-util",
 "name": "xcb-util",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libxcb",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "xcb-util",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "xz-libs",
 "name": "xz-libs",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "zlib",
 "name": "zlib",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "crda",
 "name": "crda",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "udev",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgcrypt",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libnl",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "iw",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "wireless-regdb",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "iw",
 "name": "iw",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libnl",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "pacrunner",
 "name": "pacrunner",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libstdc++",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "v8",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "dbus-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glib2",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "curl",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "pacrunner",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libzypp",
 "name": "libzypp",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "gnupg2",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "udev",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "rpm-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libsatsolver",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "satsolver-tools",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libstdc++",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "expat",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "curl",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libxml2",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "openssl",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "zlib",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "pacrunner",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libzypp",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "zypper",
 "name": "zypper",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "procps",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libstdc++",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "augeas-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "readline",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libzypp",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "zypper",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "bash",
 "name": "bash",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "ncurses-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "systemd-sysv",
 "name": "systemd-sysv",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "systemd",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "systemd",
 "name": "systemd",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "udev",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "kmod-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "pam",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "dbus-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libacl",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libcap",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "xz-libs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "systemd",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "xorg-x11-drv-evdev",
 "name": "xorg-x11-drv-evdev",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "xorg-x11-server-Xorg",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "xorg-x11-drv-fbdev",
 "name": "xorg-x11-drv-fbdev",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "xorg-x11-server-Xorg",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "xorg-x11-server-Xorg-setuid",
 "name": "xorg-x11-server-Xorg-setuid",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "udev",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "xorg-x11-drv-keyboard",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "xorg-x11-drv-mouse",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXau",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXdmcp",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXfont",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libdrm",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libpciaccess",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "openssl",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "pixman",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "xorg-x11-drv-evdev",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "xkeyboard-config",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "xorg-x11-server-Xorg-setuid",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "xorg-x11-server-common",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "xorg-x11-server",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "xorg-x11-xkb-utils",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "xorg-x11-server-common",
 "name": "xorg-x11-server-common",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "xorg-x11-server",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "xorg-x11-server",
 "name": "xorg-x11-server",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "libdrm",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "xorg-x11-utils-xhost",
 "name": "xorg-x11-utils-xhost",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libX11",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXau",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXmu",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "xorg-x11-xauth",
 "name": "xorg-x11-xauth",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libX11",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXau",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXext",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXmu",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "xdg-user-dirs",
 "name": "xdg-user-dirs",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "xdg-user-dirs",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "xorg-x11-drv-vesa",
 "name": "xorg-x11-drv-vesa",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "xorg-x11-server-Xorg",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "droid-sans-fonts",
 "name": "droid-sans-fonts",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "filesystem",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "droid-sans-fonts",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "droid-sans-mono-fonts",
 "name": "droid-sans-mono-fonts",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "filesystem",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "droid-sans-mono-fonts",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "droid-serif-fonts",
 "name": "droid-serif-fonts",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "filesystem",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "droid-serif-fonts",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "liberation-fonts-common",
 "name": "liberation-fonts-common",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "filesystem",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "liberation-mono-fonts",
 "name": "liberation-mono-fonts",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "liberation-fonts-common",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "liberation-sans-fonts",
 "name": "liberation-sans-fonts",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "liberation-fonts-common",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "liberation-serif-fonts",
 "name": "liberation-serif-fonts",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "bash",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "liberation-fonts-common",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "xorg-x11-xkb-utils",
 "name": "xorg-x11-xkb-utils",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libX11",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXaw",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "libXt",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "file",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libudev",
 "name": "libudev",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "fontpackages-filesystem",
 "name": "fontpackages-filesystem",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "deltarpm",
 "name": "deltarpm",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "tzdata",
 "name": "tzdata",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "xorg-x11-filesystem",
 "name": "xorg-x11-filesystem",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libcurl",
 "name": "libcurl",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libsndfile",
 "name": "libsndfile",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "libxkbfile",
 "name": "libxkbfile",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "wireless-regdb",
 "name": "wireless-regdb",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "xkeyboard-config",
 "name": "xkeyboard-config",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]
},

{ "id": "cjkuni-fonts",
 "name": "cjkuni-fonts",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "weight": 1
    }
 }]

}];
    //end
    //init Hypertree
    var ht = new $jit.Hypertree({
        //id of the visualization container
        injectInto: 'infovis',
        //By setting overridable=true,
        //Node and Edge global properties can be
        //overriden for each node/edge.
        Node: {
            overridable: true,
            'transform': false,
            color: "#f00"
        },
        
        Edge: {
            overridable: true,
            color: "#088"
        },
        //calculate nodes offset
        offset: 0.2,
        //Change the animation transition type
        transition: $jit.Trans.Back.easeOut,
        //animation duration (in milliseconds)
        duration:1000,
        
        //This method is called right before plotting an
        //edge. This method is useful for adding individual
        //styles to edges.
        onBeforePlotLine: function(adj){
            //Set random lineWidth for edges.
            if (!adj.data.$lineWidth) 
                adj.data.$lineWidth = Math.random() * 7 + 1;
        },
        
        onBeforeCompute: function(node){
            Log.write("centering");
        },
        //Attach event handlers on label creation.
        onCreateLabel: function(domElement, node){
            domElement.innerHTML = node.name;
            domElement.style.cursor = "pointer";
            domElement.onclick = function () {
                ht.onClick(node.id, { 
                    hideLabels: false,
                    onComplete: function() {
                      ht.controller.onComplete();
                    }
                });
            };
        },
        //This method is called when moving/placing a label.
        //You can add some positioning offsets to the labels here.
        onPlaceLabel: function(domElement, node){
            var width = domElement.offsetWidth;
            var intX = parseInt(domElement.style.left);
            intX -= width / 2;
            domElement.style.left = intX + 'px';
        },
        
        onComplete: function(){
            Log.write("done");

            //Make the relations list shown in the right column.
            var node = ht.graph.getClosestNodeToOrigin("current");
            var html = "<h4>" + node.name + "</h4><b>Connections:</b>";
            html += "<ul>";
            node.eachAdjacency(function(adj){
                var child = adj.nodeTo;
                html += "<li>" + child.name + "</li>";
            });
            html += "</ul>";
            $jit.id('inner-details').innerHTML = html;
        }
    });
    //load JSON graph.
    ht.loadJSON(json, 2);
    //compute positions and plot
    ht.refresh();
    //end
    ht.controller.onBeforeCompute(ht.graph.getNode(ht.root));
    ht.controller.onComplete();
}
