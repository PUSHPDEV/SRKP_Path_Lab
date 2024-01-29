import { Component } from '@angular/core';
import { ScrollTopButtonComponent } from "../scroll-top-button/scroll-top-button.component";

@Component({
    selector: 'app-services',
    standalone: true,
    templateUrl: './services.component.html',
    styleUrl: './services.component.css',
    imports: [ScrollTopButtonComponent]
})
export class ServicesComponent {


    ourServices = {
        our: 'Our',
        ser: 'services'
    }

    pharmacy = {
        name: 'Medical Store',
        url: 'assets/Services/Medical-store.jpg',
        description: 'we launching Soon a very dedicated "MEDICAL STORE" Where you all can get any kind of medicine in very affordable prices.',
    }

    bloodCollection = {
        name: 'Home Blood Collection',
        url: 'assets/Services/blood-collection.jpg',
        description: 'This is a short card.',
    }

    onlineReporting = {
        name: 'Online Reporting',
        url: 'assets/Services/Report.jpg',
        description: 'We Provide Online Reporting System, You Can Download Your Report by Your Phone or PC via Your Mail.',
    }

    doctorSuggestion = {
        name: 'Doctors Suggestion',
        url: 'assets/Services/Doctor-suggestion.jpg',
        description: 'After the blood report you can also take doctor suggestion for better medicine',
    }

    xRayCenter = {
        name: 'X-Ray Centere',
        url: 'assets/Services/X-Ray.jpg',
        description: 'This is a longer card with supporting text below as a natural content.',
    }

    opdFacility = {
        name: 'OPD Facility Available',
        url: 'assets/Services/Medical-store.jpg',
        description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    }

    wellness = {
        name: 'Wellness Solutions',
        url: 'assets/Services/wellness.jpg',
        description: 'We offer pre-employment check-ups, employee health plans, and annual check-ups for corporates to build a healthy workforce.',
    }

    nutritionDietition = {
        name: 'Nutrition & Dietition',
        url: 'assets/Services/nutrition-diet.jpg',
        description: 'This is a longer card with longer.',
    }

    medicalStore = {
        name: 'Medical Store',
        url: 'assets/Services/Medical-store.jpg',
        description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    }

}
