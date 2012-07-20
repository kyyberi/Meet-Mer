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
    this.elem.style.left = (300 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
    //init data
    //If a node in this JSON structure
    //has the "$type" or "$dim" parameters
    //defined it will override the "type" and
    //"dim" parameters globally defined in the
    //RGraph constructor.









  
var json = [{

 "id": "bluez",
 "name": "bluez",
 "data": {
    "$dim": 5.000000,
    "some other key": "some other value"
 },
 "adjacencies": [
 {
  "nodeTo": "bluez",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "udev",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "hwdata",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#f111ff",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "bluez-libs",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "dbus-libs",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#f111ff",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "dbus",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "glib2",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#f111ff",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "libusb",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "systemd",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#ec1111",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#f111ff",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"green",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "$type":"arrow",
       "$color":"green",
       "$dim":20
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
       "weight": 1,
       "$type":"arrow",
       "$color":"#f111ff",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "connman",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "ofono",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#f111ff",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "ntp",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#f111ff",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "iptables",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "wpa_supplicant",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#f111ff",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "dbus-libs",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "dbus",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#f111ff",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "glib2",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "pacrunner",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#f111ff",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#ec1111",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "systemd",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#f111ff",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"green",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"green",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "$type":"arrow",
       "$color":"green",
       "$dim":20
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
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "udev",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "libgcc",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "bluez-libs",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "dbus-libs",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "dbus",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#f111ff",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "glib2",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "bash",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#ec1111",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "systemd",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#f111ff",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"green",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"green",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "$type":"arrow",
       "$color":"green",
       "$dim":20
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
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "libstdc++",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "v8",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "libicu",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#ec1111",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "readline",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"green",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "$type":"arrow",
       "$color":"green",
       "$dim":20
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
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#ec1111",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"green",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "$type":"arrow",
       "$color":"green",
       "$dim":20
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
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "libnl",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "openssl",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"green",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"green",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "$type":"arrow",
       "$color":"green",
       "$dim":20
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
       "weight": 1,
       "$type":"arrow",
       "$color":"#f111ff",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#ec1111",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"green",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "$type":"arrow",
       "$color":"green",
       "$dim":20
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
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#ec1111",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"green",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "$type":"arrow",
       "$color":"green",
       "$dim":20
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
       "weight": 1,
       "$type":"arrow",
       "$color":"#f111ff",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "libgcrypt",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "libnl",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "iw",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#f111ff",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "wireless-regdb",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#f111ff",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"green",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"green",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "$type":"arrow",
       "$color":"green",
       "$dim":20
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
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "libnl",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"green",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"green",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "$type":"arrow",
       "$color":"green",
       "$dim":20
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
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "libstdc++",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "v8",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "dbus-libs",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "glib2",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "glibc",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "curl",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#ec1111",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "pacrunner",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "copyright",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"#0a74ac",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"green",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "$type":"arrow",
       "$color":"green",
       "$dim":20
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
       "weight": 1,
       "$type":"arrow",
       "$color":"green",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "description",  "data": {
       "weight": 1,
       "$type":"arrow",
       "$color":"green",
       "$dim":20
    }
 }, 
 {
  "nodeTo": "license",  "data": {
       "$type":"arrow",
       "$color":"green",
       "$dim":20
    }
 }]
}];






 
  

    //end
    //init RGraph
    var rgraph = new $jit.RGraph({
      'injectInto': 'infovis',
      //Optional: Add a background canvas
      //that draws some concentric circles.
      //'background': {
      //  'CanvasStyles': {
      //    'strokeStyle': '#555',
      //    'shadowBlur': 50,
      //    'shadowColor': '#ccc'
      //  }
      //},
        //Nodes and Edges parameters
        //can be overridden if defined in 
        //the JSON input data.
        //This way we can define different node
        //types individually.
        Node: {
            'overridable': true,
             'color': '#000'
        },
        Edge: {
            'overridable': true,
            'color': '#000'
        },
        //Set polar interpolation.
        //Default's linear.
        interpolation: 'polar',
        //Change the transition effect from linear
        //to elastic.
        transition: $jit.Trans.Elastic.easeOut,
        //Change other animation parameters.
        duration:500,
        fps: 30,
        //Change father-child distance.
        levelDistance: 200,
        //This method is called right before plotting
        //an edge. This method is useful to change edge styles
        //individually.
        onBeforePlotLine: function(adj){
            //Add some random lineWidth to each edge.
            //if (!adj.data.$lineWidth) 
            //    adj.data.$lineWidth = Math.random() * 5 + 1;
        },
        
        onBeforeCompute: function(node){
            Log.write("centering " + node.name + "...");
            
            //Make right column relations list.
            var html = "<h4>" + node.name + "</h4><b>Connections:</b>";
            html += "<ul>";
            node.eachAdjacency(function(adj){
                var child = adj.nodeTo;
                html += "<li>" + child.name + "</li>";
            });
            html += "</ul>";
            $jit.id('inner-details').innerHTML = html;
        },
        //Add node click handler and some styles.
        //This method is called only once for each node/label crated.
        onCreateLabel: function(domElement, node){
            domElement.innerHTML = node.name;
            domElement.onclick = function () {
                rgraph.onClick(node.id, { 
                    hideLabels: false,
                    onComplete: function() {
                        Log.write("done");
                    }
                });
            };
            var style = domElement.style;
            style.cursor = 'pointer';
            style.fontSize = "1em";
            style.color = "#000";
        },
        //This method is called when rendering/moving a label.
        //This is method is useful to make some last minute changes
        //to node labels like adding some position offset.
        onPlaceLabel: function(domElement, node){
            var style = domElement.style;
            var left = parseInt(style.left);
            var w = domElement.offsetWidth;
            style.left = (left - w /3) + 'px';
	    
        }
    });
    //load graph.
    rgraph.loadJSON(json, 1);
    
    //compute positions and plot
    rgraph.refresh();
    //end
    rgraph.controller.onBeforeCompute(rgraph.graph.getNode(rgraph.root));
    Log.write('done');
    
}

