import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MilestoneComponent } from './milestone/milestone.component';
import { AwardscertificationsComponent } from './awardscertifications/awardscertifications.component';
import { ManagementComponent } from './management/management.component';
import { CsrComponent } from './csr/csr.component';
import { EnvironmentalsustainabilityComponent } from './environmentalsustainability/environmentalsustainability.component';
import { CareersComponent } from './careers/careers.component';
import { InvestorsComponent } from './investors/investors.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { EngineeredveneersComponent } from './engineeredveneers/engineeredveneers.component';
import { WoodcrrestsComponent } from './woodcrrests/woodcrrests.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    MilestoneComponent,
    AwardscertificationsComponent,
    ManagementComponent,
    CsrComponent,
    EnvironmentalsustainabilityComponent,
    CareersComponent,
    InvestorsComponent,
    BlogsComponent,
    CampaignsComponent,
    EngineeredveneersComponent,
    WoodcrrestsComponent,
    ContactusComponent,
    PrivacypolicyComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
