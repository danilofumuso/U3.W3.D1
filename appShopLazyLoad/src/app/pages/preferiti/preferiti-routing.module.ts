import { RouterModule, Routes } from '@angular/router';
import { PreferitiComponent } from './preferiti.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: PreferitiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreferitiRoutingModule {}
