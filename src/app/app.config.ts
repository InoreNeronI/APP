import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { LazyTranslateLoader } from './loaders/translate.loader';
import { AuthService } from './modules/auth/services/auth.service';
import { ExerciseService } from './services/exercise.service';
import { SubjectService } from './services/subject.service';
import { UnitService } from './services/unit.service';

export const appConfig: ApplicationConfig = {
  providers: [
    AuthService,
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: LazyTranslateLoader,
          deps: [HttpClient],
        },
      }),
    ),
    ExerciseService,
    provideAnimations(),
    provideHttpClient(),
    provideRouter(routes),
    provideToastr(),
    SubjectService,
    UnitService,
  ],
};
