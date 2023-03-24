import { Component, OnInit } from '@angular/core';
import { EducacionService } from '../../../service/educacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { ImageService } from 'src/app/service/image.service';
import { getDownloadURL, list, ref } from '@angular/fire/storage';
import { AngularFireStorage } from '@angular/fire/storage';

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
    private storage: AngularFireStorage
    ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.descripcionE, this.anioE, this.imgE, this.tituloE);
    this.educacionService.save(educacion).subscribe(
      data=>{
        alert("Educacion añadida");
        this.router.navigate(['']);
      },err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
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

}
