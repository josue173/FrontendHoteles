export class Habitaciones {
  constructor(
    public _id: String,
    public nombreHabitacion: String,
    public estado: String,
    public descripcion: String,
    public precio: Number,
    public imagen: String,
    public hotel: String
  ) {}
}
