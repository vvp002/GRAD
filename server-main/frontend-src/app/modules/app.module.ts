import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { CollegeService } from '../services/college.service';
import { UndergradDegreeService } from '../services/undergraddegree.service';
import { DepartmentService } from '../services/department.service';
import { CourseService } from '../services/course.service';
import { PubSubEventService } from '../services/pubsubevent.service';
import { PersistenceService } from '../services/persistence.service';

import { AppComponent } from '../components/app.component';
import { graphDisplayComponent } from '../components/app.graphDisplay';
import { NavComponent } from '../components/app.nav';
import { ToolbarComponent } from '../components/app.toolbar';
import { CardContainerComponent } from '../components/app.cardContainer';
import { CourseDegreeModal } from '../components/app.courseDegreeModal';
import { MultiNodeModal } from '../components/app.multiNodeModal';
import { WelcomeScreenComponent } from '../components/app.welcomeScreen';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        MaterialModule
    ],
    entryComponents: [
        CourseDegreeModal,
        MultiNodeModal
    ],
    declarations: [
        AppComponent,
        graphDisplayComponent,
        NavComponent,
        ToolbarComponent,
        CardContainerComponent,
        CourseDegreeModal,
        MultiNodeModal,
        WelcomeScreenComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        CollegeService,
        UndergradDegreeService,
        DepartmentService,
        CourseService,
        PubSubEventService,
        PersistenceService
    ]
})
export class AppModule {
}
