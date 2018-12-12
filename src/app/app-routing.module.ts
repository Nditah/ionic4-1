import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { 
    path: 'instalacao', 
    loadChildren: './instalacao/instalacao.module#InstalacaoPageModule' 
  },
  { 
    path: 'layout', 
    loadChildren: './layout/layout.module#LayoutPageModule' 
  },
  { path: 'layoutHeaderFooter', loadChildren: './layout-header-footer/layout-header-footer.module#LayoutHeaderFooterPageModule' },
  { path: 'layoutTabs', loadChildren: './layout-tabs/layout-tabs.module#LayoutTabsPageModule' },
  { path: 'layoutMenu', loadChildren: './layout-menu/layout-menu.module#LayoutMenuPageModule' },
  { path: 'layoutSplitPane', loadChildren: './layout-split-pane/layout-split-pane.module#LayoutSplitPanePageModule' },
  { path: 'LayoutGrid', loadChildren: './layout-grid/layout-grid.module#LayoutGridPageModule' },
  { path: 'layoutCssUtilities', loadChildren: './layout-css-utilities/layout-css-utilities.module#LayoutCssUtilitiesPageModule' },
  { path: 'componente', loadChildren: './componente/componente.module#ComponentePageModule' },
  { path: 'componentActionSheet', loadChildren: './component-action-sheet/component-action-sheet.module#ComponentActionSheetPageModule' },
  { path: 'componentAlert', loadChildren: './component-alert/component-alert.module#ComponentAlertPageModule' },
  { path: 'componentBadges', loadChildren: './component-badges/component-badges.module#ComponentBadgesPageModule' },
  { path: 'componentButton', loadChildren: './component-button/component-button.module#ComponentButtonPageModule' },
  { path: 'componentCard', loadChildren: './component-card/component-card.module#ComponentCardPageModule' },
  { path: 'componentCheckbox', loadChildren: './component-checkbox/component-checkbox.module#ComponentCheckboxPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
