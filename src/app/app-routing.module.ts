import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from 'src/app/components/configuration/configuration.component';
import { FinanceiroComponent } from 'src/app/components/financeiro/financeiro.component';
import { FluxoComponent } from 'src/app/components/fluxo/fluxo.component';
import { GerenciamentoComponent } from 'src/app/components/gerenciamento/gerenciamento.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: GerenciamentoComponent},
  {path: 'gerenciamento', component: GerenciamentoComponent},
  {path: 'financeiro', component: FinanceiroComponent},
  {path: 'fluxo', component: FluxoComponent},
  {path: 'config', component: ConfigurationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
