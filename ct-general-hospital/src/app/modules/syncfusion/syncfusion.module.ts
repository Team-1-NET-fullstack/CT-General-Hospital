import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';

import {
  DropDownListAllModule,
  DropDownListModule,
  MultiSelectAllModule,
} from '@syncfusion/ej2-angular-dropdowns';
import {
  DatePickerAllModule,
  DateTimePickerAllModule,
  DateTimePickerModule,
  TimePickerAllModule,
} from '@syncfusion/ej2-angular-calendars';
import { BrowserModule } from '@angular/platform-browser';
import {
  CheckBoxAllModule,
  ButtonAllModule,
  SwitchAllModule,
} from '@syncfusion/ej2-angular-buttons';
import {
  NumericTextBoxAllModule,
  TextBoxAllModule,
  MaskedTextBoxModule,
  UploaderAllModule,
} from '@syncfusion/ej2-angular-inputs';
import {
  ToolbarAllModule,
  ContextMenuAllModule,
  TreeViewModule,
} from '@syncfusion/ej2-angular-navigations';
import {
  ScheduleAllModule,
  RecurrenceEditorAllModule,
} from '@syncfusion/ej2-angular-schedule';
import { DropDownButtonAllModule } from '@syncfusion/ej2-angular-splitbuttons';
import { ToastAllModule } from '@syncfusion/ej2-angular-notifications';

const syncfusionModules = [
  ScheduleModule,
  CommonModule,
  ScheduleAllModule,
  RecurrenceEditorAllModule,
  NumericTextBoxAllModule,
  TextBoxAllModule,
  DatePickerAllModule,
  TimePickerAllModule,
  DateTimePickerAllModule,
  CheckBoxAllModule,
  ToolbarAllModule,
  DropDownListAllModule,
  ContextMenuAllModule,
  MaskedTextBoxModule,
  UploaderAllModule,
  MultiSelectAllModule,
  TreeViewModule,
  ButtonAllModule,
  DropDownButtonAllModule,
  SwitchAllModule,
  BrowserModule,
  ToastAllModule,
  DropDownListModule,
  DateTimePickerModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...syncfusionModules],
  exports: [...syncfusionModules],
  providers: [],
  bootstrap: [],
})
export class SyncfusionModule {}
