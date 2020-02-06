// import sketch from "sketch";
// import { Document, Shape, UI, Style, Page } from "sketch";
import { Document, UI } from "sketch";
// import sketchDom from "sketch/dom";
// import data from "./instruction-v2.json";

const cardArchitecture = {
  title: {
    id: "C767CA97-276D-4799-B23C-CB9DA65E2A3B",
    type: "stringValue"
  },
  content: {
    id: "E0D94CA4-7624-4B01-B47B-25700F51D7B8",
    type: "stringValue"
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
      // console.log(require("os").homedir());

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
        : (ids.push(cardArchitecture.categoriesGroup.id),
          ids.push(cardArchitecture.categoriesGroup.categories.id[i]),
          ids.push(cardArchitecture.categoriesGroup.categories.categorie.id),
          ids.push(
            cardArchitecture.categoriesGroup.categories.categorie.text.id
          ),
          (sketchCard.overrides.find(
            override =>
              override.id ===
              idCombiner(
                ids,
                cardArchitecture.categoriesGroup.categories.categorie.text.type
              )
          ).value = categories[i].label),
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
  // console.log(sortItData["card-views"].length);

  document.pages.find(page => page.name == "Sort-It").layers[0].layers = [];
  let x = 40;
  let y = 40;
  for (
    let index = 0;
    index <
    sortItData["card-views"].find(c => c.title === "SYSTEM-ATTRIBUTE-root")
      .content.length;
    index++
  ) {
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
      sortItData["card-views"].find(c => c.title === "SYSTEM-ATTRIBUTE-root")
        .content[index]
    );
    categorieGenerator(
      document.pages.find(page => page.name == "Sort-It").layers[0].layers[
        index
      ],
      sortItData["card-views"].find(c => c.title === "SYSTEM-ATTRIBUTE-root")
        .content[index].attributes
    );
    document.pages
      .find(page => page.name == "Sort-It")
      .layers[0].layers[index].resizeWithSmartLayout();
  }
}

function giveOverrideValue(sketchCard, sortItCard) {
  // Eventuell Text und Content noch in eigenes Symbol
  sketchCard.overrides.find(
    override =>
      override.id === "E0D94CA4-7624-4B01-B47B-25700F51D7B8_stringValue"
  ).value =
    sortItCard.content[0].content === "" ? " " : sortItCard.content[0].content;
  sketchCard.overrides.find(
    override =>
      override.id === "C767CA97-276D-4799-B23C-CB9DA65E2A3B_stringValue"
  ).value = sortItCard.title == "" ? " " : sortItCard.title;
  // sketchCard.overrides.find(
  //   override => override.id === "7948EBBE-E43B-42E4-8AB2-992A43792EC0_symbolID"
  // ).value = "";
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
