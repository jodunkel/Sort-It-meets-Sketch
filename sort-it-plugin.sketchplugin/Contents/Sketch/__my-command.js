var globalThis = this;
var global = this;
function __skpm_run (key, context) {
  globalThis.context = context;
  try {

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/my-command.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/my-command.js":
/*!***************************!*\
  !*** ./src/my-command.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var colorToCategory = [];
var artboardIndex = 0;
var cardArchitecture = {
  cardTitle: {
    id: "224F17A7-37BA-4C63-8FB1-48B37E5F3EBA",
    type: "symbolID",
    title: {
      id: "E668F187-0C7B-49F1-A9BE-3DD7BC60CA1C",
      type: "symbolID",
      text: {
        id: "C767CA97-276D-4799-B23C-CB9DA65E2A3B",
        type: "stringValue"
      }
    }
  },
  subcard: {
    id: ["FC7AFE5D-6784-412D-AA59-0CD04203AF89", "B4A0BA16-103F-4084-B060-5C8568F0D060", "1100D78C-F9DC-4484-8E3C-1717651CB9C5", "54190B67-A4B6-40BC-ACEE-04C95DDCBF6B", "73173D13-A851-41F3-A53D-8C5654C6E172", "37FAB9B3-C705-4391-9AB0-632499808AFF"],
    type: "symbolID",
    content: {
      id: "CAFA59BC-FB6D-49B3-AF1B-63D56911D62C",
      type: "symbolID",
      text: {
        id: "E0D94CA4-7624-4B01-B47B-25700F51D7B8",
        type: "stringValue"
      }
    },
    title: {
      id: "27922DC4-D7A9-45E3-B840-22C69BCF047C",
      type: "symbolID",
      text: {
        id: "C767CA97-276D-4799-B23C-CB9DA65E2A3B",
        type: "stringValue"
      }
    }
  },
  categoriesGroup: {
    id: "7948EBBE-E43B-42E4-8AB2-992A43792EC0",
    type: "symbolID",
    categories: {
      id: ["0FE9DD91-A17D-4906-8739-689B27B7C006", "68E32435-0BE7-46E9-8CBA-BD7427B5A501", "AB2E3712-55C4-4198-B755-ED242F2BDED8", "369F3B7D-FBFA-4E58-BE9D-52BD9958EB57", "9C153CF4-A26E-45DB-9F01-314F8E589EAD", "B122D53C-5DF3-494D-A6D0-6746C8FB275E"],
      type: "symbolID",
      tags: {
        id: ["87FB5A5C-FB0C-47DD-9030-AD6BA6799DAA", "4CEE0DA3-18E4-4FF3-A938-E4A4063C0D31", "26D1061E-09F1-4E7F-9707-D623797112AF", "2A3EBFE0-B8B5-4B4F-8667-3D27DF18E835", "316FA649-A5FF-4D17-A020-C3D117ABC8B5", "EA2D6FC6-3437-418E-BCC0-98100C73EB2C", "5B3CC679-5A5C-441D-AECF-45518D9BE713", "3AA957B4-0D31-455C-AC92-3B77CCFE3826", "D6956B0D-FAF4-482F-BA48-A00ED1336DC7"],
        type: "symbolID",
        title: {
          id: "92A23017-35C8-4F6D-9CA0-89861E04F060",
          type: "stringValue"
        },
        background: {
          id: "421B726F-8722-4338-BB22-55AE13E67A32",
          type: "layerStyle"
        }
      },
      categorie: {
        id: "8876C8D9-3203-4E5E-8222-185741B06B34",
        type: "symbolID",
        text: {
          id: "238D1655-275C-4209-A801-B111EDFC4E00",
          type: "stringValue"
        }
      }
    }
  }
};
var colorId = [// "#87125A" "#09676E" "#87125A" "#D01E8C" "#0D97A1" "#2D51B2" "#C6559A" "#83B5C1" "#438DCC" "#D098BB"
"3D2BDACD-F119-4738-BB66-7BAF3F79DADC", "A63A1884-8751-4CB0-A3A5-5FBA2D3D0A58", "3A05AEED-FE6B-4659-B198-59B00FC3275B", "11B8348F-C5EB-4815-92CA-92554B466758", "11831BDB-50B3-4AFE-9683-B206CB2D4ED5", "C873C395-3BF9-4D39-B54E-315055346871", "2D07AFB8-923E-40AC-B478-1FDC4E42E0EA", "0EEB7B59-C2B4-4C4F-91E1-47F921259E95", "B0D7EF6E-6BFE-4034-AE7A-4EFA9DE459A4", "2A6D744C-87A5-4A58-BCF4-84EC6E257B50"];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var path = process.cwd();
  sketch__WEBPACK_IMPORTED_MODULE_0__["Document"].open(path.concat("/Contents/Resources/Sort-It.sketch"), function (err, document) {
    if (err) {
      console.error(err);
      sketch__WEBPACK_IMPORTED_MODULE_0__["UI"].alert("Oops something went wrong 😬", " ");
      document.close();
      return; // oh no, we failed to open the document
    }

    document.save(__webpack_require__(/*! path */ "path").join(__webpack_require__(/*! os */ "os").homedir(), "Desktop").concat("/sort-it.sketch"), {
      saveMode: sketch__WEBPACK_IMPORTED_MODULE_0__["Document"].SaveMode.SaveAs
    });
    sketch__WEBPACK_IMPORTED_MODULE_0__["UI"].alert("Choose your Sort-It File", "It must be a JSON file exported from Sort-It!");
    var sortItData = loadJSON();

    if (sortItData == false || sortItData == undefined || sortItData.version != "2.0") {
      sketch__WEBPACK_IMPORTED_MODULE_0__["UI"].alert("Oops something went wrong 😬", "You must select a Sort-It file to continue. If you have selected a file, something has gone wrong or it is not a file of generation '2.0'.");
      document.close();
      return;
    }

    try {
      controler(document, sortItData);
      tileLayer(document.pages.find(function (page) {
        return page.name == "Sort-It";
      }).layers[0].layers, document);
    } catch (error) {
      sketch__WEBPACK_IMPORTED_MODULE_0__["UI"].alert("Oops something went wrong 😬", " ");
      console.error(error);
      document.close();
      return;
    }

    document.save();
    sketch__WEBPACK_IMPORTED_MODULE_0__["UI"].message("The file has been saved to your desktop. 💾 ");
  });
});

