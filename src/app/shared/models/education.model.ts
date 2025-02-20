export class EducationModel {
    img: string = '';
    name: string = '';
    preInfo: string = '';
    cost: string = '';
    language: string = '';
    duration: Duration = {
        period: '',
        amount: 0
    };
    cities: string[] = [];
    description: string[] = [];
    objectives: string[] = [];
    methodology: string[] = [];
    assesmentImplementation: string[] = [];
    dailyProgram: DailyProgram[] = [];
    isCertificated: boolean = true;
}

export class Duration {
    period: string = '';
    amount: number = 0;
} 

export class DailyProgram {
    title: string = '';
    morningSession: string[] = [];
    afternoonSession: string[] = [];
}