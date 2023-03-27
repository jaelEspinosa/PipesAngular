import { NgModule } from '@angular/core';


//primeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule} from 'primeng/fieldset';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { SplitButtonModule } from 'primeng/splitbutton'




@NgModule({
  declarations: [],

  exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    TableModule,
    SplitButtonModule

  ]
})
export class PrimeNgModule { }
