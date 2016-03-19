(function() {
  "use strict";
  const { readURI, readURISync } = require("sdk/net/url");
  const self = require('sdk/self');
  const tabs = require("sdk/tabs");
  const buttons = require('sdk/ui/button/action');
  const preferences = require("sdk/simple-prefs");
  const name = "lightweightThemes.selectedThemeID";
  const selectedThemeID = require("sdk/preferences/service").get(name);
  const { ToggleButton } = require('sdk/ui/button/toggle');
  const panels = require("sdk/panel");
  const events = require("sdk/system/events");
  const ss = require("sdk/simple-storage");
  const _ = require("sdk/l10n").get;
  //console.log(_("hello_id!"));

  var button = buttons.ActionButton({
    id: "glpi-link",
    label: "Visit GLIP Project",
    icon: {
      "16": selectedThemeID === "firefox-devedition@mozilla.org" ?
        "./icons/icon-16.dev.png" : "./icons/icon-16.png",
      "32": "./icons/icon-32.png",
      "64": "./icons/icon-64.png"
    },
    onClick: handleClick
  });

  function handleClick(state) {
    tabs.open("http://glpi-project.org/");
  }

  // a dummy function, to show how tests work.
  // to see how to test this function, look at test/test-index.js
  function dummy(text, callback) {
    callback(text);
  }

  exports.dummy = dummy;
})();
