const { model } = require("mongoose");

const categories = [
        {
        name: "Mellicent",
        description: "incentivize open-source partnerships",
        image: "https://robohash.org/autnisisuscipit.png?size=50x50&set=set1",
        attributes: [
            { key: "type", value: ["soft back", "hard back", "digital", "audio book"] },
        ],
      }, 
      {
        name: "Dore",
        description: "generate transparent synergies",
        image: "https://robohash.org/occaecatiquiadignissimos.png?size=50x50&set=set1"
      }, 
      {
        name: "Orsa",
        description: "target strategic niches",
        image: "https://robohash.org/etdoloribuset.png?size=50x50&set=set1"
      }, 
      {
        name: "Irene",
        description: "visualize sexy supply-chains",
        image: "https://robohash.org/omnisnihillibero.png?size=50x50&set=set1"
      }, 
      {
        name: "Jojo",
        description: "transform e-business schemas",
        image: "https://robohash.org/consequatureadolor.png?size=50x50&set=set1"
      }, 
      {
        name: "Farley",
        description: "harness world-class communities",
        image: "https://robohash.org/porroquassint.png?size=50x50&set=set1"
      }, 
      {
        name: "Colette",
        description: "embrace enterprise users",
        image: "https://robohash.org/quiavoluptateseligendi.png?size=50x50&set=set1"
      }, 
      {
        name: "Marigold",
        description: "whiteboard turn-key technologies",
        image: "https://robohash.org/autemeiusvelit.png?size=50x50&set=set1"
      }, 
      {
        name: "Sephira",
        description: "monetize efficient vortals",
        image: "https://robohash.org/teneturquaequibusdam.png?size=50x50&set=set1"
      }, 
      {
        name: "Lynda",
        description: "brand killer convergence",
        image: "https://robohash.org/sintharumut.png?size=50x50&set=set1"
      }
    ];


    model.exports = categories;