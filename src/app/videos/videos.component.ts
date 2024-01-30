import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {
  activePackage = [
    {
      packageImage: 'assets/Services/Medical-store.jpg',
      packageName: 'Dr. Surendra Kumar',
      packagePrice: 'Rs. 230',
      packageDescription: 'Some quick example text to build on the card title and make up the bulk of the card content.'
    },
    {
      packageImage: 'assets/Services/Medical-store.jpg',
      packageName: 'CBC (Complete Blood Count) Test',
      packagePrice: 'Rs. 150',
      packageDescription: 'Some quick example text to build on the card title and make up the bulk of the card content.'
    },
    {
      packageImage: 'assets/Services/Medical-store.jpg',
      packageName: 'Creatinine Serum Test',
      packagePrice: 'Rs. 150',
      packageDescription: 'Some quick example text to build on the card title and make up the bulk of the card content.'
    },
    {
      packageImage: 'assets/Services/Medical-store.jpg',
      packageName: 'C-Reactive Protein',
      packagePrice: 'Rs. 150',
      packageDescription: 'Some quick example text to build on the card title and make up the bulk of the card content.'
    },
  ]
  package = [
    {
      packageImage: 'assets/Services/Medical-store.jpg',
      packageName: 'Fasting Blood Sugar',
      packagePrice: 'Rs. 230',
      packageDescription: '  Blood sugar fasting test measures blood sugar after an overnight fast (not eating). Blood glucose (sugar) is derived from food and it is the main source of energy.'
    },
    {
      packageImage: 'assets/Services/Medical-store.jpg',
      packageName: 'HbA1C- Glycated Haemoglobin',
      packagePrice: 'Rs. 150',
      packageDescription: 'HbA1c or glycated haemoglobin is a blood test that reflect blood glucose levels in last three months. It is useful for diagnosis and management of diabetes and prediabetes. This test does not require fasting and is not affected by meals consumed immediately before the test (less prone to variation).'
    },
    {
      packageImage: 'assets/Services/Medical-store.jpg',
      packageName: 'Renal (Kidney) Function Tests',
      packagePrice: 'Rs. 150',
      packageDescription: ' Renal function tests (RFT) are done on urine and patient blood to establish how well the kidneys are working. They aid in the diagnosis and management of conditions affecting kidneys.'
    },
    {
      packageImage: 'assets/Services/Medical-store.jpg',
      packageName: 'Thyroid panel-1 (T3/T4/TSH) -600',
      packagePrice: 'Rs. 150',
      packageDescription: ' The Thyroid Panel-1 is a series of blood tests. These can be used to assess thyroid gland function and identify thyroid diseases. These tests count the number of thyroid hormones present in the blood.'
    },
  ]
  secondPackage = [
    {
      packageImage: 'assets/Services/Medical-store.jpg',
      packageName: 'Urea Test - Serum 230',
      packagePrice: 'Rs. 230',
      packageDescription: 'The urea test is a common blood test that is often used to assess kidney function.  High levels of urea nitrogen in the blood can be a sign of kidney  disease.'
    },
    {
      packageImage: 'assets/Services/Medical-store.jpg',
      packageName: 'Uric Acid Serum 250',
      packagePrice: 'Rs. 150',
      packageDescription: 'A uric acid test is a diagnostic test that measures the amounts of uric acid in the blood. A simple blood test is used to determine uric acid levels.'
    },
    {
      packageImage: 'assets/Services/Medical-store.jpg',
      packageName: 'Vitamin B12 Cyanocobalamin 1200',
      packagePrice: 'Rs. 150',
      packageDescription: '   Vitamin B 12 test meashures Vitamin B12 in the blood of the patient. Vegetarians are at risk of deficiency of Vitamin B12 as there are no plant sources of Vitamin B12.'
    },
    {
      packageImage: 'assets/Services/Medical-store.jpg',
      packageName: 'Vitamin D Total-25 Hydroxy Plasma/ Serum',
      packagePrice: 'Rs. 150',
      packageDescription: 'The ideal test to check vitamin D levels is the 25-hydroxy vitamin  D test.  The concentration of 25-hydroxyvitamin D in the blood is a reliable indicator of vitamin D levels in your body.'
    },
  ]
}
