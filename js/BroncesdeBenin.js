class Bronces{
    constructor(){
      this.pieces = [];
    }
    getPieces(){
      return this.pieces
    }
    setPieces( pieces ){
      this.pieces = pieces;
    }
    initializeGallery(){
      let piece3 = new Piece("./img/broncesdeBenin.jpg", "Más de mil placas de bronce fueron talladas desde el siglo XIII en adelante para el palacio real del reino de Benin para glorificar a su rey divino y a su poderoso imperio. En 1897, las tropas británicas se apoderaron de buena parte de estos tesoros. Un buen puñado de ella siguen expuestas en el British Museum y son centro del debate de las repatriaciones por el contexto de su adquisición. Desde 1960, Nigeria lleva pidiendo que se las devuelvan.");
      this.pieces.push( piece3 );
    }
  }

  let bronces = new Bronces();
  bronces.initializeGallery();

const artPiecesBron = bronces.getPieces();

function showInfoByClickButtonBron(){
  alert( artPiecesBron[0].getDescription() )
};

