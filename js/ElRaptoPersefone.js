class Elrapto{
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
      let piece2 = new Piece("./img/bustoNefertiti.jpg", "Retrato del artistaGian Lorenzo Bernini, Italia, 1622.Título original: Ratto di Proserpina Museo: Galería Borghese, Roma (Italia) Técnica: Escultura (225 cm.Perséfone, hija de Zeus y de Deméter en la mitología griega, fue raptada por Hades, dios de los infiernos. Por mucho que se resistió, nada pudo hacer para contener los deshonestos deseos del barbudo dios. La pobre chica se vio obligada a vivir con su secuestrador (Demeter la buscó por todos los confines del mundo, Zeus no tanto…) y al final, desarrollando un síndrome de Estocolmo, accedió a casarse con él.)");
      this.pieces.push( piece2 );
    }
  }

  let elrapto = new Elrapto();
  elrapto.initializeGallery();

const artPiecesRapto = elrapto.getPieces();

function showInfoByClickButtonRapto(){
  alert( artPiecesRapto[0].getDescription() )
};
