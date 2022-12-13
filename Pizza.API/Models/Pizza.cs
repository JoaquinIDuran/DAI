using System;

namespace Pizza.API.Models {
    public class Pizza {
        public int      Id              { get; set; }
        public string   Nombre          { get; set; }
        public bool     LibreGluten     { get; set; }
        public float    Importe         { get; set; }
        public string   Descripcion     { get; set; }
        public int      Descuento       { get; set; }
    }
}