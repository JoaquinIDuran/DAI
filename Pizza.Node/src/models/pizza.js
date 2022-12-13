 export class Pizza {
     id;
     nombre;
     libreGluten;
     importe;
     descripcion;
     Descuento;
     constructor(nombre, libreGluten, importe, descripcion,Descuento){
          this.nombre = nombre;
          this.libreGluten = libreGluten;
         this.importe = importe;
         this.descripcion = descripcion;
         this.Descuento = Descuento;
      }
 }