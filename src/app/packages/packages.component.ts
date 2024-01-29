import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.css'
})
export class PackagesComponent {

  package: any[] = [
    {
      name: 'COMPLETE BLOOD COUNT; CBC',
      description: ' Complete blood count (CBC) is a blood test used to evaluate your overall health & wellness and detect a wide range of disorders like anemia, infection and leukemia.',
      imageUrl: 'assets/Packages/cbc-test.jpeg',
      price: '₹ 350'
    },
    {
      name: 'HbA1c; GLYCOSYLATED HEMOGLOBIN',
      description: 'HbA1c also called Glycated hemoglobin gives the average sugar level in the body over a period of 2 to 3 months unlike blood sugar which indicates daily level. This test is used to diagnose prediabetes, diagnose type 1 and type 2 diabetes & monitor your diabetes treatment plan. ',
      imageUrl: 'assets/Packages/hba1c.jpeg',
      price: '₹ 400'
    },
    {
      name: 'URINE EXAMINATION, ROUTINE; URINE, R/E',
      description: 'Urine analyses is a very useful test because it can often detect medical problems before additional symptoms arise. This test is most often performed to monitor overall health, to diagnose a medical problem or to monitor a medical condition like urinary tract infection, kidney stones, diabetes, liver & kidney problems. This test is routinely performed prior to any surgery.',
      imageUrl: 'assets/Packages/urine.jpg',
      price: '₹ 120'
    },
    {
      name: 'THYROID PROFILE, TOTAL',
      description: 'Thyroid profile test includes thyroid hormones T3, T4 & TSH which helps to evaluate the functioning of thyroid gland in the body. This profile indicates whether thyroid gland is under-functioning or over-functioning or the function is normal. It also helps to monitor patients who are on treatment for thyroid disease.',
      imageUrl: 'assets/Packages/thyroid.jpg',
      price: '₹ 550'
    },
    {
      name: 'GLUCOSE, FASTING (F)',
      description: 'Blood glucose / sugar is the main energy giving source in your body. It comes from the food you eat and is carried by blood to all the cells to use for its various functions.If sugar rises in your blood, you suffer from Diabetes which can be Type 1 or Type 2 or Prediabetes.',
      imageUrl: 'assets/Packages/sugar.jpg',
      price: '₹ 80'
    },
    {
      name: 'LIVER & KIDNEY PANEL',
      description: 'Liver function tests (LFT) are blood tests which are used to diagnose and monitor liver disease or damage. Levels that are higher or lower than normal can indicate liver problems. Kidney function tests (KFT) are usually ordered when a patient has risk factors for kidney dysfunction such as high blood pressure (hypertension), diabetes, cardiovascular disease, obesity, elevated cholesterol or a family history of kidney disease.',
      imageUrl: 'assets/Packages/LIVER & KIDNEY PANE.jpg',
      price: '₹ 1550'
    },
    {
      name: 'DENGUE FEVER NS1 ANTIGEN, EIA',
      description: 'Dengue fever is a mosquito borne illness prevalent in Southeast Asia, Latin America & Africa. It is caused by the bite of infected Aedes mosquito. Symptoms are like flu resulting in fever, headache & muscle pain.',
      imageUrl: 'assets/Packages/DENGUE FEVER NS1 ANTIGEN.jpg',
      price: '₹ 600'
    },
    {
      name: 'CULTURE, URINE',
      description: 'This test is used to diagnose any bacterial infection of the urinary tract which is the pathway urine takes till it is excreted out of the body.This test tells your doctor what bacteria are causing your infection and which medications will be most effective.',
      imageUrl: 'assets/Packages/urine.jpg',
      price: '₹ 810'
    },
    {
      name: 'PLATELET COUNT',
      description: 'Platelets (thrombocytes) are colorless blood cells that help blood clot. Platelets stop bleeding by clumping and forming plugs in blood vessel injuries. Low platelet counts are seen in infections like Dengue, bone marrow disorder such as leukemia or an immune system problem and can be a side effect of taking certain medications.',
      imageUrl: 'assets/Packages/PLATELET COUNT.jpg',
      price: '₹ 50'
    },
    {
      name: 'WIDAL SLIDE AGGLUTINATION TEST',
      description: ' Widal test (Slide method) is used to detect both typhoid & paratyphoid fevers. Contaminated food and water or close contact with an infected person causes typhoid fever. It is a bacterial infection caused by Salmonella. Symptoms include high fever, headache, stomach pain, constipation or diarrhea. As a precautionary measure, avoid food that is stored or served at room temperature. It is recommended to confirm a positive result by blood culture.',
      imageUrl: 'assets/Packages/WIDAL SLIDE AGGLUTINATION TEST.webp',
      price: '₹ 290'
    },
  ]
}
