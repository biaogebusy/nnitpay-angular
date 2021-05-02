import { ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsModule } from './widgets/widgets.module';
import { SkipSelf } from '@angular/core';
import { CombsModule } from './combs/combs.module';

const modules = [WidgetsModule, CombsModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...modules],
  exports: [...modules],
})
export class UiuxModule {}
