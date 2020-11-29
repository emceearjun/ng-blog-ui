import { NgModule } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToastModule } from 'primeng/toast';
import { PanelModule } from 'primeng/panel';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  imports: [
    InputTextModule,
    ButtonModule,
    EditorModule,
    SplitButtonModule,
    TabMenuModule,
    ProgressSpinnerModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    PanelModule,
    FileUploadModule,
  ],
  exports: [
    InputTextModule,
    ButtonModule,
    EditorModule,
    SplitButtonModule,
    TabMenuModule,
    RippleModule,
    ProgressSpinnerModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    PanelModule,
    FileUploadModule,
  ],
  providers: [MessageService],
})
export class PrimeComponentsModule {}
