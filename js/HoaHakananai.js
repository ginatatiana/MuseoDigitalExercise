class Hoa{
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
      let piece5 = new Piece("/img/HoaHakananai.jpg", "La estatua de piedra monolítica es otra de las grandes atracciones del British Museum. Construida en Rapa Nui (Chile) entre los años 1100-1600, fue robada por miembros de la Royal Navy a mediados del siglo XIX. Se cree que el moai de cuatro toneladas es la representación de antepasados difuntos de los polinesios. Por esas razones simbólicas y espirituales, los isleños han pedido un intercambio a Reino Unido: el original por una copia del mismo tamaño.");
      this.pieces.push( piece5 );
    }
  }

  let hoa = new Hoa();
  hoa.initializeGallery();

const artPiecesHoa = hoa.getPieces();

function showInfoByClickButtonHoa(){
  alert( artPiecesHoa[0].getDescription() )
};
