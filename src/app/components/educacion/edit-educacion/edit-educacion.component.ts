import { Component, OnInit } from '@angular/core';
import { Educacion } from '../../../model/educacion';
import { EducacionService } from '../../../service/educacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/service/image.service';
import { Storage, getDownloadURL, list, ref} from '@angular/fire/storage';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educacion : Educacion = null; 
  imageUrl: string;
  name: string;

  constructor(private educacionService: EducacionService, 
    private activatedRouter: ActivatedRoute, 
    private router: Router,
    public imageService: ImageService,
    private storage: Storage
    ){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.detail(id).subscribe(
      data =>{
        this.educacion = data;
        this.getImages(this.educacion.imgE);
      }, err =>{
        alert("Error al modificar educacion");
        this.router.navigate(['']);
      }
    )
  }
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacion.imgE = this.imageService.url;
    this.educacionService.update(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['']);
      },err =>{
        alert("Error al modificar educacion ");
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
 