window.addEventListener("load", function () {
  document.getElementById("inp-pret").onchange = function () {
    document.getElementById("range-value").innerHTML = `${this.value}`;
  };
  document.getElementById("filtrare").addEventListener("click", function () {
    let inpNume = document
      .getElementById("inp-nume")
      .value.toLowerCase()
      .trim();

    // let vRadio = document.getElementsByName("gr_rad");
    // let inpCalorii;
    // for (let r of vRadio) {
    //   if (r.checked) {
    //     inpCalorii = r.value;
    //     break;
    //   }
    // }
    // let minCalorii, maxCalorii;
    // if (inpCalorii != "toate") {
    //   let aux = inpCalorii.split(":");
    //   minCalorii = parseInt(aux[0]);
    //   maxCalorii = parseInt(aux[1]);
    // }

    let inpPret = parseInt(document.getElementById("inp-pret").value);

    let inpCateg = document
      .getElementById("inp-categorie")
      .value.toLowerCase()
      .trim();
    produse = document.getElementsByClassName("produs");
    for (let produs of produse) {
      let valNume = produs
        .getElementsByClassName("val-nume")[0]
        .innerHTML.toLowerCase()
        .trim();
      let cond1 = valNume.includes(inpNume);

      // let valCalorii = parseInt(
      //   produs.getElementsByClassName("val-calorii")[0].innerHTML,
      // );
      let cond2 = true;
      // let cond2 =
      //   inpCalorii == "toate" ||
      //   (minCalorii <= valCalorii && valCalorii < maxCalorii);

      let valPret = parseFloat(
        produs.getElementsByClassName("val-pret")[0].innerHTML,
      );
      let cond3 = valPret <= inpPret;
      let valCateg = produs
        .getElementsByClassName("val-categorie")[0]
        .innerHTML.trim();
      let cond4 = inpCateg == "toate" || inpCateg == valCateg;

      if (cond1 && cond2 && cond3 && cond4) {
        produs.style.display = "block";
      } else {
        produs.style.display = "none";
      }
    }
  });
  document.getElementById("resetare").onclick = function () {
    document.getElementById("inp-nume").value = "";
    document.getElementById("inp-pret").value =
      document.getElementById("inp-pret").max;
    document.getElementById("range-value").innerHTML =
      document.getElementById("inp-pret").max;
    document.getElementById("inp-categorie").value = "toate";
    // document.getElementById("i_rad4").checked = true;
    var produse = document.getElementsByClassName("produs");
    // document.getElementById("infoRange").innerHTML = "(0)";
    for (let prod of produse) {
      prod.style.display = "block";
    }
  };
  function sorteaza(semn) {
    var produse = document.getElementsByClassName("produs");
    let v_produse = Array.from(produse);
    v_produse.sort(function (a, b) {
      let pret_a = parseInt(a.getElementsByClassName("val-pret")[0].innerHTML);
      let pret_b = parseInt(b.getElementsByClassName("val-pret")[0].innerHTML);
      if ((pret_a = pret_b)) {
        let nume_a = a.getElementsByClassName("val-nume")[0].innerHTML;
        let nume_b = b.getElementsByClassName("val-nume")[0].innerHTML;
        return semn * nume_a.localeCompare(nume_b);
      }
      return semn * (pret_a - pret_b);
    });
    console.log(v_produse);
    for (let prod of v_produse) {
      prod.parentNode.appendChild(prod);
    }
  }
  document.getElementById("sortCrescNume").onclick = function () {
    sorteaza(1);
  };
  document.getElementById("sortDescrescNume").onclick = function () {
    sorteaza(-1);
  };
  window.onkeydown = function (e) {
    if (e.key == "c" && e.shiftKey) {
      alert("hello");
      var suma = 0;
      var produse = document.getElementsByClassName("produs");
      for (let produs of produse) {
        var stil = getComputedStyle(produs);
        if (stil.display != "none") {
          suma += parseFloat(
            produs.getElementsByClassName("val-pret")[0].innerHTML,
          );
        }
      }
      if (!document.getElementById("par_suma")) {
        let p = document.createElement("p");
        p.innerHTML = suma;
        p.id = "par_suma";
        container = document.getElementById("produse-lista");
        container.insertBefore(p, container.children[0]);
        setTimeout(function () {
          var pgf = document.getElementById("par_suma");
          if (pgf) pgf.remove();
        }, 2000);
      }
    }
  };
});