function idCombiner(ids, type) {
  var newId = [];
  _typeof(ids) === "object" ? newId.push(ids.join("/")) : newId.push(ids);
  return type === undefined ? newId[0] : (newId.push(type), newId.join("_"));
}

function categorieGenerator(sketchCard, categories) {
  var overrideValues = [];

  if (categories.length == 0) {
    var ids = [];
    ids.push(cardArchitecture.categoriesGroup.id);
    sketchCard.overrides.find(function (override) {
      return override.id === idCombiner(ids, cardArchitecture.categoriesGroup.type);
    }).value = "";
  } else {
    var _loop = function _loop(i) {
      var ids = [];
      categories[i] === undefined || categories[i].label === "SYSTEM-ATTRIBUTE-display-as" ? (ids.push(cardArchitecture.categoriesGroup.id), ids.push(cardArchitecture.categoriesGroup.categories.id[i]), sketchCard.overrides.find(function (override) {
        return override.id === idCombiner(ids, cardArchitecture.categoriesGroup.categories.type);
      }).value = "") : (categories[i].label === "SYSTEM-ATTRIBUTE-empty-category" ? sketchCard.overrides.find(function (override) {
        return override.id === idCombiner([cardArchitecture.categoriesGroup.id, cardArchitecture.categoriesGroup.categories.id[i], cardArchitecture.categoriesGroup.categories.categorie.id], cardArchitecture.categoriesGroup.categories.categorie.type);
      }).value = "" : (ids.push(cardArchitecture.categoriesGroup.id), ids.push(cardArchitecture.categoriesGroup.categories.id[i]), ids.push(cardArchitecture.categoriesGroup.categories.categorie.id), ids.push(cardArchitecture.categoriesGroup.categories.categorie.text.id), sketchCard.overrides.find(function (override) {
        return override.id === idCombiner(ids, cardArchitecture.categoriesGroup.categories.categorie.text.type);
      }).value = categories[i].label), tagGenerator(sketchCard, categories[i].value, cardArchitecture.categoriesGroup.categories.id[i], categories[i].label));
    };

    for (var i = 0; i < cardArchitecture.categoriesGroup.categories.id.length; i++) {
      _loop(i);
    }
  }

  return overrideValues;
}

