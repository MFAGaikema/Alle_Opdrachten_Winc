const huiswerkMaken = (vak, callback) => {
    console.log(`ok, ok, ik ga nu mijn ${vak} huiswerken maken.`);
    setTimeout(() => {
    callback();
    }, 2000);
};

const klaarMetHuiswerk = () => {
    console.log("kijk, ik ben klaar met mijn huiswerk!");
};

huiswerkMaken("wiskunde", klaarMetHuiswerk)

const eerste = (callback) => {
    console.log("dit zal als eerste komen");
    setTimeout(() => {
        console.log("dit verschijnt ook na 5 sec")
        callback();
    }, 5000);
}

const tweede = () => {
    console.log("dit moet na 5 sec verschijnen");
}

eerste(tweede);