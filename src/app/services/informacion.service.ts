import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

@Injectable()
export class InformacionService {

  info:any = {};
  cargada:boolean = false;
  cargadaOfertas:boolean = false;
  ofertas:any[] =[];


  constructor(public http:Http) {

      this.carga_info();
      this.carga_ofertas();


    }

    public carga_info(){

      this.http.get("assets/data/info.pagina.json")
        .subscribe( data =>{
          console.log(data.json());
          this.cargada = true;
          this.info = data.json();
        })
    }

    public carga_ofertas(){

      this.http.get("https://flymate-v1.firebaseio.com/Oferta.json")
        .subscribe( data =>{
          console.log(data.json());
          this.cargadaOfertas = true;
          this.ofertas = data.json();
        })

    }

}
