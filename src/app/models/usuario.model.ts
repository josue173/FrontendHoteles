export class Usuario {
  constructor(
    public _id: String,
    public usuario: String,
    public email: String,
    public contrasena: String,
    public estado: String,
    public rol: String,
    public hotelHospedado: String
  ) {}
}
