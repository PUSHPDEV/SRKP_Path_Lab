import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.css'
})
export class WhyChooseUsComponent {
  mainHeading = "Why Choose Us"

  chooseUs: any[] = [
    {
      imgUrl: 'assets/Choose-us/Lab.svg',
      heading: 'Advanced Labs',
      description: 'We use latest technology for the latest world because we know the demand of peoples.'

    },
    {
      imgUrl: 'assets/Choose-us/trusted-doctors.svg',
      heading: 'Trusted by Leading Doctors',
      description: 'We are always creative and and always lisen our costomers and we mix these two things and make beast design.'

    },
    {
      imgUrl: 'assets/Choose-us/24x7.png',
      heading: '24 x 7 User Support',
      description: 'If our customer has any problem and any query we are always happy to help then.'

    },
    {
      imgUrl: 'assets/Choose-us/accurate-reports.svg',
      heading: 'Accurate Reports',
      description: 'Everyone wants to live on top of the mountain, but all the happiness and growth occurs while you are climbing it'

    },
    {
      imgUrl: 'assets/Choose-us/support.png',
      heading: 'Patient Service Centres',
      description: 'Holding back technology to preserve broken business models is like allowing blacksmiths to veto the internal combustion engine in order to protect their horseshoes.'

    },
    {
      imgUrl: 'assets/Choose-us/cost.png',
      heading: 'Affordable cost',
      description: 'Love is a special word, and I use it only when I mean it. You say the word too much and it becomes cheap.'

    },

  ]
}
