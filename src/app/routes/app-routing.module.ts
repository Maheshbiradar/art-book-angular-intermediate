import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArtDetailComponent } from "../art-gallery/art-detail/art-detail.component";
import { ArtGalleryComponent } from "../art-gallery/art-gallery.component";
import { ArtStarterComponent } from "../art-gallery/art-starter/art-starter.component";
import { EditArtComponent } from "../art-gallery/edit-art/edit-art.component";
import { ArtShoppingCartComponent } from "../art-shopping-cart/art-shopping-cart.component";

const appRoutes: Routes = [
    {path: '', redirectTo:'/arts', pathMatch: 'full'},
    {path: 'arts', component: ArtGalleryComponent, children: [
        { path:'', component: ArtStarterComponent },
        { path:'new', component: EditArtComponent },
        { path:':id', component: ArtDetailComponent },
        { path: ':id/edit', component: EditArtComponent}
    ]},
    {path: 'cart', component: ArtShoppingCartComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}