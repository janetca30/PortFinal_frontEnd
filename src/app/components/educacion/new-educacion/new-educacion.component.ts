import { Component, OnInit } from '@angular/core';
import { EducacionService } from '../../../service/educacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { ImageService } from 'src/app/service/image.service';
import { Storage, getDownloadURL, list, ref} from '@angular/fire/storage';


@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  tituloE: string;
  descripcionE: string;
  imgE: string;
  anioE: string;
  educacion : Educacion = null; 
  imageUrl: string;
  name: string;

  constructor(private educacionService: EducacionService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    public imageService: ImageService,
    private storage: Storage
    ) { }

  ngOnInit(): void {/*
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.detail(id).subscribe(
      data =>{
        this.educacion = data;
        this.getImages(this.educacion.imgE);
      }, err =>{
        alert("Error al modificar educacion");
        this.router.navigate(['']);
      }
    )*/
  }

  onCreate(): void {
    const educacion = new Educacion(this.tituloE, this.descripcionE, this.imgE, this.anioE);
    const date = new Date(this.anioE)
    educacion.anioE =  `${date.getFullYear()}`;
    this.educacionService.save(educacion).subscribe(
      data=>{
        alert("Educacion añadida");
        this.router.navigate(['']);
      },err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }/*
  uploadImage($event: any) {
    const timestamp = new Date().getTime(); // obtener el timestamp actual
    const name = `educacion_${this.name}_${timestamp}`; // agregar el timestamp al nombre del archivo
    this.imageService.uploadImage($event, name);
  }
  
  

  getImages(name: string) {
    const imagesRef = ref(this.storage, `imagen/${name}`);
    list(imagesRef)
      .then(async response => {
        for(let item of response.items){
          this.imageUrl = await getDownloadURL(item);
        }
      })    
      .catch(error => console.log(error))      
  }

*/



}
