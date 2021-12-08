import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwardscertificationsComponent } from './awardscertifications/awardscertifications.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CareersComponent } from './careers/careers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CsrComponent } from './csr/csr.component';
import { EngineeredveneersComponent } from './engineeredveneers/engineeredveneers.component';
import { EnvironmentalsustainabilityComponent } from './environmentalsustainability/environmentalsustainability.component';
import { HomeComponent } from './home/home.component';
import { InvestorsComponent } from './investors/investors.component';
import { ManagementComponent } from './management/management.component';
import { MilestoneComponent } from './milestone/milestone.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { WoodcrrestsComponent } from './woodcrrests/woodcrrests.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  // Aboutus paths
  {path:'milestone',component:MilestoneComponent},
  {path:'awardscertifications',component:AwardscertificationsComponent},
  {path:'management',component:ManagementComponent},
  {path:'csr',component:CsrComponent},
  {path:'careers',component:CareersComponent},
  {path:'investors',component:InvestorsComponent},
  {path:'environmentalsustainability',component:EnvironmentalsustainabilityComponent},
  // media paths
  {path:'blogs',component:BlogsComponent},
  {path:'campaigns',component:CampaignsComponent},
  // Downloads paths
  {path:'engineeredveneers',component:EngineeredveneersComponent},
  {path:'woodcrrests',component:WoodcrrestsComponent},
  // ContactUs path & Privacy policy
  {path:'contactus',component:ContactusComponent},
  {path:'privacypolicy',component:PrivacypolicyComponent},
  // Login credentials
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
