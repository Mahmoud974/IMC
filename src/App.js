import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    //Selector
    const inputPoids = document.querySelector("#poids");
    const inputTaille = document.querySelector("#taille");
    const submit = document.querySelector("form");
    const indice = document.querySelector(".indice");
    let choixMultiple;

    //Formule
    let poids;
    let taille;
    let tailleEnCentimetre = taille / 100;

    const styleMeans = (nbre, colorBg, colorText, borderR) => {
      choixMultiple = document.querySelector(`ul :nth-child(${nbre})`);
      choixMultiple.style.background = `${colorBg}`;
      choixMultiple.style.color = `${colorText}`;
      choixMultiple.style.borderRadius = `${borderR}`;
    };

    inputTaille.addEventListener("input", e => {
      tailleEnCentimetre = parseFloat(e.target.value) / 100;
    });
    inputPoids.addEventListener("input", e => {
      poids = parseInt(e.target.value);
    });
    submit.addEventListener("submit", e => {
      e.preventDefault();

      let imc = (poids / Math.pow(tailleEnCentimetre, 2)).toFixed(2);
      indice.textContent = parseFloat(imc);
      // if (imc < 18.5) return styleMeans(1, "#f99e16", "#fff", "3px");
      // if (imc >= 18.5 && imc <= 25)
      //   return styleMeans(2, "#188753", "#fff", "3px");
      // if (imc >= 25 && imc <= 30)
      //   return styleMeans(3, "#f99e16", "#fff", "3px");
      // if (imc >= 30 && imc <= 35) return styleMeans(4, "red", "#fff", "3px");
      // if (imc >= 35 && imc <= 40) return styleMeans(5, "red", "#fff", "3px");
      // if (imc > 40) return styleMeans(6, "red", "#fff", "3px");
    });
  }, []);

  let color = `indice display-6 fw-bolder text-success `;
  return (
    <>
      <div className="container w-50">
        <div className="mx-auto ">
          <div className="container">
            <div className="row">
              <h1 className="text-uppercase fw-bolder text-success ">
                Calculer mon imc
              </h1>
              <div className="col py-5">
                <form action="FORM ">
                  <input
                    type="number"
                    // step="0.01"
                    min="0"
                    max="500"
                    name="taille"
                    id="taille"
                    placeholder="cm"
                  />
                  <label htmlFor=""></label>
                  <input
                    type="number"
                    name="poids"
                    id="poids"
                    placeholder="kg"
                  />

                  <button type="submit" className="btn btn-success w-50">
                    Calculer
                  </button>
                </form>
              </div>
              <div className="col py-5">
                <h2 className={color}>
                  0 <br />
                </h2>
                <p className="">VOTRE IMC</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row text-center">
            <h2 className={color} id="interpretation mb-2">
              Interpretation de <br />
              masse corporelle
            </h2>
            <ul className="fw-bolder">
              <li>moins 18,5 Insuffisance pondérale</li>
              <li>18,5 à 25 Corpulence normale</li>
              <li>25 à 30 Surpoids</li>
              <li>30 à 35 Obésité modérée</li>
              <li>35 à 40 Obésité sévère</li>
              <li>plus 40 Obésité morbide</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