function tagGenerator(sketchCard, tags, categorieID, category) {
  var _loop2 = function _loop2(i) {
    var ids = [];
    tags[i] === undefined ? (ids.push(cardArchitecture.categoriesGroup.id), ids.push(categorieID), ids.push(cardArchitecture.categoriesGroup.categories.tags.id[i]), sketchCard.overrides.find(function (override) {
      return override.id === idCombiner(ids, cardArchitecture.categoriesGroup.categories.type);
    }).value = "") : (ids.push(cardArchitecture.categoriesGroup.id), ids.push(categorieID), ids.push(cardArchitecture.categoriesGroup.categories.tags.id[i]), ids.push(cardArchitecture.categoriesGroup.categories.tags.title.id), sketchCard.overrides.find(function (override) {
      return override.id === idCombiner(ids, cardArchitecture.categoriesGroup.categories.tags.title.type);
    }).value = tags[i], tagColor(sketchCard, categorieID, i, category));
  };

  for (var i = 0; i < cardArchitecture.categoriesGroup.categories.tags.id.length; i++) {
    _loop2(i);
  }
}

function colorIndexGenerator(index) {
  if (index < colorId.length) {
    return index;
  } else {
    return colorIndexGenerator(index - colorId.length);
  }
}

function tagColor(sketchCard, categorieID, index, category) {
  var colerIndex = 0;

  if (colorToCategory.indexOf(category) < 0) {
    colorToCategory.push(category);
    colerIndex = colorIndexGenerator(colorToCategory.indexOf(category));
  } else {
    colerIndex = colorIndexGenerator(colorToCategory.indexOf(category));
  }

  sketchCard.overrides.find(function (override) {
    return override.id === idCombiner([cardArchitecture.categoriesGroup.id, categorieID, cardArchitecture.categoriesGroup.categories.tags.id[index], cardArchitecture.categoriesGroup.categories.tags.background.id], cardArchitecture.categoriesGroup.categories.tags.background.type);
  }).value = colorId[colerIndex];
}

