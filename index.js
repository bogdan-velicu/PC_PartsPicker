const express = require("express");
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const ejs = require("ejs");

app = express();
console.log("Folder proiect", __dirname);
console.log("Cale fisier", __filename);
console.log("Director de lucru", process.cwd());

app.set("view engine", "ejs");

app.use("/resurse", express.static(__dirname + "/resurse"));

// Galerie
const galleryJson = require("./galerie.json");

const getCurrentHour = () => {
  const now = new Date();
  return now.getHours();
};

const filterImagesByTime = (images) => {
  const currentHour = getCurrentHour();
  return images.filter((image) => {
    return image.intervale_ore.some(
      ([start, end]) => currentHour >= start && currentHour <= end,
    );
  });
};

const prepareImages = (images) => {
  return images.map((image, index) => {
    return {
      ...image,
      index: (index + 1).toString().padStart(2, "0"),
      url: path.join(galleryJson.cale_galerie, image.cale_relativa),
    };
  });
};

const resizeImage = async (imagePath, width, outputPath) => {
  try {
    await sharp(imagePath).resize({ width }).toFile(outputPath);
  } catch (error) {
    console.error("Error resizing image:", error);
  }
};

galleryJson.imagini.forEach((image) => {
  const fullImagePath = path.join(
    __dirname,
    galleryJson.cale_galerie,
    image.cale_relativa,
  );

  // Create small version
  const smallImagePath = fullImagePath.replace(".jpg", `-small.jpg`);
  if (!fs.existsSync(smallImagePath)) {
    resizeImage(fullImagePath, 300, smallImagePath);
  }

  // Create medium version
  // const mediumImagePath = fullImagePath.replace(".jpg", `-medium.jpg`);
  // if (!fs.existsSync(mediumImagePath)) {
  //   resizeImage(fullImagePath, 300, mediumImagePath);
  // }
});
// End Galerie

app.get(["/", "/index", "/home"], function (req, res) {
  const images = filterImagesByTime(galleryJson.imagini);
  const preparedImages = prepareImages(images);
  res.render("pagini/index", { images: preparedImages });
});

app.get("/galerie", function (req, res) {
  const images = prepareImages(galleryJson.imagini);
  const preparedImages = prepareImages(images);
  res.render("pagini/galerie_pagina", { images: preparedImages });
});

app.get("/api/galerie_json", function (req, res) {
  res.json(galleryJson);
});

app.get("/cerere", function (req, res) {
  res.send("<b>Hello</n> <span style='color:red'>World</span>");
});

app.get("/data", function (req, res) {
  res.write("" + new Date());
  res.end();
});

app.get("/suma/:a/:b", function (req, res) {
  var suma = parseInt(req.params.a) + parseInt(req.params.b);
  res.send("" + suma);
});

app.get("/*", function (req, res) {
  console.log(req.url);
  res.send("pagini" + req.url),
    function (err, rezHtml) {
      console.log("Pagina", rezHtml);
      console.log("Eroare", rezHtml);
      res.send(rezHtml);
    };
});

app.listen(8080);
console.log("Serverul a pornit");
console.log("http://localhost:8080/");
