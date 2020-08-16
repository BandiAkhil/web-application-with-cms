import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityListComponent } from 'src/app/shared/components/activity-helpers/activity-list/activity-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewsListComponent } from 'src/app/shared/components/news-list/news-list.component';
import { RouterModule } from '@angular/router';
import { AuthenticationDirective } from 'src/app/shared/directives/authentication.directive';
import { NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationTableComponent } from 'src/app/shared/components/pagination-table/pagination-table.component';
import { RoleDirective } from 'src/app/shared/directives/role.directive';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ArrowBackComponent } from 'src/app/shared/components/buttons/arrow-back/arrow-back.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { SnakeCaseToTextPipe } from 'src/app/shared/pipes/snake-case-to-text.pipe';
import { FlexibleColumnFormComponent } from 'src/app/shared/components/flexible-column-form/flexible-column-form.component';
import { ColumnInputComponent } from 'src/app/shared/components/flexible-column-form/column-input/column-input.component';
import { OptionInputTypeComponent } from 'src/app/shared/components/activity-helpers/option-input-type/option-input-type.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { ActivityRegistrationFormComponent } from 'src/app/shared/components/activity-helpers/activity-registration-form/activity-registration-form.component';
import { MemberSearchComponent } from 'src/app/shared/components/member-search/member-search.component';
import { ActivityMetaComponent } from 'src/app/shared/components/activity-helpers/activity-meta/activity-meta.component';
import { CentsToEurPipe } from 'src/app/shared/pipes/cents-to-eur.pipe';
import { RegisterModalComponent } from 'src/app/shared/components/activity-helpers/register-modal/register-modal.component';
import { HtmlEditorComponent } from 'src/app/shared/components/html-editor/html-editor.component';
import { HtmlToTextPipe } from 'src/app/shared/pipes/html-to-text.pipe';
import { EurToCentsPipe } from 'src/app/shared/pipes/eur-to-cents.pipe';
import { CommitteesListComponent } from 'src/app/shared/components/committees-list/committees-list.component';
import { MyRegistrationsListComponent } from 'src/app/shared/components/my-registrations-list/my-registrations-list.component';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import {environment} from 'src/environments/environment.prod';
import {MatButtonModule, MatProgressSpinnerModule} from '@angular/material';
import { PaymentComponent } from './components/payment/payment.component';

import { FilesUploadComponent } from 'src/app/shared/components/files-upload/files-upload.component';
import { FilesListComponent } from 'src/app/shared/components/files-upload/files-list/files-list.component';
import { DownloadListComponent } from 'src/app/shared/components/download-list/download-list.component';

@NgModule({
  declarations: [
    ActivityListComponent,
    NewsListComponent,
    AuthenticationDirective,
    PaginationTableComponent,
    RoleDirective,
    ArrowBackComponent,
    HeaderComponent,
    DeleteModalComponent,
    SnakeCaseToTextPipe,
    ColumnInputComponent,
    FlexibleColumnFormComponent,
    OptionInputTypeComponent,
    ActivityRegistrationFormComponent,
    MemberSearchComponent,
    ActivityMetaComponent,
    CentsToEurPipe,
    RegisterModalComponent,
    HtmlEditorComponent,
    HtmlToTextPipe,
    EurToCentsPipe,
    CommitteesListComponent,
    MyRegistrationsListComponent,
    PaymentComponent,
    MyRegistrationsListComponent,
    FilterPipe,
    FilesUploadComponent,
    FilesListComponent,
    DownloadListComponent
  ],
    imports: [
      CommonModule,
      FlexLayoutModule,
      RouterModule,
      NgbPaginationModule,
      FormsModule,
      ReactiveFormsModule,
      OwlDateTimeModule,
      OwlNativeDateTimeModule,
      MaterialModule,
      CKEditorModule,
      MatButtonModule,
      MatProgressSpinnerModule
    ],
  exports: [
    ActivityListComponent,
    NewsListComponent,
    CommonModule,
    FlexLayoutModule,
    AuthenticationDirective,
    FormsModule,
    ReactiveFormsModule,
    PaginationTableComponent,
    RoleDirective,
    ArrowBackComponent,
    HeaderComponent,
    MaterialModule,
    NgbModalModule,
    SnakeCaseToTextPipe,
    CentsToEurPipe,
    FlexibleColumnFormComponent,
    OptionInputTypeComponent,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ActivityRegistrationFormComponent,
    MemberSearchComponent,
    ActivityMetaComponent,
    HtmlEditorComponent,
    HtmlToTextPipe,
    CommitteesListComponent,
    MyRegistrationsListComponent,
    FilterPipe,
    FilesUploadComponent,
    FilesListComponent,
    DownloadListComponent
  ],
  providers: [
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'en-GB'},
    HtmlToTextPipe
  ],
  entryComponents: [
    DeleteModalComponent,
    RegisterModalComponent,
    PaymentComponent
  ]
})
export class SharedModule { }
