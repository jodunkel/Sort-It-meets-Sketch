import { Document, UI } from "sketch";

const cardArchitecture = {
  cardTitle: {
    id: "224F17A7-37BA-4C63-8FB1-48B37E5F3EBA",
    type: "symbolID",
    title: {
      id: "E668F187-0C7B-49F1-A9BE-3DD7BC60CA1C",
      type: "symbolID",
      text: { id: "C767CA97-276D-4799-B23C-CB9DA65E2A3B", type: "stringValue" }
    }
  },
  subcard: {
    id: [
      "FC7AFE5D-6784-412D-AA59-0CD04203AF89",
      "B4A0BA16-103F-4084-B060-5C8568F0D060",
      "1100D78C-F9DC-4484-8E3C-1717651CB9C5",
      "54190B67-A4B6-40BC-ACEE-04C95DDCBF6B",
      "73173D13-A851-41F3-A53D-8C5654C6E172",
      "37FAB9B3-C705-4391-9AB0-632499808AFF"
    ],
    type: "symbolID",
    content: {
      id: "CAFA59BC-FB6D-49B3-AF1B-63D56911D62C",
      type: "symbolID",
      text: { id: "E0D94CA4-7624-4B01-B47B-25700F51D7B8", type: "stringValue" }
    },
    title: {
      id: "27922DC4-D7A9-45E3-B840-22C69BCF047C",
      type: "symbolID",
      text: { id: "C767CA97-276D-4799-B23C-CB9DA65E2A3B", type: "stringValue" }
    }
  },
  categoriesGroup: {
    id: "7948EBBE-E43B-42E4-8AB2-992A43792EC0",
    type: "symbolID",
    categories: {
      id: [
        "0FE9DD91-A17D-4906-8739-689B27B7C006",
        "68E32435-0BE7-46E9-8CBA-BD7427B5A501",
        "AB2E3712-55C4-4198-B755-ED242F2BDED8",
        "369F3B7D-FBFA-4E58-BE9D-52BD9958EB57",
        "9C153CF4-A26E-45DB-9F01-314F8E589EAD",
        "B122D53C-5DF3-494D-A6D0-6746C8FB275E"
      ],
      type: "symbolID",
      tags: {
        id: [
          "87FB5A5C-FB0C-47DD-9030-AD6BA6799DAA",
          "4CEE0DA3-18E4-4FF3-A938-E4A4063C0D31",
          "26D1061E-09F1-4E7F-9707-D623797112AF",
          "2A3EBFE0-B8B5-4B4F-8667-3D27DF18E835",
          "316FA649-A5FF-4D17-A020-C3D117ABC8B5",
          "EA2D6FC6-3437-418E-BCC0-98100C73EB2C",
          "5B3CC679-5A5C-441D-AECF-45518D9BE713",
          "3AA957B4-0D31-455C-AC92-3B77CCFE3826",
          "D6956B0D-FAF4-482F-BA48-A00ED1336DC7"
        ],
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

export default function() {
  const path = process.cwd();

  Document.open(
    path.concat("/Contents/Resources/Sort-It.sketch"),
    (err, document) => {
      if (err) {
        console.error(err);
        UI.alert("Oops something went wrong 😬");
        document.close();
        return;
        // oh no, we failed to open the document
      }
      UI.alert(
        "Choose your Sort-It File",
        "It must be a JSON file exported from Sort-It!"
      );
      let sortItData = loadJSON();
      if (sortItData == false || sortItData == undefined) {
        UI.alert(
          "Oops something went wrong 😬",
          "You must select a Sort-It file to continue. If you have selected a file, something has gone wrong."
        );
        document.close();
        return;
      }
      // let sortItData = data;
      controler(document, sortItData);
      tileLayer(
        document.pages.find(page => page.name == "Sort-It").layers[0].layers
      );
      document.save(
        require("path")
          .join(require("os").homedir(), "Desktop")
          .concat("/sort-it.sketch"),
        {
          saveMode: Document.SaveMode.SaveAs
        }
      );
      UI.message("The file has been saved to your desktop. 💾 ");
    }
  );
}

function idCombiner(ids, type) {
  const newId = [];
  typeof ids === "object" ? newId.push(ids.join("/")) : newId.push(ids);
  return type === undefined ? newId[0] : (newId.push(type), newId.join("_"));
}

function categorieGenerator(sketchCard, categories) {
  const overrideValues = [];

  if (categories.length == 0) {
    const ids = [];
    ids.push(cardArchitecture.categoriesGroup.id);
    sketchCard.overrides.find(
      override =>
        override.id === idCombiner(ids, cardArchitecture.categoriesGroup.type)
    ).value = "";
  } else {
    for (
      let i = 0;
      i < cardArchitecture.categoriesGroup.categories.id.length;
      i++
    ) {
      const ids = [];
      categories[i] === undefined ||
      categories[i].label === "SYSTEM-ATTRIBUTE-display-as"
        ? (ids.push(cardArchitecture.categoriesGroup.id),
          ids.push(cardArchitecture.categoriesGroup.categories.id[i]),
          (sketchCard.overrides.find(
            override =>
              override.id ===
              idCombiner(ids, cardArchitecture.categoriesGroup.categories.type)
          ).value = ""))
        : (categories[i].label === "SYSTEM-ATTRIBUTE-empty-category"
            ? (sketchCard.overrides.find(
                override =>
                  override.id ===
                  idCombiner(
                    [
                      cardArchitecture.categoriesGroup.id,
                      cardArchitecture.categoriesGroup.categories.id[i],
                      cardArchitecture.categoriesGroup.categories.categorie.id
                    ],
                    cardArchitecture.categoriesGroup.categories.categorie.type
                  )
              ).value = "")
            : (ids.push(cardArchitecture.categoriesGroup.id),
              ids.push(cardArchitecture.categoriesGroup.categories.id[i]),
              ids.push(
                cardArchitecture.categoriesGroup.categories.categorie.id
              ),
              ids.push(
                cardArchitecture.categoriesGroup.categories.categorie.text.id
              ),
              (sketchCard.overrides.find(
                override =>
                  override.id ===
                  idCombiner(
                    ids,
                    cardArchitecture.categoriesGroup.categories.categorie.text
                      .type
                  )
              ).value = categories[i].label)),
          tagGenerator(
            sketchCard,
            categories[i].value,
            cardArchitecture.categoriesGroup.categories.id[i]
          ));
    }
  }
  return overrideValues;
}

function tagGenerator(sketchCard, tags, categorieID) {
  for (
    let i = 0;
    i < cardArchitecture.categoriesGroup.categories.tags.id.length;
    i++
  ) {
    const ids = [];
    tags[i] === undefined
      ? (ids.push(cardArchitecture.categoriesGroup.id),
        ids.push(categorieID),
        ids.push(cardArchitecture.categoriesGroup.categories.tags.id[i]),
        (sketchCard.overrides.find(
          override =>
            override.id ===
            idCombiner(ids, cardArchitecture.categoriesGroup.categories.type)
        ).value = ""))
      : (ids.push(cardArchitecture.categoriesGroup.id),
        ids.push(categorieID),
        ids.push(cardArchitecture.categoriesGroup.categories.tags.id[i]),
        ids.push(cardArchitecture.categoriesGroup.categories.tags.title.id),
        (sketchCard.overrides.find(
          override =>
            override.id ===
            idCombiner(
              ids,
              cardArchitecture.categoriesGroup.categories.tags.title.type
            )
        ).value = tags[i]));
  }
}

function controler(document, sortItData) {
  let symb = document
    .getSymbols()
    .find(symbols => symbols.name === "card/default");

  document.pages.find(page => page.name == "Sort-It").layers[0].layers = [];
  let x = 40;
  let y = 40;
  let sortItCOrD = sortItData["card-views"].find(
    c =>
      c.title === "SYSTEM-ATTRIBUTE-root" ||
      c.title === "SYSTEM-ATTRIBUTE-default"
  ).content; //   "SYSTEM-ATTRIBUTE-root"   "SYSTEM-ATTRIBUTE-default"
  let sortItCards = [];
  sortItCOrD.map(cOrD =>
    cOrD.attributes.find(
      attribut => attribut.label == "SYSTEM-ATTRIBUTE-display-as"
    ).value[0] == "directory"
      ? (sortItCards = sortItCards.concat(cOrD.content))
      : (sortItCards = sortItCards.concat(cOrD))
  );
  for (let index = 0; index < sortItCards.length; index++) {
    const newSymb = symb.createNewInstance();
    newSymb.frame.x = x;
    newSymb.frame.y = y;
    document.pages
      .find(page => page.name == "Sort-It")
      .layers[0].layers.push(newSymb);
    x < 874 ? (x += 405) : ((y += 284), (x = 40));
    giveOverrideValue(
      document.pages.find(page => page.name == "Sort-It").layers[0].layers[
        index
      ],
      sortItCards[index]
    );
    categorieGenerator(
      document.pages.find(page => page.name == "Sort-It").layers[0].layers[
        index
      ],
      sortItCards[index].attributes
    );
    document.pages
      .find(page => page.name == "Sort-It")
      .layers[0].layers[index].resizeWithSmartLayout();
  }
}

function giveOverrideValue(sketchCard, sortItCard) {
  contentGenerator(sketchCard, sortItCard.content);
  titleGenerator(sketchCard, sortItCard.title);
}

function contentGenerator(sketchCard, cardContent) {
  for (let index = 0; index < cardArchitecture.subcard.id.length; index++) {
    if (cardContent[index] == undefined) {
      sketchCard.overrides.find(
        override =>
          override.id ===
          idCombiner(
            cardArchitecture.subcard.id[index],
            cardArchitecture.subcard.type
          )
      ).value = "";
    } else {
      if (cardContent[index].title == undefined) {
        sketchCard.overrides.find(
          override =>
            override.id ===
            idCombiner(
              [
                cardArchitecture.subcard.id[index],
                cardArchitecture.subcard.title.id
              ],
              cardArchitecture.subcard.title.type
            )
        ).value = "";
      } else {
        sketchCard.overrides.find(
          override =>
            override.id ===
            idCombiner(
              [
                cardArchitecture.subcard.id[index],
                cardArchitecture.subcard.title.id,
                cardArchitecture.subcard.title.text.id
              ],
              cardArchitecture.subcard.title.text.type
            )
        ).value = cardContent[index].title;
      }
      if (cardContent[index].content == undefined) {
        sketchCard.overrides.find(
          override =>
            override.id ===
            idCombiner(
              [
                cardArchitecture.subcard.id[index],
                cardArchitecture.subcard.content.id
              ],
              cardArchitecture.subcard.content.type
            )
        ).value = "";
      } else {
        sketchCard.overrides.find(
          override =>
            override.id ===
            idCombiner(
              [
                cardArchitecture.subcard.id[index],
                cardArchitecture.subcard.content.id,
                cardArchitecture.subcard.content.text.id
              ],
              cardArchitecture.subcard.content.text.type
            )
        ).value = cardContent[index].content;
      }
    }
  }
}

function titleGenerator(sketchCard, cardTitle) {
  cardTitle == ""
    ? (sketchCard.overrides.find(
        override =>
          override.id === "224F17A7-37BA-4C63-8FB1-48B37E5F3EBA_symbolID"
      ).value = "")
    : (sketchCard.overrides.find(
        override =>
          override.id ===
          "224F17A7-37BA-4C63-8FB1-48B37E5F3EBA/E668F187-0C7B-49F1-A9BE-3DD7BC60CA1C/C767CA97-276D-4799-B23C-CB9DA65E2A3B_stringValue"
      ).value = cardTitle);
}

function loadJSON() {
  var openPanel = NSOpenPanel.openPanel();
  openPanel.setTitle("Choose a JSON File");
  openPanel.setCanCreateDirectories = false;
  openPanel.setCanChooseFiles = true;

  var fileTypes = ["json"];
  var openPanelButtonPressed = openPanel.runModalForDirectory_file_types_(
    nil,
    nil,
    fileTypes
  );

  if (openPanelButtonPressed == NSFileHandlingPanelOKButton) {
    var filePath = openPanel.URL().path();
    var fwJSON = JSON.parse(NSString.stringWithContentsOfFile(filePath));
  } else {
    var fwJSON = false;
  }

  return fwJSON;
}

function tileLayer(context) {
  // var preferences = require("../modules/Preferences");

  // var version = parseFloat(require("sketch").version.sketch);
  // var UI = require("sketch/ui");
  // var doc = context.document;
  for (let e = 0; e < 4; e++) {
    var selection = [];
    for (let index = e; index < context.length; index += 4) {
      // for (let i = 0; i < context.length; i++) {
      //   const element = array[i];
      // }
      selection.push(context[index]);
    }
    // var selection = context.selection;
    if (selection.length < 2) {
      // doc.showMessage("Please select more than 2 layers.");
    } else {
      // var defaultGap = preferences.get("gap") || "0";
      var gap = 39;
      // if (version >= 53) {
      //   UI.getInputFromUser(
      //     "Tile Objects",
      //     {
      //       initialValue: defaultGap,
      //       description: "The gap between two layers. (px)"
      //     },
      //     function(err, value) {
      //       if (err) return;
      //       gap = value;
      //     }
      //   );
      // } else {
      //   gap = UI.getStringFromUser(
      //     "The gap between two layers. (px)",
      //     defaultGap
      //   );
      // }
      // if (!gap) return;

      // gap = parseInt(gap);
      // preferences.set("gap", gap);

      // Tile by position x/y
      // if (orientation == "posx" || orientation == "posy") {
      var layers = [];
      for (var i = 0; i < selection.length; i++) {
        var selectionIndex = i,
          x = selection[i].frame.x,
          y = selection[i].frame.y,
          w = selection[i].frame.width,
          h = selection[i].frame.height;
        layers.push({
          index: selectionIndex,
          x: x,
          y: y,
          w: w,
          h: h
        });
      }

      // if (orientation == "posx") {
      //   layers.sort(function(a, b) {
      //     return a.x - b.x;
      //   });
      //   for (var i = 1; i < layers.length; i++) {
      //     layers[i].x = layers[i - 1].x + layers[i - 1].w + gap;
      //     selection[layers[i].index].frame.setX(layers[i].x);
      //   }
      // }

      // if (orientation == "posy") {
      layers.sort(function(a, b) {
        return a.y - b.y;
      });
      for (var i = 1; i < layers.length; i++) {
        layers[i].y = layers[i - 1].y + layers[i - 1].h + gap;
        selection[layers[i].index].frame.y = layers[i].y;
      }

      // }
      // }

      // // Tile horizontally by index
      // if (orientation == "horizontallyByIndex") {
      //     for (var i = 1; i < selection.count(); i ++) {
      //         selection.objectAtIndex(i).frame().setX(
      //             selection.objectAtIndex(i-1).frame().x() + selection.objectAtIndex(i-1).frame().width() + gap
      //         );
      //     }
      // }

      // // Tile vertically by index
      // if (orientation == "verticallyByIndex") {
      //     for (var i = 1; i < selection.count(); i ++) {
      //         selection.objectAtIndex(i).frame().setY(
      //             selection.objectAtIndex(i-1).frame().y() + selection.objectAtIndex(i-1).frame().height() + gap
      //         );
      //     }
      // }

      // // Resize group to fit children
      // var loopSelection = selection.objectEnumerator();
      // var selectedLayer;
      // while (selectedLayer = loopSelection.nextObject()) {
      //     if (selectedLayer.parentGroup().class() == "MSLayerGroup") {
      //         if (MSApplicationMetadata.metadata().appVersion >= 53) {
      //             selectedLayer.parentGroup().fixGeometryWithOptions(1);
      //         } else {
      //             selectedLayer.parentGroup().resizeToFitChildrenWithOption(1);
      //         }
      //     }
      // }
    }
  }
}
