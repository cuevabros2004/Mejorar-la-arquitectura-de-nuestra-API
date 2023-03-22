export default class ChatDto{
    constructor({_id, author, fecha, text}){
        this._id = _id;
        this.author = author;
        this.fecha = fecha;
        this.text = text;
    }
}