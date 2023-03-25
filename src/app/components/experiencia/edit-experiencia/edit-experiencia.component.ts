import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../../../model/experiencia';
import { ExperienciaService } from '../../../service/experiencia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/service/image.service';
import { Storage, getDownloadURL, list, ref } from '@angular/fire/storage';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit{
  expe : Experiencia = null;
  imageUrl: string;
  name: string;

  constructor(private experienciaService: ExperienciaService, 
    private activatedRouter: ActivatedRoute, 
    public imageService: ImageService,
    private storage: Storage,
    private router: Router){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.detail(id).subscribe(
      data =>{
        this.expe = data;
        this.getImages(this.expe.imgE);
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }


  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.expe.imgE = this.imageService.url;
    this.experienciaService.update(id, this.expe).subscribe(
      data => {
        this.router.navigate(['']);
      },err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
    console.log(this.expe);
    
  }
  
  uploadImage($event: any) {
    const timestamp = new Date().getTime(); // obtener el timestamp actual
    const name = `experiencia_${this.name}_${timestamp}`; // agregar el timestamp al nombre del archivo
    this.imageService.uploadImage($event, name);
  }


  

  getImages(name: string) {
    const imagesRef = ref(this.storage, `imagen`);
    list(imagesRef)
      .then(async response => {
        for(let item of response.items){
          this.imageUrl = await getDownloadURL(item);
        }
      })    
      .catch(error => console.log(error))      
  }
}

