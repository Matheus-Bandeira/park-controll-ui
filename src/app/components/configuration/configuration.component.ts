import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ParkSpaces } from 'src/app/model/parkSpaces.model';
import { ConfigurationService } from 'src/app/services/configuration.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  mensagem: string = '';
  constructor(private service: ConfigurationService) { }

  ngOnInit(): void {

  }

  formSpaces = new FormGroup({
    spaces: new FormControl('')
  });


  get form(): any {
    return this.formSpaces.controls;
  }

  onSubmit(): void {
     this.service.configurar(this.formSpaces.value)
     .subscribe({
        next: (data: any) => {
          this.mensagem = "Salvo com sucesso!";
          this.formSpaces.reset();
        }
     })
  }
}
