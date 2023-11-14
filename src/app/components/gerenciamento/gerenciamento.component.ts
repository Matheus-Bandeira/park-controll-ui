import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/services/configuration.service';

@Component({
  selector: 'app-gerenciamento',
  templateUrl: './gerenciamento.component.html',
  styleUrls: ['./gerenciamento.component.css']
})
export class GerenciamentoComponent implements OnInit {

  constructor(private service: ConfigurationService) { }

  qtdVagas: Object = 0;

  ngOnInit(): void {
    this.service.getPakingSpaces().subscribe(data => {
        this.qtdVagas = data
        console.log(this.qtdVagas);
    })
  }

}
