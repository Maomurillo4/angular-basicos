import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    
    name: string = 'Aphelios';
    age: number = 24;

    get nombreCapitalizado(){
        return this.name.toUpperCase();
    }

    obtenerNombre(): string {
        return `${ this.name } - ${ this.age }`;
    }

    cambiarNombre(): void{
        this.name = 'Samira';
    }

    cambiarEdad():void{
        this.age = 30;
    }

}