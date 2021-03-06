import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShareModule } from '../share/share.module';
import { MenuComponent } from './header/menu/menu.component';
import { UserMenuComponent } from './header/menu/user-menu/user-menu.component';
import { SwitchThemeComponent } from './header/menu/switch-theme/switch-theme.component';
import { PopupComponent } from './footer/popup/popup.component';
import { ItemMenuComponent } from './header/menu/item-menu/item-menu.component';
import { SubMenuComponent } from './header/menu/item-menu/sub-menu/sub-menu.component';
import { HeaderTopComponent } from './header/header-top/header-top.component';
import { WidgetsModule } from '../uiux/widgets/widgets.module';
import { LightComponent } from './footer/light/light.component';
import { InverseComponent } from './footer/inverse/inverse.component';
import { MenuItemComponent } from './footer/menu-item/menu-item.component';
import { SearchBoxComponent } from './header/menu/search-box/search-box.component';
import { HeaderBannerComponent } from './header/header-banner/header-banner.component';
import { HeroModule } from '../uiux/combs/hero/hero.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    UserMenuComponent,
    SwitchThemeComponent,
    PopupComponent,
    ItemMenuComponent,
    SubMenuComponent,
    MenuItemComponent,
    HeaderTopComponent,
    LightComponent,
    InverseComponent,
    SearchBoxComponent,
    HeaderBannerComponent,
  ],
  imports: [ShareModule, WidgetsModule, HeroModule],
  exports: [HeaderComponent, FooterComponent, MenuComponent],
})
export class BrandingModule {}