function controler(document, sortItData) {
  var symb = document.getSymbols().find(function (symbols) {
    return symbols.name === "card/default";
  });
  document.pages.find(function (page) {
    return page.name == "Sort-It";
  }).layers[0].layers = [];
  var x = 40;
  var y = 40;
  var sortItCOrD = sortItData["card-views"].find(function (c) {
    return c.title === "SYSTEM-ATTRIBUTE-root" || c.title === "SYSTEM-ATTRIBUTE-default";
  }).content; //   "SYSTEM-ATTRIBUTE-root"   "SYSTEM-ATTRIBUTE-default"

  var directorys = ["Import all directorys", "All cards without a directory"];
  var directory = "";
  sortItCOrD.forEach(function (cOrD) {
    if (cOrD.attributes.find(function (attribut) {
      return attribut.label == "SYSTEM-ATTRIBUTE-display-as";
    }).value[0] == "directory") {
      directorys.push(cOrD.title);
    }
  });

  if (directorys.length > 2) {
    sketch__WEBPACK_IMPORTED_MODULE_0__["UI"].getInputFromUser("Which directory do you want to import?", {
      type: sketch__WEBPACK_IMPORTED_MODULE_0__["UI"].INPUT_TYPE.selection,
      possibleValues: directorys
    }, function (err, value) {
      if (err) {
        sketch__WEBPACK_IMPORTED_MODULE_0__["UI"].alert("Oops something went wrong 😬", "This is probably a mistake with the category selection."); // most likely the user canceled the input

        return;
      }

      directory = value;
    });
  }

  var sortItCards = [];

  if (directory != "" && directory != "Import all directorys" && directory != "All cards without a directory") {
    sortItCards = sortItCOrD.find(function (dir) {
      return dir.title == directory && dir.attributes.find(function (attribut) {
        return attribut.label == "SYSTEM-ATTRIBUTE-display-as";
      }).value[0] == "directory";
    }).content;
  } else {
    if (directory == "All cards without a directory") {
      sortItCards = sortItCOrD.filter(function (cOrD) {
        return cOrD.attributes.find(function (attribut) {
          return attribut.label == "SYSTEM-ATTRIBUTE-display-as";
        }).value[0] == "card";
      });
    } else {
      sortItCOrD.map(function (cOrD) {
        return cOrD.attributes.find(function (attribut) {
          return attribut.label == "SYSTEM-ATTRIBUTE-display-as";
        }).value[0] == "card" ? sortItCards = sortItCards.concat(cOrD) : sortItCards = sortItCards.concat(cOrD.content);
      });
    }
  }

  for (var index = 0; index < sortItCards.length; index++) {
    var newSymb = symb.createNewInstance();
    newSymb.frame.x = x;
    newSymb.frame.y = y;
    document.pages.find(function (page) {
      return page.name == "Sort-It";
    }).layers[0].layers.push(newSymb);
    x < 874 ? x += 405 : (y += 284, x = 40);
    giveOverrideValue(document.pages.find(function (page) {
      return page.name == "Sort-It";
    }).layers[0].layers[index], sortItCards[index]);
    categorieGenerator(document.pages.find(function (page) {
      return page.name == "Sort-It";
    }).layers[0].layers[index], sortItCards[index].attributes);
    document.pages.find(function (page) {
      return page.name == "Sort-It";
    }).layers[0].layers[index].resizeWithSmartLayout();
  }
}

function giveOverrideValue(sketchCard, sortItCard) {
  contentGenerator(sketchCard, sortItCard.content);
  titleGenerator(sketchCard, sortItCard.title);
}

function contentGenerator(sketchCard, cardContent) {
  var _loop3 = function _loop3(index) {
    if (cardContent[index] == undefined) {
      sketchCard.overrides.find(function (override) {
        return override.id === idCombiner(cardArchitecture.subcard.id[index], cardArchitecture.subcard.type);
      }).value = "";
    } else {
      if (cardContent[index].title == undefined) {
        sketchCard.overrides.find(function (override) {
          return override.id === idCombiner([cardArchitecture.subcard.id[index], cardArchitecture.subcard.title.id], cardArchitecture.subcard.title.type);
        }).value = "";
      } else {
        sketchCard.overrides.find(function (override) {
          return override.id === idCombiner([cardArchitecture.subcard.id[index], cardArchitecture.subcard.title.id, cardArchitecture.subcard.title.text.id], cardArchitecture.subcard.title.text.type);
        }).value = cardContent[index].title;
      }

      if (cardContent[index].content == undefined) {
        sketchCard.overrides.find(function (override) {
          return override.id === idCombiner([cardArchitecture.subcard.id[index], cardArchitecture.subcard.content.id], cardArchitecture.subcard.content.type);
        }).value = "";
      } else {
        sketchCard.overrides.find(function (override) {
          return override.id === idCombiner([cardArchitecture.subcard.id[index], cardArchitecture.subcard.content.id, cardArchitecture.subcard.content.text.id], cardArchitecture.subcard.content.text.type);
        }).value = cardContent[index].content;
      }
    }
  };

  for (var index = 0; index < cardArchitecture.subcard.id.length; index++) {
    _loop3(index);
  }
}

