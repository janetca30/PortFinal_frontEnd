import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { ImageService } from 'src/app/service/image.service';
import { Storage, getDownloadURL, list, ref, uploadBytes} from '@angular/fire/storage';


@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit{
  proyecto: Proyecto = null;
  imageUrl: string;
  name: string;
  
  constructor(private proyectoService: ProyectoService, 
    private activatedRouter: ActivatedRoute,
    public imageService: ImageService,
    private storage: Storage,
    private router: Router){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.detail(id).subscribe(
      data =>{
        this.proyecto = data;
        this.getImages(this.proyecto.imgP);
      }, err =>{
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
  }


  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyecto.imgP = this.imageService.url;
    this.proyectoService.update(id, this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      },err =>{
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
    
  }

  uploadImage($event: any) {
    const timestamp = new Date().getTime(); // obtener el timestamp actual
    const name = `proyect_${this.name}_${timestamp}`; // agregar el timestamp al nombre del archivo
    this.imageService.uploadImage($event, name);
  }
  


  /*uploadImage($event:any){
    //const id = this.activatedRouter.snapshot.params['id'];
    const name = "proyect_"+ this.name;
    this.imageService.uploadImage($event, name);
    }*/
    
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
