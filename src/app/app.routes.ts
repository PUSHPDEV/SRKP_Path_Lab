import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './Our-Services/services.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ImagesComponent } from './images/images.component';
import { VideosComponent } from './videos/videos.component';
import { PackagesComponent } from './packages/packages.component';
import { LoginComponent } from './login/login.component';
import { CustomersSayComponent } from './customers-say/customers-say.component';

export const routes: Routes = [
    { 'path': 'home', 'title': 'Home', component: HomeComponent },
    { 'path': '', redirectTo: '/home', pathMatch: 'full' },
    { 'path': 'package', 'title': 'Packages', component: PackagesComponent },
    { 'path': 'about', 'title': 'About Us', component: AboutUsComponent },
    { 'path': 'contact', 'title': 'Contact Us', component: ContactUsComponent },
    { 'path': 'service', 'title': 'Our Services', component: ServicesComponent },
    { 'path': 'image', 'title': 'Images', component: ImagesComponent },
    { 'path': 'video', 'title': 'Videos', component: VideosComponent },
    { 'path': 'login', 'title': 'Login', component: LoginComponent },
    { 'path': 'customers-say', 'title': 'Customers Say', component: CustomersSayComponent },
    { 'path': '**', 'title': 'Page Not Found', component: PageNotFoundComponent }

];