function titleGenerator(sketchCard, cardTitle) {
  cardTitle == "" ? sketchCard.overrides.find(function (override) {
    return override.id === idCombiner([cardArchitecture.cardTitle.id], cardArchitecture.cardTitle.type);
  }).value = "" : sketchCard.overrides.find(function (override) {
    return override.id === idCombiner([cardArchitecture.cardTitle.id, cardArchitecture.cardTitle.title.id, cardArchitecture.cardTitle.title.text.id], cardArchitecture.cardTitle.title.text.type);
  }).value = cardTitle;
}

function loadJSON() {
  var openPanel = NSOpenPanel.openPanel();
  openPanel.setTitle("Choose a JSON File");
  openPanel.setCanCreateDirectories = false;
  openPanel.setCanChooseFiles = true;
  var fileTypes = ["json"];
  var openPanelButtonPressed = openPanel.runModalForDirectory_file_types_(nil, nil, fileTypes);

  if (openPanelButtonPressed == NSFileHandlingPanelOKButton) {
    var filePath = openPanel.URL().path();
    var fwJSON = JSON.parse(NSString.stringWithContentsOfFile(filePath));
  } else {
    var fwJSON = false;
  }

  return fwJSON;
}

function tileLayer(context, document) {
  for (var e = 0; e < 4; e++) {
    var selection = [];

    for (var index = e; index < context.length; index += 4) {
      selection.push(context[index]);
    }

    if (selection.length < 2) {// doc.showMessage("Please select more than 2 layers.");
    } else {
      var gap = 39;
      var layers = [];
      var pageIndex = 0;
      var yPos = JSON.parse(JSON.stringify(gap));

      for (var i = 0; i < selection.length; i++) {
        var selectionIndex = i,
            x = selection[i].frame.x,
            y = selection[i].frame.y,
            w = selection[i].frame.width,
            h = selection[i].frame.height;
        yPos = yPos + h + gap;

        if (yPos >= 1191) {
          yPos = 0;
          pageIndex++;
        }

        layers.push({
          index: selectionIndex,
          x: x,
          y: y,
          w: w,
          h: h,
          pageIndex: pageIndex
        });
      }

      for (var i = 1; i < layers.length; i++) {
        if (layers[i].pageIndex > artboardIndex) {
          getNewArtboard(document);
        }

        if (layers[i].pageIndex == layers[i - 1].pageIndex) {
          layers[i].y = layers[i - 1].y + layers[i - 1].h + gap;
          selection[layers[i].index].frame.y = layers[i].y;
        } else {
          layers[i].y = gap;
          selection[layers[i].index].frame.y = layers[i].y;
        }

        if (layers[i].pageIndex != 0) {
          document.pages.find(function (page) {
            return page.name == "Sort-It";
          }).layers[layers[i].pageIndex].layers.push(selection[layers[i].index]);
        }
      }
    }
  }
}

function getNewArtboard(document) {
  artboardIndex++;
  var newArtboart = new sketch__WEBPACK_IMPORTED_MODULE_0__["Artboard"]({
    name: "A2",
    // flowStartPoint: true,   1684+40
    frame: {
      height: 1191,
      width: 1684,
      x: 1724 * artboardIndex,
      y: 0
    }
  });
  document.pages.find(function (page) {
    return page.name == "Sort-It";
  }).layers.push(newArtboart);
  return newArtboart;
}

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ })

/******/ });
    if (key === 'default' && typeof exports === 'function') {
      exports(context);
    } else if (typeof exports[key] !== 'function') {
      throw new Error('Missing export named "' + key + '". Your command should contain something like `export function " + key +"() {}`.');
    } else {
      exports[key](context);
    }
  } catch (err) {
    if (typeof process !== 'undefined' && process.listenerCount && process.listenerCount('uncaughtException')) {
      process.emit("uncaughtException", err, "uncaughtException");
    } else {
      throw err
    }
  }
}
globalThis['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=__my-command.js.map