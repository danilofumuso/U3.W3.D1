import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferitiRoutingModule } from './preferiti-routing.module';
import { PreferitiComponent } from './preferiti.component';
import { SharedModule } from '../../shared/product/shared.module';

@NgModule({
  declarations: [PreferitiComponent],
  imports: [CommonModule, PreferitiRoutingModule, SharedModule],
})
export class PreferitiModule {}
